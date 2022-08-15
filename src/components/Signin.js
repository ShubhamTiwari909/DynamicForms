import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserLock } from 'react-icons/fa'
import './style.css'

function Signin() {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
  })


  function handleChange(e) {
    const value = e.target.value;
    console.log(value);
    setSignup({
      ...signup,
      [e.target.name]: value
    });
  }

  const inputFieldAttributes = [
    {
      label: "Email",
      name: "email",
      type: "email",
      value: signup.email,
      placeholder: "Email..."
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: signup.password,
      placeholder: "Password..."
    },
  ]


  return (
    <div className="grid place-content-center py-20 bg-slate-200 px-5">
        <div className="flex space-x-6 justify-center mb-8">
          <h1 className="text-3xl font-bold">Signin</h1>
          <FaUserLock size="2.5rem" color="darkslateblue" />
        </div>
        <form className="rounded-xl p-5 md:p-10 signupForm">
          {inputFieldAttributes.map((inputs, index) => {
            return (
              <div className="grid grid-cols-2 my-12 md:my-8 px-5" key={index}>
                <label className="text-slate-100 place-self-start my-1 w-20">{inputs.label}</label>
                <input name={inputs.name} type={inputs.type} placeholder={inputs.placeholder} value={inputs.value} onChange={handleChange}
                  className="px-3 py-1 text-slate-100 bg-transparent border-b-2 border-b-indigo-100 focus:outline-none rounded-xl focus:bg-transparent caret-slate-100
            justify-self-end w-44" />
              </div>
            )
          })}
          <div className="grid gap-10 justify-center">
            <button className="px-4 py-2 text-blue-200 border-2 border-blue-300 rounded-xl">Signin</button>
            <div className="grid grid-cols-4 md:grid-cols-2  gap-6">
              <div className="space-y-3 col-span-2 md:col-span-1">
                <p className="text-indigo-200 text-sm">Don't have an account?</p>
                <button className="px-4 py-2 text-indigo-300 border-2 border-indigo-400 rounded-xl">
                  <NavLink to="/signup">
                    Signup
                  </NavLink>
                </button>
              </div>
              <div className="space-y-3 col-span-2 md:col-span-1">
                <p className="text-indigo-200 text-sm">Forgot Password?</p>
                <button className="px-4 py-2 text-red-300 border-2 border-red-400 rounded-xl">
                  <NavLink to="/changePassword">Change</NavLink>
                </button>
              </div>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Signin