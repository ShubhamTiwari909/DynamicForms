import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import {NavLink } from 'react-router-dom'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
    <>
      <nav className="justify-between fixed top-0 left-0 px-2 py-3 bg-gradient-to-r from-indigo-900 via-purple-900 to-violet-900 w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="grid grid-cols-2 place-items-center lg:text-xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap text-white"
            >
              Dynamic Forms
            </div>
            <button
              className="text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-slate-100 block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu size="1.5rem" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-center " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col space-y-4 list-none mt-3 md:mt-0 md:space-y-0 lg:flex-row  lg:ml-auto">
              <li className="nav-item">
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <NavLink to="/" onClick={() => setNavbarOpen(!navbarOpen)}>Home</NavLink>
                </p>
              </li>
              <li className="nav-item">
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <NavLink to="/form" onClick={() => setNavbarOpen(!navbarOpen)}>Forms</NavLink>
                </p>
              </li>
              <li className="nav-item">
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <NavLink to="/signup" onClick={() => setNavbarOpen(!navbarOpen)}>Signup</NavLink>
                </p>
              </li>
              <li className="nav-item">
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <NavLink to="/signin" onClick={() => setNavbarOpen(!navbarOpen)}>Signin</NavLink>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}