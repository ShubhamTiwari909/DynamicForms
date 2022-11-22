import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Employees from './Data';

function Create() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("Deployment");
  const [email, setEmail] = useState("");
  const [available, setAvailable] = useState("Available");
  const navigation = useNavigate()

  let randomId = Math.floor(Math.random() * 1000000) + 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && designation !== "" && department !== "" && available !== "") {
      Employees.push({ id: randomId, name: name, designation: designation, department: department, email: email, availability: available })
      navigation("/")
    }
    else{
      alert("Please fill all the fields")
    }
  }

  return (
    <div className="mt-10 flex items-center justify-center ">
      <div className="flex flex-col border-2 border-slate-100 p-8 rounded-lg ">
        <form className="flex flex-wrap justify-center gap-8 items-center p-5">
          <div className="flex flex-col gap-3 my-6">
            <label className="text-white">Name</label>
            <input type="text" className="border-none rounded-lg px-3 py-2 text-slate-800"
              value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-3  my-6">
            <label className="text-white">Designation</label>
            <input type="text" className="border-none rounded-lg px-3 py-2 text-slate-800"
              value={designation} onChange={(e) => setDesignation(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-3 my-6">
            <label className="text-white">Department</label>
            <select type="text" className="border-none rounded-lg px-3 py-2 text-slate-800"
              value={department} onChange={(e) => setDepartment(e.target.value)} required>
              <option value="Deployment">Deployment</option>
              <option value="Marketing">Marketing</option>
              <option value="Management">Management</option>
              <option value="Human Resource">Human Resource</option>
              <option value="Testing">Testing</option>
              <option value="IT">IT</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 my-6">
            <label className="text-white">Email</label>
            <input type="email" className="border-none rounded-lg px-3 py-2 text-slate-800"
              value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          </div>
          <div className="flex flex-col gap-3 my-6">
            <label className="text-white">Availability</label>
            <select type="checkbox" className="border-none rounded-lg px-3 py-2 text-slate-800"
              value={available} onChange={(e) => {
                setAvailable(e.target.value)
              }} required>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>
        </form>
        <div className="flex gap-3 justify-center">
          <button className="border-none px-4 py-2 bg-blue-400 text-lg text-white rounded-md"
            onClick={handleSubmit}>Save</button>
          <Link to="/" className="px-4 py-2 rounded-md bg-green-400 text-white">Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Create