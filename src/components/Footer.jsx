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
    <footer className="mx-20 mt-auto border-t border-base-300 bg-base-100">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="flex gap-0 text-2xl font-bold">
            <span className="text-black">Skill</span>
            <span className="text-purple-800">Sphere</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-base-content/70">
            Learn, grow, and build your skills with curated courses and a simple
            learning experience.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/60">
            Contact Info
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="mailto:support@skillsphere.com"
                className="link link-hover inline-flex items-center gap-2"
              >
                <FaEnvelope />
                support@skillsphere.com
              </a>
            </li>
            <li>
              <a
                href="tel:+8801000000000"
                className="link link-hover inline-flex items-center gap-2"
              >
                <FaPhoneAlt />
                +880 1000 000 000
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-base-content/70">
              <FaMapMarkerAlt />
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/60">
            Social Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="link link-hover inline-flex items-center gap-2"
              >
                <FaFacebookF />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="link link-hover inline-flex items-center gap-2"
              >
                <FaInstagram />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="link link-hover inline-flex items-center gap-2"
              >
                <FaLinkedinIn />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-base-300">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-4 text-sm text-base-content/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms-and-conditions" className="link link-hover">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className="link link-hover">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
