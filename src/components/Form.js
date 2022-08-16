import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import './style.css'

function Form() {
  const [inputField, setInputField] = useState([
    { name: '', email: '', phone: '' }
  ])
  const [data, setData] = useState([])
  const handleForm = (index, event) => {
    let data = [...inputField];
    data[index][event.target.name] = event.target.value;
    setInputField(data)
  }

  const addFields = () => {
    let newField = { name: '', email: '', phone: '' }
    setInputField([...inputField, newField])
  }

  const removeInputField = (index) => {
    let data = [...inputField];
    data.splice(index, 1);
    console.log(data)
    setInputField(data)
  }
  const submit = (e) => {
    e.preventDefault();
    setData(inputField)
  }

  return (
    <div className="grid justify-center Home" style={{height: '220vh'}}>
        <form className="bg-slate-800 p-4 mx-3 mt-40 rounded-xl" onSubmit={submit}>
          <div className="h-96 md:h-64 overflow-auto customScrollbar">
            {inputField.length === 0 ? <div className="text-slate-100 text-center text-2xl">No input fields please add inputs fields</div>
              :
              inputField.map((input, index) => {
                return (
                    <div className="my-2 md:my-10 px-1" key={index}>
                      <h1 className="text-indigo-200 text-2xl text-center">Enter new user details</h1>
                      <div className="md:flex md:space-x-4 my-5">
                        <div className="grid grid-cols-2 my-8 md:my-0">
                          <label className="text-slate-200 justify-self-center mt-2 mr-10">Name</label>
                          <input name="name" type="text" value={input.name} onChange={event => handleForm(index, event)}
                            className="px-3 py-1 text-slate-100 bg-transparent border-b-2 border-b-indigo-400 focus:outline-none caret-slate-300"
                          />
                        </div>
                        <div className="grid grid-cols-2 my-8 md:my-0">
                          <label className="text-slate-200 justify-self-center mt-2 mr-10">Email</label>
                          <input name="email" type="email" value={input.email} onChange={event => handleForm(index, event)}
                            className="px-3 py-1 text-slate-100 bg-transparent border-b-2 border-b-indigo-400 focus:outline-none caret-slate-300" />
                        </div>
                        <div className="grid grid-cols-2 my-8 md:my-0">
                          <label className="text-slate-200 justify-self-center mt-2 mr-10">Phone</label>
                          <input name="phone" type="number" value={input.phone} onChange={event => handleForm(index, event)}
                            className="px-3 py-1 text-slate-100 bg-transparent border-b-2 border-b-indigo-400 focus:outline-none caret-slate-300" />
                        </div>
                        <div className="flex justify-center md:ml-3">
                          <button onClick={() => removeInputField(index)}
                            className="px-4 py-2 text-slate-100 bg-slate-800 rounded-full text-center ring-2 ring-offset-2 ring-red-400">
                            <AiOutlineDelete color="crimson" size="1.2rem" />
                          </button>
                        </div>
                      </div>
                    </div>
                )
              })}
          </div>
          <div className="grid place-content-center mt-5">
            <button onClick={addFields}
              className="px-4 py-2 bg-slate-800 text-indigo-300 rounded-full text-center ring-2 ring-offset-2 ring-indigo-400 my-3">
              Add input
            </button>
            <button type="submit"
              className="px-4 py-2 bg-green-500 text-slate-900 font-bold rounded-full text-center ring-2 ring-offset-2 ring-indigo-400 my-3">
              Submit
            </button>
          </div>
        </form>

        <div className="mt-20 mb-28">
          <h1 className="text-indigo-400 bg-slate-800 p-3 rounded-xl mx-6 text-3xl text-center my-5">Data</h1>
          <div className="bg-slate-200 p-5 h-96 overflow-auto rounded-lg mx-4">
            {data.length === 0 ? <div className="my-5 text-2xl text-slate-800 text-center">Add Some Data to see</div>
              :
              data.map((data, index) => {
                return (
                  <div key={index} className="border-2 border-indigo-400 rounded-xl my-5 p-5">
                    <h1 className="text-xl font-bold text-slate-700">User {index + 1}</h1>
                    <h1>Name - {data.name}</h1>
                    <h1>Email - {data.email}</h1>
                    <h1>Phone - {data.phone}</h1>
                  </div>
                )
              })}
          </div>
        </div>
    </div>
  )
}

export default Form