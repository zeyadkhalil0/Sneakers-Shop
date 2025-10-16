import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-semibold text-white mb-4">MyShoes</h1>
          <p className="text-gray-400 leading-relaxed">
            Discover the best sneakers from top brands with exclusive discounts
            and fast delivery. Comfort and style in every step.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-indigo-500 transition">Home</a></li>
            <li><a href="/products" className="hover:text-indigo-500 transition">Products</a></li>
            <li><a href="/#offers" className="hover:text-indigo-500 transition">Offers</a></li>
            <li><a href="/AboutUs" className="hover:text-indigo-500 transition">About</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-indigo-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Made By Dev | Zeyad Muhammad khalil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
