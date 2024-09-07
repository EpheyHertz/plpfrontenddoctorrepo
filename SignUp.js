"use client"; // Client Component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [isMounted, setIsMounted] = useState(false); // New state to track if the component is mounted
  const [userType, setUserType] = useState("patient");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    licenseNumber: "",
    specialization: "",
    dob: "",
    symptoms: "",
  });

  const router = useRouter();

  // useEffect to set the component as mounted after the first render
  useEffect(() => {
    setIsMounted(true); // Now we know we're on the client-side
  }, []);

  // Don't render anything until the component is mounted (client-side)
  if (!isMounted) {
    return null; // Avoid rendering on the server
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      ...(userType === "doctor" && {
        licenseNumber: formData.licenseNumber,
        specialization: formData.specialization,
      }),
      ...(userType === "patient" && {
        dob: formData.dob,
        symptoms: formData.symptoms,
      }),
    };

    try {
      const response = await fetch("/apis/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/profile/update"); // Redirect to profile update page
      } else {
        console.error("Sign-up failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">
          Sign Up for AI Doctor
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Connect with an AI-powered system to get personalized health advice.
          If needed, schedule a call with a doctor directly.
        </p>

        {/* Toggle between Doctor and Patient */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">I am a:</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        {/* Sign-up form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Conditional Fields for Doctor */}
          {userType === "doctor" && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Medical License Number
                </label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </>
          )}

          {/* Conditional Fields for Patient */}
          {userType === "patient" && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Symptoms (optional)
                </label>
                <textarea
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
