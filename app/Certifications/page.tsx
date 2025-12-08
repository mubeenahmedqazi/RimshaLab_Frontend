"use client";

import { useState } from "react";
import Image from "next/image";

export default function Certifications() {
  const certificates = [
    { title: "A.T Waste Management", image: "/Certificate 3.webp" },
    { title: "Quality Excellency", image: "/Certificate2.webp" },
    { title: "Health Care Punjab Registration", image: "/HealthCare.webp" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-indigo-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center text-indigo-900 mb-12">Certifications</h1>

      {/* Certificates Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 justify-center">
        {certificates.map((cert, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(cert.image)}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-center"
          >
            <div className="relative w-80 h-64">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-indigo-900">{cert.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Full Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={selectedImage}
              alt="Certificate Full View"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-red-400 transition"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
