import React from 'react'
import Slide1 from './image/Slide1.jpg'
import Slide2 from './image/Slide2.jpeg'
import Slide3 from './image/Slide3.jpeg'
import Slide4 from './image/Slide4.jpeg'
import Slide5 from './image/Slide5.jpeg'

function Carousel() {
    return (
        <div className="my-8">
            <div className="grid">
                <h1 className="justify-self-center text-center my-4 font-bold text-3xl border-l-2 border-b-2 border-neutral-800 p-2">About School</h1>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={Slide1}
                            className="block w-full"
                            alt="..."
                        />

                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Slide2}
                            className="block w-full"
                            alt="..."
                        />


                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Slide3}
                            className="block w-full"
                            alt="..."
                        />

                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Slide4}
                            className="block w-full"
                            alt="..."
                        />

                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Slide5}
                            className="block w-full"
                            alt="..."
                        />

                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel