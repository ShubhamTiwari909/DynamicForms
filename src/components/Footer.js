import Image1 from './image/Img1.jpg'

function Footer() {
    return (
        <div>
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contacts</h2>
                            <nav className="list-none mb-10">
                                <li className='my-5'>
                                    <p className="text-gray-400 hover:text-white">Email - starpapermills10school@gmail.com</p>
                                </li>
                                <li className='my-5'>
                                    <p className="text-gray-400 hover:text-white">Phone - +91 9917509340</p>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Profile</h2>
                            <nav className="list-none mb-10">
                                <li className='my-5'>
                                    <p className="text-gray-400 hover:text-white">School - Star Paper Mllls Higher Secondary school</p>
                                </li>
                                <li className='my-5'>
                                    Board - UP Board
                                </li>
                                <li className='my-5'>
                                   Address - Star Paper Mlll Road, Saharanpur , UP
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <img src={Image1} alt="Image1" style={{border: "3px solid white",borderRadius:"1rem"}} />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800">
                    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                        <div className="flex md:flex-nowrap flex-wrap justify-center items-center md:justify-start">
                            <label htmlFor="footer-field" className="leading-4 text-xl text-gray-400 mx-4">Send an Email</label>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                <a href="mailto:starpapermills10school@gmail.com?subject = Feedback&body = Message"> Send</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 bg-opacity-75">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-400 text-sm text-center sm:text-left">Copyrights©2022 PhotoGlob</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;