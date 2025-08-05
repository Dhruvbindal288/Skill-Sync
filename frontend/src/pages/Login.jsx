import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { toast } from "react-toastify";

function Login() {
  const { loading, loginUser } = useAuthStore();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const validateForm = () => {
    if (!formData.email.trim() || !formData.password.trim()) {
      toast.error("Enter all fields");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) loginUser(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-sky-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md shadow-xl p-8 rounded-2xl"
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Welcome Back
        </h2>

        {/* Email Field */}
        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value.trimStart() })
          }
        />

        {/* Password Field */}
        <label
          className="block text-gray-700 font-medium mb-1"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          id="password"
          placeholder="Enter your password"
          disabled={loading}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value.trimStart() })
          }
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-4 text-sm text-gray-700">
          Don't have an account?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
