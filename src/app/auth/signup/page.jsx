import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center">
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
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
            className="input validator"
            placeholder="Password"
            required
          />
          <span className="validator-hint hidden">Required</span>
        </label>

        <button className="btn btn-neutral mt-4" type="submit">
          Login
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
