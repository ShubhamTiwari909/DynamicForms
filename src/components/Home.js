import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="pt-20 md:pt-36 grid justify-center Home">
      <div className="grid gap-10 place-content-center">
        <div className="bg-black p-8 space-y-8 rounded-2xl ring ring-offset-1 ring-indigo-300">
          <h1 className="text-slate-100 text-2xl font-bold">Welcome to Dynamic Forms</h1>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 text-indigo-200 border-2 border-indigo-300 rounded-xl">
              <NavLink to="/signup">
                Signup
              </NavLink>
            </button>
            <button className="px-4 py-2 text-blue-300 border-2 border-blue-400 rounded-xl">
              <NavLink to="/signin">Signin</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-10 place-content-center">
        <div className="bg-black p-4 mx-3 space-y-8 rounded-2xl ring ring-offset-1 ring-indigo-300">
          <h1 className="text-slate-100 text-center text-2xl font-bold">Here you can store data using dynamic inputs according to your needs</h1>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 text-indigo-200 border-2 border-indigo-300 rounded-xl">
              <NavLink to="/form">
               Let's get started
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home