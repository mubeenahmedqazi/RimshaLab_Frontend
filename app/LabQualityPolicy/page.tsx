"use client";

import Image from "next/image";

export default function LabQualityPolicy() {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6">
        
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-indigo-600 leading-tight">
            Lab Quality Policy
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-indigo-800">Rimsha Lab</span>, quality, accuracy, and patient safety are our
            top priorities. We follow international standards in diagnostics to ensure every test result
            meets the highest levels of reliability and precision.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            The laboratory strictly adheres to the <span className="font-semibold text-indigo-700">Punjab Healthcare Commission </span> 
             requirements and undergoes regular audits to maintain compliance. Our waste management system 
            is also aligned with environmental and healthcare safety protocols, ensuring safe and responsible 
            disposal practices every year.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Each year, Rimsha Lab participates in an external cross-result accuracy program, where our test 
            results are evaluated under the supervision of <span className="font-semibold text-indigo-700">NUST University Islamabad</span>. 
            Through this continuous quality assessment, our lab consistently meets the national and international 
            standards of excellence in diagnostic testing.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We remain committed to continuous improvement through staff training, technology upgrades, and 
            strict quality assurance measures — ensuring that every report we deliver is trustworthy, 
            timely, and medically sound.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative group">
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-indigo-200 group-hover:border-indigo-500 transition-all duration-500">
            <Image
              src="/lab_quality.jpg"
              alt="Lab Quality Policy"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-500 opacity-20 blur-2xl rounded-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
}
