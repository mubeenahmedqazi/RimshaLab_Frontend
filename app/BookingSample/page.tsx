"use client";

import { useState } from "react";

export default function BookHomeSampling() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    bloodGroup: "",
    testName: "",
    otherTest: "",
    paymentMode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Not Known"];
  const testNames = [
    "Complete Blood Count (CBC)",
    "Blood Glucose Test",
    "Liver Function Test",
    "Kidney Function Test",
    "Thyroid Profile",
    "Other (Specify)"
  ];
  const paymentModes = ["Cash", "Card"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare data for API
      const bookingData = {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
        bloodGroup: formData.bloodGroup,
        testName: formData.testName === "Other (Specify)" ? formData.otherTest : formData.testName,
        paymentMode: formData.paymentMode
      };

      const response = await fetch("https://rimsha-lab-backend.vercel.app/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "", email: "", address: "", phone: "",
          bloodGroup: "", testName: "", otherTest: "", paymentMode: ""
        });
      } else {
        setSubmitStatus("error");
        console.error("Booking failed:", result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  bg-indigo-900/95 py-32 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            Book Home Blood Sampling
          </h1>
          <p className="text-xl text-indigo-100/90 max-w-md mx-auto leading-relaxed">
            Professional blood test collection at your doorstep. Safe, reliable, and completely hassle-free.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Schedule Blood Test</h2>
            <p className="text-gray-600">Fill in your details for home blood sample collection</p>
          </div>

          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
              ✅ Booking confirmed! Our phlebotomist will visit you within 2 hours.
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
              ❌ Failed to create booking. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/80"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/80"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Complete Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/80 resize-none"
                placeholder="Enter your complete address for blood sample collection"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/80"
                  placeholder="+92 300 123 4567"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/80"
                >
                  <option value="">Select Blood Group</option>
                  {bloodGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Test Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Select Blood Test *</label>
              <select
                name="testName"
                value={formData.testName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/80"
              >
                <option value="">Choose a blood test</option>
                {testNames.map(test => (
                  <option key={test} value={test}>{test}</option>
                ))}
              </select>
              
              {formData.testName === "Other (Specify)" && (
                <input
                  type="text"
                  name="otherTest"
                  value={formData.otherTest}
                  onChange={handleChange}
                  required
                  className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/80"
                  placeholder="Specify your blood test name"
                />
              )}
            </div>

            {/* Payment Mode */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Mode of Payment *</label>
              <div className="grid grid-cols-2 gap-3">
                {paymentModes.map(mode => (
                  <label key={mode} className="flex items-center space-x-3 p-3 border border-gray-300 rounded-xl hover:bg-indigo-50 cursor-pointer transition-all duration-300">
                    <input
                      type="radio"
                      name="paymentMode"
                      value={mode}
                      onChange={handleChange}
                      required
                      className="text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">{mode}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-900 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-indigo-800 hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Book Blood Sampling"
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-indigo-700">
                Our certified phlebotomist will visit your specified address within 2 hours of confirmation. 
                All blood samples are collected using sterile equipment and processed in certified laboratories.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: "⏱️", title: "Quick Service", desc: "2-hour sampling" },
            { icon: "🏠", title: "At Your Home", desc: "Comfortable & safe" },
            { icon: "💉", title: "Expert Staff", desc: "Certified phlebotomists" }
          ].map((feature, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/30 hover:scale-105 transform transition-all duration-300">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-indigo-100/80 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}