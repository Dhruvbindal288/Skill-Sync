import React from "react";
import "../styles/formDesign.css";

function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-sky-300

">
      <form className="form lg:w-1/3">
        <h1 className="heading">Login</h1> <br />
        <label className="label" htmlFor="name">Enter your name:</label>
        <br />
        <input
          className="input-field"
          type="text"
          id="name"
          placeholder="Enter your name"
        />{" "}
        <br />
        <label className="label" htmlFor="email">Enter your email:</label>
        <br />
        <input
          className="input-field"
          type="text"
          id="email"
          placeholder="Enter your email"
        />{" "}
        <br />
        <label className="label" htmlFor="password">Enter your password:</label>
        <br />
        <input
          className="input-field"
          type="text"
          id="password"
          placeholder="Enter your password"
        />
        <br />
        <button className="form-button">Login</button> <br />
        <p>Don't have An Account? SignUp</p>
      </form>
    </div>
  );
}

export default SignUp;
