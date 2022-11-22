import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Employees from './Data';

function Home() {

  let availableEmployeesCount = 0;
  for (let i = 0; i < Employees.length; i++) {
    if (Employees[i].availability === "Available") {
      availableEmployeesCount++;
    }
  }

  const [searchState, setSearchState] = useState("")
  const [sortState, setSortState] = useState("")
  const [available, setAvailable] = useState(availableEmployeesCount)
  const history = useNavigate();

  const handleDelete = (id) => {
    let findElement = Employees.find(item => item.id === id)
    if (findElement.availability === "Available") {
      availableEmployeesCount--
    }
    setAvailable(availableEmployeesCount)

    let index = Employees.map(item => {
      return item.id
    }).indexOf(id)
    Employees.splice(index, 1);
    history('./')
  }

  return (
    <div>
      <div className='flex justify-between border-2 border-gray-300 rounded-lg p-5 mx-10'>
        <div className="">
          <p className="text-2xl text-slate-100">Avaiable: {available}</p>
          <p className="text-2xl text-slate-100">Total: {Employees.length}</p>
          <div className="mt-10">
            <Link to="create" className="px-5 py-2 border-none rounded-lg bg-blue-500 text-white text-lg">
              <i className="fa-solid fa-plus"></i> Add Employee</Link>
          </div>
        </div>
        <div>
          <form className="flex gap-4 items-center">
            <input type="text" className="border-2 border-gray-300 text-slate-700 rounded-lg px-3 py-2 w-96 focus:outline-blue-400"
              placeholder="Search Employee..." value={searchState} onChange={(e) => setSearchState(e.target.value)} />
            <select type="checkbox" className="border-2 border-gray-400 rounded-lg px-3 py-2 text-slate-800"
              value={sortState} onChange={(e) => {
                setSortState(e.target.value)
              }}>
              <option value="All Employees">All Employees</option>
              <option value="Available Employees">Available Employees</option>
              <option value="Unavailable Employees">Unavailable Employees</option>
            </select>
          </form>
        </div>
      </div>
      <div className="border-2 border-gray-300 rounded-lg grid grid-cols-1 mx-10 mt-10 gap-10 p-10 text-slate-800">
        <div className="grid grid-cols-6 gap-4 mb-5">
          <p className="font-bold text-slate-100">Name</p>
          <p className="font-bold text-slate-100">Designation</p>
          <p className="font-bold text-slate-100">Department</p>
          <p className="font-bold text-slate-100">email</p>
          <p className="font-bold text-slate-100">Available</p>
          <p className="font-bold text-slate-100">View Details</p>
        </div>
      
          {Employees.filter(Employee => {
            if (searchState !== "") {
              return Employee.name.toLowerCase().includes(searchState.toLowerCase())
            }
            else {
              return Employees
            }
          }).filter(Employee => {
            if (sortState === "Available Employees") {
              return Employee.availability === "Available"
            }
            else if (sortState === "Unavailable Employees") {
              return Employee.availability === "Not Available"
            }
            else {
              return Employees
            }
          }).map(Employee => {
            return (
              <div key={Employee.id} className="grid grid-cols-6 items-center gap-4">
                <p className="break-words text-slate-100">{Employee.name}</p>
                <p className="break-words text-slate-100">{Employee.designation}</p>
                <p className="break-words text-slate-100">{Employee.department}</p>
                <p className="break-words text-slate-100">{Employee.email}</p>
                <p className={Employee.availability === "Available" ? "text-green-500" : "text-red-500"}>{Employee.availability}</p>
                <div className="flex gap-5 self-start">
                  <Link to={`/edit/${Employee.id}`} className="p-2 rounded-lg border-2 border-violet-400 text-violet-400 text-center">
                    <i className="fa-regular fa-pen-to-square"></i> Edit</Link>
                  <button className="p-2 rounded-lg border-2 border-red-400 text-red-400"
                    onClick={() => {
                      handleDelete(Employee.id)
                    }}><i className="fa-solid fa-trash"></i> Delete</button>
                </div>
              </div>
            )
          }).reverse()}
      </div>
    </div>
  )
}

export default Home