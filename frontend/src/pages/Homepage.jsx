import React from "react";

function Homepage() {
  return (
    <div className="min-h-screen bg-blue-300 flex flex-col items-center justify-center px-4">
      
      
      <div className="text-center text-white mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          Learn What You Love.
          <br /> Teach What You Konw.
          <br />Grow together
          <br /> Best Platform to Share Skills.
        </h1>
      </div>

      
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-3 rounded-3xl bg-amber-500 text-white hover:bg-amber-600 transition">
          Get Started
        </button>
        <button className="px-6 py-3 rounded-3xl bg-amber-500 text-white hover:bg-amber-600 transition">
          Explore Skills
        </button>
      </div>
    </div>
  );
}

export default Homepage;
