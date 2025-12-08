"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-white py-10 overflow-hidden">
      {/* 🌌 Light Glow Effects */}
      <motion.div
        initial={{ opacity: 0.3, y: 10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 right-10 w-40 h-40 bg-indigo-400 rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0.2, y: -10 }}
        animate={{ opacity: 0.4, y: 10 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-10 w-48 h-48 bg-blue-400 rounded-full blur-[120px]"
      />

      {/* ⚡ Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-8 z-10 relative">

        {/* 🧬 Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold mb-3 text-white tracking-wide">Rimsha Lab</h2>
          <p className="text-gray-300 text-base mb-5 leading-relaxed">
            Delivering reliable, high-quality diagnostic results with expert care and innovation.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <motion.a
              href="https://www.facebook.com/people/Rimsha-Lab/100089841353846/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              <FaFacebookF className="text-lg" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/rimshalab/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              <FaInstagram className="text-lg" />
            </motion.a>
          </div>
        </div>

        {/* ⚡ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <Link
                  href={link.path}
                  className="block px-4 py-3 text-gray-300 hover:text-white text-base font-medium"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ☎ Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-base">
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all duration-300"
            >
              <FaMapMarkerAlt className="text-indigo-300 text-lg" /> Street 2, Nadirabad, Bedian Road, Lahore
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all duration-300"
            >
              <FaPhoneAlt className="text-indigo-300 text-lg" /> +92 300 1234567
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all duration-300"
            >
              <FaEnvelope className="text-indigo-300 text-lg" /> info@rimshalab.com
            </motion.li>
          </ul>
        </div>

        {/* 🗺 Google Map */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-indigo-700/40 hover:shadow-indigo-400/30 transition-all duration-500"
        >
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27207.762279407084!2d74.3949372!3d31.4941476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f31ca8553f5%3A0x7400545d293c11ba!2sRimsha%20Labs!5e0!3m2!1sen!2s!4v1730482116807!5m2!1sen!2s"
  width="100%"
  height="340"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </motion.div>
      </div>

      {/* 🔻 Bottom Bar */}
      <div className="mt-4 border-t border-indigo-700/40 pt-6 text-center text-gray-400 text-sm tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-indigo-200">Rimsha Lab</span> — All Rights Reserved.
      </div>
    </footer>
  );
}
