"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between fixed -top-0 px-8 md:px-20 py-40 bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white overflow-hidden">
      
      {/* Left Side - Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 8,     // +2 seconds added
          repeat: Infinity,
          repeatDelay: 0.5,
          repeatType: "mirror",
        }}
        className="max-w-xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Trusted Diagnostics, <br /> Expert Healthcare
        </h1>

        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          Rimsha Lab combines cutting-edge technology with professional care to deliver fast, accurate, and reliable results — because your health deserves precision.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/BookingSample")}
          className="bg-white text-indigo-800 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-100 hover:shadow-2xl transition-all duration-300"
        >
          Book Home Collection
        </motion.button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 8,     // +2 seconds added
          repeat: Infinity,
          repeatDelay: 0.5,
          repeatType: "mirror",
        }}
        className="mt-10 md:mt-0 relative w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-[350px] h-[350px] md:w-[480px] md:h-[480px]">
          <Image
            src="/Banner.jpg"
            alt="Rimsha Lab Diagnostic Equipment"
            fill
            className="object-cover rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500 ease-in-out"
            priority
          />
        </div>

        {/* Glow Effect */}
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
      </motion.div>
    </section>
  );
}
