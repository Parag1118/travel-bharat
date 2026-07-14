import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Travel Bharat
          </h2>
          <p className="mt-4 text-gray-300">
            Discover the beauty, culture and heritage of every Indian state.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        © 2026 Travel Bharat. All Rights Reserved.
      </div>
    </footer>
  );
}