import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="text-gray-400 bg-gradient-to-r from-indigo-900 via-slate-800 to-slate-900 body-font">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mx-4">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2
                                className="title-font font-medium text-white tracking-widest text-xl mb-3"
                            >
                                Contacts
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="my-5">
                                    <a className="text-slate-200"
                                        href="mailto:shubhmtiwri00@gmail.com?subject = Feedback&body = Message"
                                    >Send Email</a
                                    >
                                </li>
                                <li className="my-5">
                                    <p className="text-gray-200 hover:text-white">
                                        Phone - +91 9627253516
                                    </p>
                                </li>
                                <li className="my-5">
                                    <a
                                        className="text-gray-200 hover:text-white"
                                        href="https://wa.me/+91 8266943516"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >Whatsapp - +91 8266943516</a
                                    >
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2
                                className="title-font font-medium text-white tracking-widest text-xl mb-3"
                            >
                                Profile
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="my-5">
                                    <a
                                        className="text-gray-200 hover:text-white"
                                        href="https://github.com/ShubhamTiwari909/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >Github</a
                                    >
                                </li>
                                <li className="my-5">
                                    <a
                                        className="text-gray-200 hover:text-white"
                                        href=" https://www.linkedin.com/in/shubham-tiwari-b7544b193/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >LinkedIn
                                    </a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2
                                className="title-font font-medium text-white tracking-widest text-xl mb-3"
                            >
                                Blog
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="my-5">
                                    <a
                                        className="text-gray-200 hover:text-white"
                                        href=" https://dev.to/shubhamtiwari909"
                                        target="_blank"
                                    >Dev.to</a
                                    >
                                </li>
                                <li className="my-5">
                                    <a
                                        className="text-gray-200 hover:text-white"
                                        href="https://medium.com/@shubhmtiwri00"
                                        target="_blank" rel="noopener noreferrer"
                                    >Medium.com</a
                                    >
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800">
                    <div className="container px-5 py-8 flex flex-wrap space-x-8 justify-center text-3xl">

                        <a
                            className="text-gray-400"
                            href="https://www.facebook.com/profile.php?id=100008727573313"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a
                            className="ml-3 text-gray-400"
                            href="https://www.instagram.com/s_h.u_b.h_a.m_2k99/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            className="ml-3 text-gray-400"
                            href=" https://www.linkedin.com/in/shubham-tiwari-b7544b193/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="bg-gray-800 bg-opacity-75">
                    <div
                        className="container mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row"
                    >
                        <p className="text-gray-400 text-sm text-center">
                            Copyrights©2022 Dynamic Forms
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer