import React, { useState, useEffect } from 'react'
import { Link,useParams, useNavigate } from 'react-router-dom';
import Employees from './Data';

function Edit() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("Not mentioned");
  const [department, setDepartment] = useState("Deployment");
  const [email, setEmail] = useState("Not mentioned");
  const [available, setAvailable] = useState("Available");
  const { id } = useParams();
  const history = useNavigate();

  let editData = Employees.find(item => item.id === Number(id))

  useEffect(() => {
    setName(editData.name)
    setDesignation(editData.designation)
    setDepartment(editData.department)
    setEmail(editData.email)
    setAvailable(editData.availability)
  }, [])


  const handleEdit = (e) => {
    e.preventDefault();
    Employees.find((employee, i) => {
      if (employee.id === Number(id)) {
        Employees[i] = { id: Number(id), name: name, esignation: designation, department: department, email: email, availability: available };
        return true; // stop searching
      }
    });
    history("/");
  }
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="flex flex-col p-8 border-2 border-slate-100 rounded-lg">
        <form className="flex flex-wrap gap-8 justify-center items-center p-5">
          <div className="flex flex-col gap-3 my-6">
            <label className="text-white">Name</label>
            <input type="text" className="border-none rounded-lg px-3 py-2 text-slate-800"
              value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex flex-col gap-3  my-6">
            <label className="text-white">Designation</label>
            <input type="text" className="border-none rounded-lg px-3 py-2 text-slate-800"
              value={designation} onChange={(e) => setDesignation(e.target.value)} />
          </div>
          <div className="flex flex-col gap-3 my-6">
            <label className="text-white">Department</label>
            <select type="text" className="border-none rounded-lg px-3 py-2 text-slate-800"
              value={department} onChange={(e) => setDepartment(e.target.value)}>
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
              value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </div>
          <div className="flex flex-col gap-3 my-6">
            <label className="text-white">Availability</label>
            <select type="checkbox" className="border-none rounded-lg px-3 py-2 text-slate-800"
              value={available} onChange={(e) => {
                setAvailable(e.target.value)
              }}>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>
        </form>
        <div className="flex gap-3 justify-center">
          <button className="border-none px-4 py-2 bg-blue-400 text-lg text-white rounded-md"
            onClick={handleEdit}>Update</button>
          <Link to="/" className="px-4 py-2 rounded-md bg-green-400 text-white">Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Edit
