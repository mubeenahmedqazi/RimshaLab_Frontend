"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Buttons() {
  const router = useRouter();

  const buttonData = [
    {
      text: "Health Card",
      image: "/HealthCard.jpg",
      path: "/HealthCardApply"
    },
    {
      text: "Book Appointment",
      image: "/BookAppointment.jpg",
      path: "/BookingSample"
    },
    {
      text: "Explore Departments",
      image: "/Gallery.jpg",
      path: "/services#departments"
    },
    {
      text: "Contact Us",
      image: "/Contactus.jpg",
      path: "/contact"
    },
  ];

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative py-40 bg-gradient-to-br from-indigo-100 via-white to-indigo-200 text-center overflow-hidden">

  {/* Soft glowing blobs */}
  <div className="absolute top-[-10rem] left-[-10rem] w-[40rem] h-[40rem] bg-indigo-400/30 blur-[200px] rounded-full" />
  <div className="absolute bottom-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-blue-400/30 blur-[200px] rounded-full" />

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-extrabold text-indigo-900 mb-20 drop-shadow-lg tracking-wide"
  >
    Explore Our Services
  </motion.h2>

  {/* Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14 px-10 relative z-20">
    {buttonData.map((item, i) => (
      <motion.div
        key={i}
        whileHover={{
          scale: 1.08,
          rotate: 1,
          boxShadow: "0px 30px 80px rgba(88, 28, 255, 0.35)",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        onClick={() => handleClick(item.path)}
        className="relative group rounded-3xl overflow-hidden shadow-2xl cursor-pointer
                   backdrop-blur-xl bg-white/10 border border-white/30"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1600ms] group-hover:scale-125 group-hover:rotate-1"
          style={{ backgroundImage: `url(${item.image})` }}
        />

        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 opacity-90" />

        {/* Neon Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-indigo-300/20 
                        group-hover:border-indigo-400/60 transition-all duration-700" />

        {/* Animated Light Sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                        translate-x-[-100%] group-hover:translate-x-[100%] 
                        transition-transform duration-[1400ms] ease-in-out"></div>

        {/* Text */}
        <div className="relative z-10 flex items-center justify-center py-20">
          <span className="text-white text-4xl font-extrabold tracking-widest drop-shadow-2xl uppercase 
                           group-hover:text-indigo-200 transition-all duration-700">
            {item.text}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
</section>

  );
}