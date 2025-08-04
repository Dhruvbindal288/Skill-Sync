import React from "react";
import "../styles/formDesign.css";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-sky-300

">
      <form className="form lg:w-1/3">
        <h1 className="heading">Login</h1> <br />
        
    
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
        <br /><br />
        <button className="form-button">Login</button> <br /> <br />
        <p className="form-p">Don't have An Account? Login</p>
      </form>
    </div>
  );
}

export default Login;
