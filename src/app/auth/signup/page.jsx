"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/",
    });
    console.log("User created:", error, data);
  };
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
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

        <label className="fieldset">
          <span className="label">Password</span>
          <input
            type="password"
            name="password"
            className="input validator"
            placeholder="Password"
            required
          />
          <span className="validator-hint hidden">Required</span>
        </label>

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
    </div>
  );
};

export default SignUpPage;
