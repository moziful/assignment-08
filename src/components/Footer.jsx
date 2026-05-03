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
          <div className="flex gap-0 text-4xl font-bold">
            <span className="text-black">Skill</span>
            <span className="text-purple-800">Sphere</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-base-content/70">
            Learn, grow, and build your skills with curated courses and a simple
            learning process with great experience.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-800/70">
            Contact Info
          </h3>
          <div className="w-1/2 mt-3 space-y-2 flex flex-col gap-1 text-sm">
            <Link href="mailto:support@skillsphere.com">
              <div className="border rounded  flex items-center gap-2 border-gray-200 p-2 px-4">
                <FaEnvelope />
                support@skillsphere.com
              </div>
            </Link>
            <Link href="tel:+8801000000000">
              <div className="border rounded  flex items-center gap-2 border-gray-200 p-2 px-4">
                <FaPhoneAlt />
                +880 1000 000 000
              </div>
            </Link>
            <Link
              href="https://www.google.com/maps/place/Dhaka,+Bangladesh"
              target="_blank"
            >
              <div className="border rounded  flex items-center gap-2 border-gray-200 p-2 px-4">
                <FaMapMarkerAlt />
                Dhaka, Bangladesh
              </div>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-800/70">
            Social Links
          </h3>
          <div className="flex flex-col gap-1 w-1/2 mt-3 space-y-2 text-sm">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border rounded  flex items-center gap-2 border-gray-200 p-2 px-4">
                <FaFacebookF />
                Facebook
              </div>
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border rounded  flex items-center gap-2 border-gray-200 p-2 px-4">
                <FaInstagram />
                Instagram
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border rounded  flex items-center gap-2 border-gray-200 p-2 px-4">
                <FaLinkedinIn />
                LinkedIn
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-base-300">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-4 text-sm text-base-content/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#">Terms &amp; Conditions</Link>
            <p>|</p>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
