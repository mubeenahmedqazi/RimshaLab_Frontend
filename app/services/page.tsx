"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    key: "histopathology",
    title: "Histopathology",
    image: "/HistoPathology.jpg",
    excerpt:
      "Tissue examination, biopsy processing, and diagnostic pathology — precise evaluation by experienced pathologists.",
  },
  {
    key: "chemical",
    title: "Chemical Pathology",
    image: "/Chemical.jpg",
    excerpt:
      "Comprehensive biochemistry panels: liver, renal, lipids, electrolytes, hormones and therapeutic drug monitoring.",
  },
  {
    key: "hematology",
    title: "Haematopathology",
    image: "/HaematoPathology.jpg",
    excerpt:
      "Complete blood counts, coagulation profiles, peripheral smears and specialized haematology testing for accurate diagnosis.",
  },
  {
    key: "microbiology",
    title: "Microbiology",
    image: "/Microbiology.jpg",
    excerpt:
      "Culture & sensitivity, urine, stool, sputum testing and rapid infectious disease diagnostics with rigorous quality control.",
  },
  {
    key: "molecular",
    title: "Molecular / Immunology / Serology",
    image: "/Molecular.jpg",
    excerpt:
      "PCR, molecular assays, serology and immunoassays for precise pathogen detection and immunological profiling.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative bg-white fixed top-24">

      {/* HERO */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="relative h-[66vh] md:h-[100vh]">
          <Image
            src="/services.jpg"
            alt="Laboratory hero"
            fill
            className="object-cover object-center brightness-[0.55]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Advanced Diagnostic Services <br />
                <span className="text-indigo-400">Precision • Speed • Care</span>
              </h1>
              <p className="mt-6 text-lg text-gray-200 max-w-xl">
                Comprehensive laboratory testing across specialized departments — histopathology, clinical chemistry,
                haematology, microbiology and molecular diagnostics — backed by accredited processes and rapid reporting.
              </p>

              <div className="mt-8 flex gap-4">
                <Link href="/BookingSample">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-indigo-500 px-6 py-3 rounded-lg font-semibold shadow-xl hover:bg-indigo-600 transition"
                  >
                    Book Home Collection
                  </motion.button>
                </Link>
                <Link href="/services#departments">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:brightness-95 transition"
                  >
                    Explore Departments
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="hidden md:block md:w-1/2 rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-[320px]">
                <Image
                  src="/HomeSampling.jpg"
                  alt="Home sampling"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h4 className="text-lg font-bold">Free Home Sample Collection</h4>
                    <p className="text-sm text-gray-200">Professional phlebotomists at your doorstep (subject to area coverage).</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-600">Our Key Laboratory Services</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              End-to-end diagnostic solutions — routine tests, specialist assays, and rapid reporting to support clinicians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.article
                key={s.key}
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                <div className="relative p-6 h-56 flex flex-col justify-end">
                  <h3 className="text-xl text-white font-bold">{s.title}</h3>
                  <p className="text-sm text-gray-200 mt-2">{s.excerpt}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-indigo-200">Explore →</span>
                    <Link href={`/services#${s.key}`}>
                      <motion.span className="text-sm text-white underline-offset-2">Details</motion.span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      
      {/* DETAILED DEPARTMENTS */}
      <section id="departments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/** Reuse same pattern for each department: image + text */}
          {/* Example for Histopathology */}
          <article id="histopathology" className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/HistoPathology.jpg" alt="Histopathology" fill className="object-cover" />
            </motion.div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Histopathology</h4>
              <p className="mt-3 text-gray-700">
                Tissue processing, microtomy, H&E staining, and immunohistochemistry for definitive diagnosis of tumors,
                inflammatory conditions and morphological disorders. Our histopathology service focuses on accuracy and
                timely reporting with expert pathologist review.
              </p>
              <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
                <li>Biopsy processing & reporting</li>
                <li>Frozen section & intraoperative consultation</li>
                <li>Immunohistochemistry (IHC)</li>
              </ul>
            </div>
          </article>

          {/** Repeat for Chemical, Haematology, Micro-Molecular */}
          {/* Chemical */}
          <article id="chemical" className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Chemical Pathology</h4>
              <p className="mt-3 text-gray-700">
                Comprehensive clinical chemistry covering liver, renal, lipid, endocrine and metabolic panels. Our automated
                analyzers and strict QC protocols ensure reproducible, clinically reliable results for patient management.
              </p>
              <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
                <li>Comprehensive metabolic panel</li>
                <li>Hormone assays & therapeutic drug monitoring</li>
                <li>Clinical biochemistry & quality control</li>
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/Chemical.jpg" alt="Chemical Pathology" fill className="object-cover" />
            </motion.div>
          </article>

          {/* Haematology */}
          <article id="hematology" className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/HaematoPathology.jpg" alt="Haematopathology" fill className="object-cover" />
            </motion.div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Haematopathology</h4>
              <p className="mt-3 text-gray-700">
                Complete blood counts, peripheral smear interpretation, coagulation testing and specialized haematology assays for
                diagnosing anaemia, infections, clotting disorders and hematologic malignancies.
              </p>
              <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
                <li>Complete blood count (CBC) & differential</li>
                <li>Coagulation & platelet function tests</li>
                <li>Bone marrow reporting support</li>
              </ul>
            </div>
          </article>

          {/* Micro-Molecular */}
          <article id="micro-molecular" className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Microbiology & Molecular Diagnostics</h4>
              <p className="mt-3 text-gray-700">
                Culture, microscopy, molecular PCR assays and serology for infectious disease detection. Rapid diagnostics combined
                with confirmatory molecular tests provide clinicians with actionable results.
              </p>
              <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
                <li>Culture & sensitivity</li>
                <li>PCR & rapid molecular assays</li>
                <li>Serology & immunoassays</li>
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/Microbiology.jpg" alt="Microbiology" fill className="object-cover" />
            </motion.div>
          </article>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-12 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold">Need help choosing a test?</h4>
            <p className="mt-2 text-indigo-200">Call our helpline or book a free home sample collection in covered areas.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/contact">
              <button className="bg-white text-indigo-900 px-6 py-3 rounded-md font-semibold cursor-pointer shadow-md hover:brightness-95 transition">Contact Us</button>
            </Link>
            <Link href="/BookingSample">
              <button className="bg-indigo-500 px-6 py-3 rounded-md font-semibold cursor-pointer shadow-md hover:bg-indigo-600 transition">Book Now</button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
