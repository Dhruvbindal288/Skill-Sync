/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/formDesign.css";
import useAuthStore from "../store/useAuthStore";
import { toast } from 'react-toastify';

function Login() {
  const {loading,loginUser}=useAuthStore();
  let [formData,setFormData]=useState({email:'',password:''})
  const validateform=()=>{
    if(!formData.email.trim() || !formData.password.trim()){
       toast.error("Enter all Fields")
       return false
    }else{return true}
  }
  const handleSubmit=(e)=>{
e.preventDefault()
    const success=validateform()
if(success===true)loginUser(formData)
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-sky-300

">
      <form className="form lg:w-1/3" onSubmit={handleSubmit}>
        <h1 className="heading">Login</h1> <br />
        
    
        <br />
        <label className="label" htmlFor="email">Enter your email:</label>
        <br />
        <input
          className="input-field"
          type="text"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e)=>{setFormData({ ...formData, email: e.target.value.trimStart() });
}}
        />{" "}
        <br />
        <label className="label" htmlFor="password">Enter your password:</label>
        <br />
        <input
          className="input-field"
          type="password"
          id="password"
          disabled={loading}
          placeholder="Enter your password"
              value={formData.password}
          onChange={(e)=>{setFormData({ ...formData, password: e.target.value.trimStart() });
}}
        />
        <br /><br />
        <button className="form-button">{loading?'Login...':"Login"}</button> <br /> <br />
        <p className="form-p">Don't have An Account? SignUp</p>
      </form>
    </div>
  );
}

export default Login;
