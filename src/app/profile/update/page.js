"use client";

import Loader from "@/components/Loader";
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ScrollReveal from "@/components/ScrollReveal";

export default function UpdateProfilePage() {
  const router = useRouter();
  const didRedirect = useRef(false);
  const { data, isPending } = useSession();
  const user = data?.user;
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (!isPending && !user && !didRedirect.current) {
      didRedirect.current = true;
      toast.info("Please log in to update your profile");
      router.replace("/auth/signin?callbackUrl=/profile/update");
    }
  }, [isPending, user, router]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");
    setIsSubmitting(true);
    const { error } = await authClient.updateUser({
      name,
      image,
    });
    setIsSubmitting(false);
    if (error) {
      toast.error(error?.message || "Profile update failed");
      return;
    }
    toast.success("Profile updated successfully");
    router.push("/profile");
  };
  if (isPending || !user) {
    return <Loader />;
  }
  return (
    <section className="bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <ScrollReveal>
          <div className="rounded-lg border border-base-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-800">
                Update Profile
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-base-content sm:text-4xl">
                Edit your information
              </h1>
              <p className="mt-3 text-sm text-base-content/60">
                Change your name and profile image URL here.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-purple-100">
                <Image
                  src={user.image || "/fallback-avatar.png"}
                  alt={user.name || "Profile"}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-base-content/60">{user.email}</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  defaultValue={user.name || ""}
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Image URL</span>
                </label>
                <input
                  type="url"
                  name="image"
                  className="input input-bordered w-full"
                  defaultValue={user.image || ""}
                  required
                />
              </div>
              <button className="btn btn-neutral w-full" type="submit" disabled={isSubmitting}>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
