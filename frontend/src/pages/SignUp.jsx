/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/formDesign.css";
import useAuthStore from'../store/useAuthStore'
function SignUp() {
  const {userSignup,loading}=useAuthStore();
  const [formData,setformData]=useState({
    name:'',
    email:'',
    password:''
  });


const validateForm=()=>{
if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required");
      return false;
    }
    return true;
}

  const handleSubmit=(e)=>{
    e.preventDefault()
    const success=validateForm()
    if(success===true)userSignup(formData)
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-sky-300

">
      <form className="form lg:w-1/3"  onSubmit={handleSubmit}>
        <h1 className="heading">Create Account</h1> <br />
        <label className="label" htmlFor="name">Enter your name:</label>
        <br />
        <input
          className="input-field"
          type="text"
          id="name"
          placeholder="Enter your name"
value={formData.name}
onChange={(e)=>{setformData({...formData,name:e.target.value})}}
        />
        <br />
        <label className="label" htmlFor="email">Enter your email:</label>
        <br />
        <input
          className="input-field"
          type="text"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
onChange={(e)=>{setformData({...formData,email:e.target.value})}}
        />
        <br />
        <label className="label" htmlFor="password">Enter your password:</label>
        <br />
        <input
          className="input-field"
          type="text"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
onChange={(e)=>{setformData({...formData,password:e.target.value})}}
        />
        <br /><br />
        <button className="form-button" >{loading?"Creating Account...":"SignUp"}</button> <br /> <br />
        <p className="form-p">Already have An Account? Login</p>
      </form>
    </div>
  );
}

export default SignUp;
