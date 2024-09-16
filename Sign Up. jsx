"use client"; // Client Component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [isMounted, setIsMounted] = useState(false); // Track component mounting
  const [userType, setUserType] = useState("patient");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    licenseNumber: '',
    specialization: '',
    dob: ''
  });

  const router = useRouter();

  // Ensure component renders on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent rendering on the server side until fully mounted on client
  if (!isMounted) {
    return null;
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
      ...(userType === 'doctor' && { licenseNumber: formData.licenseNumber, specialization: formData.specialization }),
      ...(userType === 'patient' && { dob: formData.dob })
    };

    try {
      const response = await fetch('/apis/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        router.push('/login'); // 👈 Redirect to login page after successful sign-up
      } else {
        console.error('Sign-up failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>

        {/* Toggle between Doctor and Patient */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">I am a:</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg">
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
          {userType === 'doctor' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Medical License Number</label>
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
          {userType === 'patient' && (
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
            </>
          )}

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
