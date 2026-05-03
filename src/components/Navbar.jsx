"use client";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Loader from "@/components/Loader";

const Navbar = () => {
  const { data, isPending } = useSession();

  if (isPending) {
    return <Loader />;
  }
  console.log("Session data in Navbar:", data);

  const userData = data?.user;
  return (
    <div className="navbar container mx-auto px-4 bg-base-100 shadow-sm xl:rounded-lg xl:mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="font-semibold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <div className="flex gap-0 text-xl md:text-2xl font-bold">
            <span>Skill</span>
            <span className="text-purple-800">Sphere</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-semibold menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {userData ? (
          <>
            <span className="mr-1">
              <Image
                src={userData.image || "/fallback-avatar.png"}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </span>
            <button onClick={() => signOut()} className="btn px-4">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/signin" className="btn ml-2">
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
