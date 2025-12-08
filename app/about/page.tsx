"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-100 via-white to-indigo-50 py-28 px-8 md:px-20 overflow-hidden">
      {/* Floating background glow effects */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 right-16 w-44 h-44 bg-indigo-300 rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-16 left-16 w-56 h-56 bg-indigo-200 rounded-full blur-[120px]"
      />

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 z-10 relative">
        {/* LEFT SIDE — TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="md:w-1/2"
        >
          <h1 className="text-6xl font-extrabold text-indigo-900 leading-tight mb-8 drop-shadow-md">
            Redefining <br />
            <span className="text-indigo-600">Diagnostic Excellence</span>
          </h1>

          <p className="text-gray-700 text-xl leading-relaxed mb-8">
            Rimsha Lab is a pioneer in providing accurate diagnostic services with modern
            technology, expert staff, and a commitment to patient care. We ensure every test
            reflects trust, precision, and innovation.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            With a legacy built over <strong>two decades</strong>, Rimsha Lab continues to set
            new standards in healthcare diagnostics — where every report speaks of reliability.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Established in <strong>2005</strong> as a modest diagnostic center in Lahore, Pakistan,
            Rimsha Lab began its journey with a singular vision — to bring world-class testing
            accuracy within the reach of every patient. Through perseverance and an unwavering
            commitment to excellence, the lab evolved from a small facility into a recognized name
            in healthcare diagnostics, introducing modern testing methodologies and maintaining
            the highest ethical and technical standards.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            By <strong>2021</strong>, Rimsha Lab expanded its footprint by inaugurating a state-of-the-art
            <strong> Collection Center</strong> in Saddar, Lahore, and forming professional collaborations
            with more than <strong>20 leading clinics and doctors</strong> across the city. This strategic
            growth not only strengthened its diagnostic network but also reaffirmed its position as a trusted
            partner in the medical community — uniting technology, expertise, and compassion under one vision
            of healthier lives.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(79,70,229,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-800 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg 
                         hover:bg-white hover:text-indigo-900 transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT SIDE — IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="md:w-1/2 relative"
        >
          <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            <Image
              src="/Aboutus.jpg"
              alt="Rimsha Lab Professionals"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent"></div>
          </div>

          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white backdrop-blur-lg 
                       rounded-2xl shadow-2xl p-8 w-[80%] text-center border border-indigo-100"
          >
            <h3 className="text-2xl font-bold text-indigo-800">20+ Years of Excellence</h3>
            <p className="text-gray-600 mt-2 text-base">
              Trusted by thousands since 2005 for reliable results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
