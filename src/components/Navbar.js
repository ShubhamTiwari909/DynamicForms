import React from 'react'
import Logo from './image/logo2.jpeg'
import './Navbar.css'
function Navbar() {
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark pb-10">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        <img src={Logo} className="Logo" alt="CoolBrand" />
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="md:ml-10 collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#Home" className="nav-item nav-link active">Home</a>
                            <a href="#Faculty" className="nav-item nav-link">Faculty</a>
                            <a href="#Contact" className="nav-item nav-link">Contact</a>
                            <a href="#About" className="nav-item nav-link" tabindex="-1">About</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar