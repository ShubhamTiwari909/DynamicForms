import React from 'react'
import "./App.css"
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import Logo from './components/images/logo.png'
function App() {
  return (
    <div>
      <div className='py-3 px-5 mb-4 flex justify-center'>
        <img alt="logo" src={Logo} />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App