import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="bg-black
              text-richblack-400">
                <div className=" w-11/12 max-w-maxContent flex text-white leading-4  py-14 items-center gap-3 mt-4 mx-auto justify-between font-inter">
                    <div className=" flex font-bold text-white  flex-wrap w-11/12 max-w-maxContent mx-auto justify-between p-3 md:flex-row flex-col md:space-y-0 space-y-12">
                        <div className="flex md:flex-row flex-row md:w-[50%] justify-around">
                            <div className="md:w-[50%] w-[50%]">
                                <h2>SB AUXI CHEM</h2>
                            </div>
                            <div className="flex flex-col md:space-y-12 space-y-4">
                                <h2> Quick Links</h2>
                                <ul className="gap-5 p-1.5 flex flex-col  items-center justify-between   ">
                                    <li>
                                        <Link to="/" >HOME</Link>
                                    </li>
                                    <li>

                                        <Link to="/About" >ABOUT</Link>
                                    </li>
                                    <li>
                                        <Link to="/" >SERVICE</Link>

                                    </li>
                                    <li>
                                        <Link to="/" >PRODECT</Link>

                                    </li>
                                    <li>
                                        <Link to="/" >CONTACT</Link>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-row  justify-around md:w-[50%]">
                            <div>
                                <h2> Business Segments</h2>
                            </div>
                            <div>
                                <h2>Meet Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer