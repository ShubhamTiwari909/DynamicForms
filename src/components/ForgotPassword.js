import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserLock } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import './style.css'

function Signin() {
    const [signup, setSignup] = useState({
        email: "",
        otp: "",
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
            label: <HiOutlineMail size="1.5rem" />,
            name: "email",
            type: "email",
            value: signup.email,
            placeholder: "Email..."
        },
        {
            label: "OTP",
            name: "otp",
            type: "number",
            value: signup.otp,
            placeholder: "Enter OTP..."
        },
    ]


    return (
        <div className="grid place-content-center py-20 bg-slate-200 px-3">
            <div className="flex space-x-6 justify-center mb-8">
                <h1 className="text-3xl font-bold">Change Password</h1>
                <FaUserLock size="2.5rem" color="darkslateblue" />
            </div>
            <form className="rounded-xl p-5 md:p-10 signupForm">
                {inputFieldAttributes.map((inputs, index) => {
                    return (
                        <div className="grid grid-cols-4 md:grid-cols-2 my-12 md:my-8 px-1" key={index}>
                            <label className="text-slate-100 place-self-center my-1 w-20">{inputs.label}</label>
                            <input name={inputs.name} type={inputs.type} placeholder={inputs.placeholder} value={inputs.value} onChange={handleChange}
                                className="px-3 py-1 text-slate-100 bg-transparent border-b-2 border-b-indigo-100 focus:outline-none rounded-xl focus:bg-transparent caret-slate-100
                                ml-10 md:ml-0 w-44" />
                        </div>
                    )
                })}
                <div className="grid gap-4 justify-center">
                    <button className="px-4 py-2 text-blue-200 border-2 border-blue-300 rounded-xl">Change Password</button>
                    <div className="grid grid-cols-4 md:grid-cols-2 gap-6">
                        <div className="space-y-3 col-span-2 md:col-span-1">
                            <button className="px-4 py-2 text-indigo-300 border-2 border-indigo-400 rounded-xl">Get OTP</button>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <p className="text-indigo-200 text-sm"></p>
                            <button className="px-4 py-2 text-red-300 border-2 border-red-400 rounded-xl">
                                <NavLink to="/signin">
                                    Cancel
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin