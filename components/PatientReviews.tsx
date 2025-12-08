"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const reviews = [
  {
    name: "Ayesha Khan",
    text: "Rimsha Lab provided my results quickly and with great accuracy. The staff was polite and professional.",
    rating: 5,
  },
  {
    name: "Ali Raza",
    text: "State-of-the-art facilities and an excellent environment. Truly one of the best labs in Lahore.",
    rating: 5,
  },
  {
    name: "Sara Ahmed",
    text: "Very efficient service. I booked my test online and everything went smoothly.",
    rating: 4,
  },
  {
    name: "Hassan Malik",
    text: "Professional staff and timely delivery of reports. Highly recommended for all diagnostic needs!",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    text: "Clean environment, skilled technicians, and a trustworthy service. My family always prefers Rimsha Lab.",
    rating: 5,
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  // ✅ Auto slide every 3 seconds without useEffect
  if (typeof window !== "undefined") {
    clearTimeout((window as any).reviewTimer);
    (window as any).reviewTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">
        What Our Patients Say
      </h2>

      <div className="relative w-full flex justify-center items-center h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute w-[90%] md:w-[50%] bg-white p-8 rounded-2xl shadow-2xl border border-indigo-100"
          >
            <div className="flex justify-center mb-3">
              {Array.from({ length: reviews[index].rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4 text-lg">
              “{reviews[index].text}”
            </p>
            <h3 className="text-indigo-900 font-semibold text-xl">
              {reviews[index].name}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
