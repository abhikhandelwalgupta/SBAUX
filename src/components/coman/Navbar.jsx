// import { IoMdMenu } from "react-icons/io";

import { useState } from "react"
import { Link } from "react-router-dom";
import { links } from "../../links";
import logo from "../../assets/FINAL logo.png"
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [scrollY, setScrollY] = useState(false);

    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
        if (scrollPosition >= 100) {
            setScrollY(true)
        } else {
            setScrollY(false)
        }
    });

    const handleOnclick = () => {
        window.scrollTo(0, 0);
        setOpen(!open)
    }


    return (
        <>
            <div className={`flex h-20 items-center  z-[9999]  text-black  ${scrollY ? 'bg-theam-25' : 'bg-[#5bf3c816]'} ${scrollY && 'border-b'} fixed w-full justify-center transition-all duration-200`}>
                <div className={` w-11/12 max-w-maxContent    xl:flex  max-container ${open ? "hidden" : "flex"}`}>
                    <nav className={`flex font-bold  flex-wrap text-black w-full ${scrollY ? "text-jetcolor" : 'text-black'} max-w-maxContent  justify-between `}>
                        <Link to={"/"}>
                            <img src={logo} alt="" className="h-16 " />
                        </Link>

                        <ul className="gap-x-4 md:flex xl:flex flex-row  items-center justify-between  xs:hidden sm:hidden  ">
                            {
                                links.map((link, index) => {
                                    return (
                                        <li key={index} className="uppercase" onClick={() => window.scrollTo(0, 0)} >
                                            <Link to={link.path} >{link.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="md:hidden xl:hidden mt-5">
                        {
                            !open ? (

                                <button className={`${scrollY ? "text-jetcolor" : 'text-white'} focus:outline-none`} onClick={() => setOpen(!open)}>
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                </button>
                            ) :
                                <button
                                    type="button"
                                    className={`${scrollY ? "text-jetcolor" : 'text-white'} focus:outline-none`}
                                    onClick={() => setOpen(!open)}
                                >

                                    {/* Heroicon name: outline/x */}
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                        }

                    </div>

                </div>
                {
                    open && (
                        <div className={`w-full max-w-maxContent pt-52   ${scrollY ? 'bg-whitesmoke' : 'bg-whitesmoke'} py-16  md:hidden flex flex-col`}>
                            <div className=" mt-24 flex flex-col ">
                                <div className={`flex flex-row  font-bold  justify-between  `}>
                                    <Link to={"/"}>
                                        <img src={logo} alt="" className="h-16 " />
                                    </Link>
                                    <button
                                        type="button"
                                        className={`text-black flex items-center justify-center focus:outline-none  `}
                                        onClick={() => setOpen(!open)}
                                    >

                                        {/* Heroicon name: outline/x */}
                                        <svg
                                            className="h-6 w-6 "
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <ul className="gap-5 p-1.5 flex xl:hidden font-bold text-black flex-col md:hidden mt-4 items-center  justify-center  w-full">
                                    {
                                        links.map((link, index) => {
                                            return (
                                                <li key={index} className="uppercase" onClick={handleOnclick}>
                                                    <Link to={link.path} >{link.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                    )
                }
            </div>

        </>
    )
}
export default Navbar