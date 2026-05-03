"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const SignInPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  useEffect(() => {
    setErrorMessage(null);
  }, [callbackUrl]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const email = userData.email;
    const password = userData.password;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: callbackUrl,
    });

    if (error) {
      setErrorMessage(error);
      return;
    }

    console.log(data);
    router.push(callbackUrl);
  };
  return (
    <div className="flex flex-col my-8 sm:h-[90vh] justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <h3 className="border-b-2 font-bold text-2xl text-center py-2">
          Log In to SkillSphere
        </h3>
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
        <p
          className={`border-2 py-2 rounded-md border-red-500 bg-red-400 text-white font-bold text-center ${errorMessage ? "block" : "hidden"}`}
        >
          {errorMessage?.message}
        </p>
        <button className="btn btn-neutral mt-4" type="submit">
          Login
        </button>
        <button className="btn mt-1" type="reset">
          Reset
        </button>
        <div className="flex w-full text-sm text-center items-center gap-2">
          <p>Don't have an account?</p>
          <Link href="/auth/signup" className="link">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
