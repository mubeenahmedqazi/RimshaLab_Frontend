"use client";

import { useState } from "react";
import { Loader2, CheckCircle, CreditCard } from "lucide-react";

export default function HealthCardApply() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cnic, setCnic] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Format CNIC
  const handleCnicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 13) value = value.slice(0, 13);

    let formatted = value;
    if (value.length > 5 && value.length <= 12) {
      formatted = `${value.slice(0, 5)}-${value.slice(5)}`;
    } else if (value.length > 12) {
      formatted = `${value.slice(0, 5)}-${value.slice(5, 12)}-${value.slice(12)}`;
    }

    setCnic(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    const formData = new FormData();
    const target = e.currentTarget;

    formData.append("name", (target.elements.namedItem("name") as HTMLInputElement).value);
    formData.append("email", (target.elements.namedItem("email") as HTMLInputElement).value);
    formData.append("address", (target.elements.namedItem("address") as HTMLInputElement).value);
    formData.append("phone", (target.elements.namedItem("phone") as HTMLInputElement).value);
    formData.append("cnic", cnic.replace(/-/g, ""));
    formData.append("gender", gender);
    formData.append("bloodGroup", bloodGroup);
    if (imageFile) formData.append("image", imageFile);

    try {
      const res = await fetch("https://rimsha-lab-backend.vercel.app/api/health-card/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setSuccessMessage("Your Health Card Request Submitted Successfully!");
        target.reset();
        setCnic("");
        setGender("");
        setBloodGroup("");
        setImageFile(null);
      } else {
        setErrorMessage(data.message || "Error! Try Again.");
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage("Server error! Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-20 px-4">

      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-10 border border-indigo-100">
        <div className="flex items-center justify-center mb-6">
          <CreditCard className="text-indigo-600 w-10 h-10" />
        </div>

        <h1 className="text-3xl font-extrabold text-indigo-800 mb-6 text-center tracking-tight">
          Apply for Your Rimsha Lab Health Card
        </h1>

        {successMessage && (
          <div className="flex items-center gap-2 p-4 mb-5 bg-green-100 border border-green-200 text-green-800 rounded-lg shadow-sm">
            <CheckCircle /> {successMessage}
          </div>
        )}

        {errorMessage && (
          <p className="mb-4 p-4 bg-red-100 text-red-800 border border-red-200 rounded-lg shadow-sm">
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input name="name" required placeholder="Full Name"
            className="input" />

          <input name="email" required type="email" placeholder="Email"
            className="input" />

          <input name="address" required placeholder="Address"
            className="input" />

          <input name="phone" required type="tel" placeholder="Phone Number"
            className="input" />

          <input
            name="cnic"
            required
            placeholder="Enter Your CNIC No  "
            value={cnic}
            onChange={handleCnicChange}
            className="input"
          />

          <select
            name="gender"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input"
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select
            name="bloodGroup"
            required
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="input"
          >
            <option value="" disabled>Select Blood Group</option>
            {[ "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-" ].map(bg => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </select>

          {/* Image upload */}
          <label className="block">
            <span className="text-gray-700 font-medium">Upload Your Photo</span>
            <input
              type="file"
              required
              accept="image/*"
              onChange={(e) => e.target.files && setImageFile(e.target.files[0])}
              className="input mt-2"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-md transition flex justify-center items-center gap-2"
          >
            {loading && <Loader2 className="animate-spin" />} 
            {loading ? "Submitting..." : "Apply Now"}
          </button>
        </form>

        {/* Track Card Button */}
        <div className="text-center mt-6">
          <a
            href="/TrackHealthCard"
            className="inline-block text-indigo-700 font-semibold hover:underline mt-2"
          >
            Track Your Health Card →
          </a>
        </div>
      </div>

      {/* Tailwind input class */}
      <style jsx global>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          transition: 0.2s;
        }
        .input:focus {
          border-color: #6366f1;
          background: white;
          outline: none;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }
      `}</style>

    </div>
  );
}
