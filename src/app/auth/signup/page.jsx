"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ScrollReveal from "@/components/ScrollReveal";

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const image = formData.get("image");

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      callbackURL: "/auth/signin",
    });
    console.log(error, data);
    if (error) {
      setErrorMessage(error);
      toast.error(error?.message || "Sign up failed");
      return;
    }

    toast.success("Account created successfully");
    router.push("/auth/signin");
  };

  return (
    <div className="flex flex-col my-8 sm:h-[90vh] justify-center items-center">
      <ScrollReveal className="w-full max-w-sm">
        <form
          onSubmit={onSubmit}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <h3 className="border-b-2 font-bold text-2xl text-center py-2">
            Create An Account
          </h3>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input validator"
              placeholder="Name"
              required
            />
            <p className="validator-hint hidden">Required</p>
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input validator"
              placeholder="Email"
              required
            />
            <p className="validator-hint hidden">Required</p>
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input validator"
              placeholder="Password"
              required
            />
            <p className="validator-hint hidden">Required</p>
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="image"
              className="input validator"
              placeholder="Photo URL"
              required
            />
            <p className="validator-hint hidden">Required</p>
          </fieldset>
          <p
            className={`border-2 py-2 rounded-md border-red-500 bg-red-400 text-white font-bold text-center ${errorMessage ? "block" : "hidden"}`}
          >
            {errorMessage?.message}
          </p>
          <button className="btn btn-neutral mt-4" type="submit">
            Sign Up
          </button>
          <button className="btn mt-1" type="reset">
            Reset
          </button>
          <div className="flex w-full text-sm text-center items-center gap-2">
            <p>Already have an account?</p>
            <Link href="/auth/signin" className="link">
              Log In
            </Link>
          </div>
        </form>
      </ScrollReveal>
    </div>
  );
};

export default SignUpPage;
