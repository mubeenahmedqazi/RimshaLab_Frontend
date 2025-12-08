"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const slides = [
  { src: "/Crousel image4.jpg", text: "Accurate Diagnostics, Trusted Results" },
  { src: "/Crousel image2.jpg", text: "Modern Technology, Expert Care" },
  { src: "/Crousel image3.jpg", text: "Your Health, Our Priority" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // ✅ Auto-slide every 4 seconds without useEffect (recursive timeout)
  if (typeof window !== "undefined") {
    clearTimeout((window as any).carouselTimer);
    (window as any).carouselTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  }

  return (
    <div className="relative w-full left-0.1 h-[80vh] fixed top-[-0] overflow-hidden rounded-xl shadow-lg mt-[90px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute w-full h-full"
        >
          {/* Image */}
          <Image
            src={slides[index].src}
            alt={`Slide ${index}`}
            fill
            className="object-cover"
            priority
          />

          {/* Text overlay (slight blur removed, softer dark layer) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold tracking-wide drop-shadow-lg text-center px-6">
              {slides[index].text}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
