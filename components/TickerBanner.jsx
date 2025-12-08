"use client";

export default function TickerBanner() {
  return (
    <div className="fixed top-2 z-50 w-full bg-gradient-to-r from-indigo-900/95 via-indigo-900/95 to-indigo-900/95 text-white overflow-hidden shadow-2xl border-t-2 border-indigo-900/90 border-b-2 rounded-3xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="whitespace-nowrap animate-marquee py-1 text-2xl md:text-2xl font-bold tracking-wide">
          <span className="mx-20">
             Rimsha Lab is excited to announce the launch of our
            <span className="text-yellow-300 font-extrabold"> Health Discount Card</span>!
            All card holders can now enjoy an exclusive
            <span className="text-green-400 font-extrabold"> 30% Discount</span> on all tests.
            Get your card today and start saving!
          </span>
          <span className="mx-20">
             Enroll in the <span className="text-yellow-300 font-extrabold"> Health Card Program</span> today —
            trusted care, advanced diagnostics, and affordable healthcare for all!
          </span>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 35s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          90% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
