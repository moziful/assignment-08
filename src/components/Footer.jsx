import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-base-300 bg-base-100">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="flex gap-0 text-3xl font-bold sm:text-4xl">
              <span className="text-base-content">Skill</span>
              <span className="text-purple-800">Sphere</span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-base-content/70">
              Learn, grow, and build your skills with curated courses and a
              simple learning process with a great experience.
            </p>
          </div>

          <div className="rounded-2xl bg-base-200 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-800/70">
              Contact Info
            </h3>
            <div className="mt-4 grid gap-3 text-sm md:grid-cols-2 lg:grid-cols-1">
              <Link href="mailto:support@skillsphere.com" className="group">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3">
                  <FaEnvelope className="shrink-0 text-lg text-purple-800" />
                  <span className="break-all">support@skillsphere.com</span>
                </div>
              </Link>
              <Link href="tel:+8801000000000" className="group">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3">
                  <FaPhoneAlt className="shrink-0 text-lg text-purple-800" />
                  <span>+880 1000 000 000</span>
                </div>
              </Link>
              <Link
                href="https://www.google.com/maps/place/Dhaka,+Bangladesh"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3">
                  <FaMapMarkerAlt className="shrink-0 text-lg text-purple-800" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-base-200 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-800/70">
              Social Links
            </h3>
            <div className="mt-4 grid gap-3 text-sm md:grid-cols-2 lg:grid-cols-1">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3">
                  <FaFacebookF className="shrink-0 text-lg text-purple-800" />
                  <span>Facebook</span>
                </div>
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3">
                  <FaInstagram className="shrink-0 text-lg text-purple-800" />
                  <span>Instagram</span>
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3">
                  <FaLinkedinIn className="shrink-0 text-lg text-purple-800" />
                  <span>LinkedIn</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-base-300">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 text-center text-sm text-base-content/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:text-left lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} SkillSphere. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-end">
            <Link href="#">Terms &amp; Conditions</Link>
            <span aria-hidden="true">|</span>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
