import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineUserAdd } from 'react-icons/ai'
import './style.css'

function Signup() {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
      label: "Name",
      name: "name",
      type: "text",
      value: signup.name,
      placeholder: "Name..."
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      value: signup.email,
      placeholder: "Email..."
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      value: signup.phone,
      placeholder: "Phone..."
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: signup.password,
      placeholder: "Password..."
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      value: signup.confirmPassword,
      placeholder: "Confirm Password..."
    },
  ]


  return (
    <div className="grid place-content-center py-20 bg-slate-200 px-5">
        <div className="flex space-x-6 justify-center mb-8">
          <h1 className="text-3xl font-bold">Signup</h1>
          <AiOutlineUserAdd size="2.5rem" color="darkslateblue" />
        </div>
        <form className="rounded-xl p-5 md:p-10 signupForm">
          {inputFieldAttributes.map((inputs, index) => {
            return (
              <div className="grid grid-cols-2 my-12 md:my-8 px-5" key={index}>
                <label className="text-slate-100 place-self-start my-1 w-20">{inputs.label}</label>
                <input name={inputs.name} type={inputs.type} placeholder={inputs.placeholder} value={inputs.value} onChange={handleChange} required
                  className="px-3 py-1 text-slate-100 bg-transparent border-b-2 border-b-indigo-100 rounded-xl focus:outline-none caret-slate-100
            justify-self-end w-44" />
              </div>
            )
          })}
          <div className="grid gap-10 justify-center">
            <button className="px-4 py-2 text-blue-200 border-2 border-blue-300 rounded-xl">Signup</button>
            <div className="grid place-content-center gap-2">
              <p className="text-indigo-200">Already have an account?</p>
              <button className="px-4 py-2 text-indigo-300 border-2 border-indigo-400 rounded-xl">
                <NavLink to="/signin">Signin</NavLink>
              </button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Signup