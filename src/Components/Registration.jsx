import React, { useState } from "react";
import '../App.css'; 
import useNavigate from "react-router-dom"

import { addUser } from "./BackendConnection.js";

function Registration() {

  let navigate = useNavigate()

  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [number,setnumber]=useState('')
  const [password,setpassword]=useState('')

  const handleName = (e) => {
    e.preventDefault();
    setname(e.target.value)
  }
  
  const handleEmail = (e) => {
    e.preventDefault();
    setemail(e.target.value);
  }

  const handleNumber = (e) => {
    e.preventDefault();
    setnumber(e.target.value);
  }

  const handlePassword = (e) => {
    e.preventDefault();
    setpassword(e.target.value);
  }
  const handleClick = async () => {
    if (name === '' || number === '' || email === "" || password === "") {
      alert(`Any of the fields is empty`)
    } else {
      let newAdmin = {
        name,
        email,
        number,
        password,
      };
      let result = await addUser(newAdmin);
      if (true) {
        navigate('/login');
      }
    }
  }

  return (
    <form className="space-y-6 px-4 max-w-sm mx-auto font-[sans-serif] m-[200px]">
      <p style={{ fontSize: "25px" }}>Signup</p>
      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          placeholder="Enter your name"
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white"
        />
      </div>
      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmail}
          placeholder="Enter your email"
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white"
        />
      </div>
      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">Phone No.</label>
        <input
          type="number"
          name="number"
          value={number}
          onChange={handleNumber}
          placeholder="Enter your phone no"
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white"
        />
      </div>
      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="Enter your state"
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white"
        />
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="px-6 py-2 w-full bg-[#333] text-sm text-white hover:bg-[#444] mx-auto block"
      >
        Register
      </button>
    </form>
  );
}

export default Registration;
