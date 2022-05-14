import React, { useState } from 'react'
import AboutImg from './image/About.jpg'
import Principle from './image/Principle.jpg'
import './About.css'
function About() {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const isDropdown1 = () => setDropdown1(!dropdown1);
    const isDropdown2 = () => setDropdown2(!dropdown2);


    return (
        <div className="grid grid-cols-1 my-10">
            
            <div className="grid grid-cols-2 px-3">
                <div className="mx-1">
                    <img src={AboutImg} className="WelcomeImg" />
                    <div className="text-center my-5">
                        <h1 className="font-bold text-xl">Welcome To</h1>
                        <h3 className="font-bold">SPM Higher Secondary School</h3>
                        <h3 style={{ height: "20px", overflow: dropdown1 ? "visible" : "hidden", height: dropdown1 ? "100%" : "20px" }}>SPM Higher Secondary School,Saharanpur was established in 1965 affiliated to up board , meerut to carter higher education in western uttar pradesh.</h3>
                    </div>
                    <div className="text-center">
                        <button onClick={isDropdown1}
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 md:px-5 md:py-2.5 text-center mr-2 mb-2">
                            Learn More...
                        </button>
                    </div>
                </div>
                <div className="mx-1">
                    <img src={Principle} className="WelcomeImg" />
                    <div className="text-center my-5">
                        <h1 className="font-bold text-xl">Principle Messsage</h1>
                        <h1 style={{ height: "20px", overflow: dropdown2 ? "visible" : "hidden", height: dropdown2 ? "100%" : "20px" }}>Dear Students, Our prestigious school of learning was established in 1965.
                            During the last 57 years.It has matured as one of the distinguished school of the region
                        </h1>
                    </div>
                    <div className="text-center">
                        <button onClick={isDropdown2}
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 md:px-5 md:py-2.5 text-center mr-2 mb-2">
                            Learn More...
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About