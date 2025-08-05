import React from "react";
import aboutuspng from "../assets/about.png";
function Aboutus() {
  return (
    <div className="block md:flex justify-evenly items-center bg-gradient-to-r from-sky-300 to-blue-400 h-screen">
      <div>
        <h1 className="text-4xl text-white font-bold">About SkillSync</h1>{" "}
        <br />
        <h3 className="text-2xl text-white">
          Learn what you love. <br />
          Teach what you know. Grow together.
        </h3>{" "}
        <br />
        <p className="text-white">
          SkillSync connects passionate learners with skilled teachers in a{" "}
          <br /> community-driven environment where knowledge flows freely{" "}
          <br /> and everyone grows together.
        </p>
      </div>
      
      <div>
        <img
          src={aboutuspng}
          alt="SkillSync"
          className="w-[300px] md:w-[400px] rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Aboutus;
