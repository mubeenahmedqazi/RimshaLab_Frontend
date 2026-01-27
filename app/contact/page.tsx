"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Website Inquiry", // Default subject
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const response = await fetch("https://rimsha-lab-backend.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "Website Inquiry", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-22 px-6 overflow-hidden">
      
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <img
          src="/Aboutus.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-md opacity-60"
        />
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left side - Contact Info */}
        <div className="space-y-10 text-indigo-900">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're here to answer your questions, book appointments, or guide you through
            our diagnostic services. Reach out today — we'd love to hear from you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
              <div className="bg-indigo-900 text-white p-4 rounded-full shadow-lg">📍</div>
              <p className="text-gray-800 text-lg">
                Street 2, Nadirabad, Bedian Road, Lahore
              </p>
            </div>

            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
              <div className="bg-indigo-900 text-white p-4 rounded-full shadow-lg">📞</div>
              <p className="text-gray-800 text-lg">+92 300 1234567</p>
            </div>

            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
              <div className="bg-indigo-900 text-white p-4 rounded-full shadow-lg">✉️</div>
              <p className="text-gray-800 text-lg">info@rimshalab.com</p>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-white/90 p-10 rounded-3xl shadow-2xl hover:shadow-indigo-200 transition-all duration-500 backdrop-blur-lg">
          <h3 className="text-3xl font-semibold text-indigo-900 mb-8 text-center">
            Send Us a Message
          </h3>
          
          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              ❌ Failed to send message. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-left font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-left font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-left font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject "
                className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-left font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-900 text-white py-4 rounded-xl font-semibold text-lg 
                         hover:bg-white hover:text-indigo-900 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 bg-green-500 text-white p-4 rounded-full shadow-2xl 
                   hover:bg-green-600 transition-all duration-500 flex items-center justify-center 
                   animate-[vibrate_0.3s_infinite] z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M12.04 2.002a9.95 9.95 0 0 0-8.972 14.524L2 22l5.667-1.472A9.952 9.952 0 1 0 12.04 2.002zm0 18.127a8.152 8.152 0 0 1-4.151-1.136l-.297-.176-3.365.873.897-3.284-.19-.303a8.166 8.166 0 1 1 7.106 4.026zm4.475-6.138c-.245-.122-1.451-.716-1.677-.796-.226-.081-.39-.122-.555.122-.163.245-.637.795-.781.959-.143.163-.286.184-.531.061-.245-.122-1.036-.381-1.974-1.213-.729-.65-1.22-1.451-1.364-1.696-.143-.245-.015-.377.108-.499.112-.111.245-.286.367-.429.122-.143.163-.245.245-.408.081-.163.04-.306-.02-.428-.061-.122-.554-1.337-.759-1.834-.2-.48-.403-.414-.555-.422l-.469-.008a.906.906 0 0 0-.653.306c-.224.245-.856.837-.856 2.037 0 1.2.876 2.357 1.004 2.521.122.163 1.725 2.635 4.187 3.691.585.253 1.04.404 1.396.517.586.187 1.118.161 1.54.098.47-.07 1.451-.593 1.656-1.166.204-.573.204-1.063.143-1.166-.061-.102-.224-.163-.469-.286z" />
        </svg>
      </a>
    </section>
  );
}