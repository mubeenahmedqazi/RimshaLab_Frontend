"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="fixed top-18 left-3 right-3 z-50 
                 bg-indigo-900/95 text-white py-3 
                 shadow-2xl rounded-3xl 
                 backdrop-blur-lg border border-white/10 
                 transition-all duration-500 ease-in-out
                 hover:shadow-indigo-700/30"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Rimsha Lab Logo"
            width={85}
            height={85}
            className="rounded-2xl shadow-md hover:scale-110 
                       transition-transform duration-500 ease-in-out 
                       cursor-pointer border-2 border-white/30"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-10 font-medium text-lg tracking-wide mr-100 relative">
          <li className="relative group">
            <Link href="/" className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Home
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-white transition-all duration-300 ease-in-out"></span>
          </li>

          <li className="relative group">
            <Link href="/about" className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              About
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-white transition-all duration-300 ease-in-out"></span>
          </li>

          <li className="relative group">
            <Link href="/services" className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Services
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-white transition-all duration-300 ease-in-out"></span>
          </li>

          {/* Core Values with Dropdown */}
          <li className="relative group">
            <Link href="/tests" className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Core Values
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-white transition-all duration-300 ease-in-out"></span>

            {/* Dropdown */}
            <ul
              className="absolute top-full left-0 mt-2 w-60 bg-indigo-800/95 rounded-xl shadow-lg 
                         opacity-0 group-hover:opacity-100 invisible group-hover:visible 
                         transition-all duration-300 z-[100] backdrop-blur-md border border-white/10"
            >
              <li>
                <Link href="/Certifications" className="block px-6 py-3 hover:bg-indigo-700/70 transition-all duration-300 rounded-t-xl">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/LabQualityPolicy" className="block px-6 py-3 hover:bg-indigo-700/70 transition-all duration-300 rounded-b-xl">
                  Lab Quality Policy
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <Link href="/contact" className="hover:text-gray-300 transition-all duration-300 ease-in-out">
              Contact
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-white transition-all duration-300 ease-in-out"></span>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
