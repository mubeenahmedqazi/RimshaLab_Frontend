"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function TrackHealthCard() {
  const [cnic, setCnic] = useState("");
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState<any | null>(null);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const formatCNIC = (cnic: string) => {
    const digits = cnic.replace(/\D/g, "");
    if (digits.length !== 13) return cnic;
    return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
  };

  const handleVerify = async () => {
    setError("");
    setCard(null);

    const digits = cnic.replace(/\D/g, "");
    if (digits.length !== 13) {
      setError("Enter a valid 13-digit CNIC");
      return;
    }

    setLoading(true);
    try {
      // Use environment variable or condition
      //const API_URL = process.env.NEXT_PUBLIC_API_URL;


      const res = await fetch(
        `https://rimsha-lab-backend.vercel.app/api/health-card/by-cnic/${digits}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      if (!data.success) {
        setError("CNIC not found or card not approved yet");
        return;
      }

      if (data.healthCard.status !== "approved") {
        setError("Health Card Request is pending. Waiting for approval...");
        return;
      }

      setCard(data.healthCard);
      setShowModal(true);
    } catch (err) {
      console.error(err);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCard(null);
  };

  const printCard = async () => {
    if (!cardRef.current) return;

    try {
      // Create a temporary container with simplified colors
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '640px'; // Fixed width for consistency
      tempContainer.style.backgroundColor = '#3730a3';

      // Clone and simplify the content
      const clone = cardRef.current.cloneNode(true) as HTMLElement;

      // Remove the print button from clone
      const printButton = clone.querySelector('button');
      if (printButton) {
        printButton.remove();
      }

      // Replace background colors with hex values
      const elementsWithBg = clone.querySelectorAll('[class*="bg-"]');
      elementsWithBg.forEach((element) => {
        const classList = element.classList;
        if (classList.contains('bg-indigo-900') || classList.contains('bg-indigo-900/95')) {
          (element as HTMLElement).style.backgroundColor = '#3730a3';
        }
        if (classList.contains('bg-white')) {
          (element as HTMLElement).style.backgroundColor = '#ffffff';
        }
        if (classList.contains('bg-gray-200')) {
          (element as HTMLElement).style.backgroundColor = '#e5e7eb';
        }
        if (classList.contains('bg-green-600')) {
          (element as HTMLElement).style.backgroundColor = '#16a34a';
        }
      });

      // Replace text colors with hex values
      const elementsWithText = clone.querySelectorAll('[class*="text-"]');
      elementsWithText.forEach((element) => {
        const classList = element.classList;
        if (classList.contains('text-white')) {
          (element as HTMLElement).style.color = '#ffffff';
        }
        if (classList.contains('text-gray-400')) {
          (element as HTMLElement).style.color = '#9ca3af';
        }
        if (classList.contains('text-red-500')) {
          (element as HTMLElement).style.color = '#ef4444';
        }
      });

      // Replace border colors with hex values
      const elementsWithBorder = clone.querySelectorAll('[class*="border-"]');
      elementsWithBorder.forEach((element) => {
        const classList = element.classList;
        if (classList.contains('border-indigo-900') || classList.contains('border-indigo-900/95')) {
          (element as HTMLElement).style.borderColor = '#3730a3';
        }
        if (classList.contains('border-white')) {
          (element as HTMLElement).style.borderColor = '#ffffff';
        }
        if (classList.contains('border-white/30')) {
          (element as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }
        if (classList.contains('border-indigo-200')) {
          (element as HTMLElement).style.borderColor = '#c7d2fe';
        }
        if (classList.contains('border-indigo-300')) {
          (element as HTMLElement).style.borderColor = '#a5b4fc';
        }
      });

      tempContainer.appendChild(clone);
      document.body.appendChild(tempContainer);

      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        backgroundColor: '#3730a3',
        // useCORS: false,
        logging: false
      });

      // Clean up
      document.body.removeChild(tempContainer);

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`HealthCard-${card?.cnic}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again or use the browser print function (Ctrl+P).");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 flex flex-col items-center py-35 px-4 relative">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-12 text-center drop-shadow-md">
        Verify Your Health Card
      </h1>

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-indigo-200 mb-4">
        <label className="block text-lg font-bold text-indigo-900 mb-3">
          Enter Your CNIC
        </label>

        <div className="flex items-center border-2 border-indigo-400 rounded-3xl px-5 py-4 
                  bg-indigo-50 shadow-md focus-within:border-indigo-600 transition-all duration-300">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-indigo-700 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15.232 5.232l3.536 3.536M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 
        0 012-2h7l5 5v13a2 2 0 01-2 2z"
            />
          </svg>

          <input
            type="text"
            placeholder="Enter CNIC (13 digits)"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            className="w-full bg-transparent border-none outline-none 
                 text-lg text-indigo-900 placeholder-indigo-500 tracking-wide"
          />
        </div>

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full mt-6 bg-indigo-600 text-white py-4 rounded-2xl text-lg font-semibold 
               hover:bg-indigo-700 transition-colors shadow-lg"
        >
          {loading ? "Verifying..." : "Verify CNIC"}
        </button>

        {error && <p className="text-red-500 mt-4 text-center font-semibold">{error}</p>}
      </div>


      {showModal && card && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto px-4">
          {/* Blurred background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal content */}
          <div className="relative z-50 flex flex-col items-center gap-6 w-full max-w-xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-200 z-50"
            >
              &times;
            </button>

            {/* Printable content - EXACTLY THE SAME STRUCTURE */}
            <div
              ref={cardRef}
              className="relative z-50 flex flex-col items-center gap-6 w-full max-w-xl"
            >
              {/* Upper Card - EXACTLY THE SAME */}
              <div className="rounded-xl shadow-2xl overflow-hidden border border-indigo-900/95 bg-indigo-900 text-white w-full p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/3 flex flex-col justify-between space-y-2">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={85}
                        height={85}
                        className="rounded-2xl shadow-md hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer border-2 border-white/30"
                      />
                      <div>
                        <h2 className="text-xl font-bold">Rimsha Lab</h2>
                        <p className="text-sm opacity-90">Health Card</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-white">
                      <p><span className="font-semibold">Name:</span> {card.name}</p>
                      <p><span className="font-semibold">CNIC:</span> {formatCNIC(card.cnic)}</p>
                      <p><span className="font-semibold">Gender:</span> {card.gender}</p>
                      <p><span className="font-semibold">Blood Group:</span> {card.bloodGroup}</p>
                      <p><span className="font-semibold">Phone:</span> {card.phone}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 flex items-center justify-center p-4 bg-indigo-900/95">
                    <div className="w-36 h-48 bg-gray-200 rounded-lg shadow-lg overflow-hidden border-2 border-white">
                      {card.imageUrl ? (
                        <img
                          src={card.imageUrl}
                          alt="Patient Image"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No Image
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-4 text-sm opacity-70">
                  System Generated Card
                </div>
              </div>

              {/* Lower Mini Card - EXACTLY THE SAME */}
              <div className="rounded-xl shadow-2xl overflow-hidden border border-indigo-900/95 bg-indigo-900 text-white w-full p-14 flex flex-col items-center gap-4">
                <div className="text-center text-sm font-semibold">
                  Valid for 1 Patient only
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                  <div className="p-2 bg-white rounded-lg shadow-md flex-shrink-0">
                    <QRCodeSVG value={card.cnic} size={120} />
                  </div>
                  <div className="space-y-2 text-white">
                    <p><span className="font-semibold">Address:</span> St-2 Nadirabad, Lahore</p>
                    <p><span className="font-semibold">Phone:</span> +92 323 1486205</p>
                    <p><span className="font-semibold">Email:</span> laboratoryrimsha@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* ✅ Print / Save as PDF button */}
              <button
                onClick={printCard}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-md transition"
              >
                Print / Save as PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}