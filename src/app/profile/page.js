"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import Loader from "@/components/Loader";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";

export default function ProfilePage() {
  const router = useRouter();
  const didRedirect = useRef(false);
  const { data, isPending } = useSession();
  const user = data?.user;
  useEffect(() => {
    if (!isPending && !user && !didRedirect.current) {
      didRedirect.current = true;
      toast.info("Please log in to view your profile");
      router.replace("/auth/signin?callbackUrl=/profile");
    }
  }, [isPending, user, router]);
  if (isPending || !user) {
    return <Loader />;
  }
  return (
    <section className="bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-800">
            My Profile
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-base-content sm:text-4xl">
            Manage your account details
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-base-content/70 sm:text-base">
            View your profile information and update your name or photo when
            needed.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="rounded-lg border border-base-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-purple-100">
                <Image
                  src={user.image || "/fallback-avatar.png"}
                  alt={user.name || "Profile"}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-base-content">
                {user.name || "SkillSphere User"}
              </h2>
              <p className="mt-1 text-sm text-base-content/60">{user.email}</p>
              <div className="mt-6 w-full space-y-3 rounded-3xl bg-base-100 p-4 text-left">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-base-content/40">
                    Name
                  </p>
                  <p className="mt-1 font-semibold text-base-content">
                    {user.name || "-"}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-base-content/40">
                    Email
                  </p>
                  <p className="mt-1 font-semibold text-base-content">
                    {user.email || "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-base-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-base-content">
                  Profile Settings
                </h2>
                <p className="mt-1 text-sm text-base-content/60">
                  Update your display name and profile photo.
                </p>
              </div>
              <Link href="/profile/update" className="btn btn-neutral">
                <FaUserEdit />
                Update Information
              </Link>
            </div>
            <div className="mt-8 grid gap-4 rounded-3xl bg-base-100 p-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-base-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-base-content/40">
                  Logged in as
                </p>
                <p className="mt-2 font-medium text-base-content">
                  {user.email}
                </p>
              </div>
              <div className="rounded-2xl border border-base-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-base-content/40">
                  Account Status
                </p>
                <p className="mt-2 font-medium text-emerald-600">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
