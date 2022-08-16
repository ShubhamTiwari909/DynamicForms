import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { FaUserTie } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FcPhoneAndroid } from 'react-icons/fc'
import { RiLockPasswordLine } from 'react-icons/ri'
import { RiLockPasswordFill } from 'react-icons/ri'
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
      label: <FaUserTie size="1.5rem" />,
      name: "name",
      type: "text",
      value: signup.name,
      placeholder: "Name..."
    },
    {
      label: <HiOutlineMail size="1.5rem"/>,
      name: "email",
      type: "email",
      value: signup.email,
      placeholder: "Email..."
    },
    {
      label: <FcPhoneAndroid size="1.5rem"/>,
      name: "phone",
      type: "number",
      value: signup.phone,
      placeholder: "Phone..."
    },
    {
      label: <RiLockPasswordLine size="1.5rem"/>,
      name: "password",
      type: "password",
      value: signup.password,
      placeholder: "Password..."
    },
    {
      label: <RiLockPasswordFill size="1.5rem"/>,
      name: "confirmPassword",
      type: "password",
      value: signup.confirmPassword,
      placeholder: "Confirm Password..."
    },
  ]


  return (
    <div className="grid place-content-center pb-20 pt-40 bg-slate-200 px-3">
      <div className="flex space-x-6 justify-center mb-8">
        <h1 className="text-3xl font-bold">Signup</h1>
        <AiOutlineUserAdd size="2.5rem" color="darkslateblue" />
      </div>
      <form className="rounded-xl px-5 pt-3 pb-5 md:p-10 signupForm">
        {inputFieldAttributes.map((inputs, index) => {
          return (
            <div className="grid grid-cols-4 md:grid-cols-2 my-9 md:my-8 px-2" key={index}>
              <label className="text-slate-100 my-1 w-20 place-self-center">{inputs.label}</label>
              <input name={inputs.name} type={inputs.type} placeholder={inputs.placeholder} value={inputs.value} onChange={handleChange} required
                className="px-3 py-1 text-slate-100 bg-transparent border-b-2 border-b-indigo-100 rounded-xl focus:outline-none caret-slate-100
                 ml-10 md:ml-0 w-44" />
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