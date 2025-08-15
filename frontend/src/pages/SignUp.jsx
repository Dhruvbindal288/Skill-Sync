import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function SignUp() {
  const { userSignup, loading } = useAuthStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      toast.warn("Please fill all the fields");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) userSignup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md shadow-xl p-8 rounded-2xl"
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Sign Up to SkillSync
        </h2>

        {/* Name Field */}
        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Email Field */}
        <label
          className="block text-gray-700 font-medium mb-1"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password Field */}
        <label
          className="block text-gray-700 font-medium mb-1"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
             <Link to="/login">login</Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
