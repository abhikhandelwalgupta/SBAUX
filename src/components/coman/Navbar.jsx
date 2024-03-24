// import { IoMdMenu } from "react-icons/io";

import { useState } from "react"
import { Link } from "react-router-dom";
import { links } from "../../links";



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
            <div className={`flex h-14 items-center  z-[9999] fixed w-full ${scrollY ? ' bg-KittenWhite ' : 'bg-transparent'}  justify-center   } transition-all duration-200`}>
                <div className={` w-11/12 max-w-maxContent items-center  justify-between  p-4 md:flex  max-container ${open ? "hidden" : "flex"}`}>
                    <nav className={`flex font-bold  flex-wrap w-11/12 ${scrollY ? "text-jetcolor" : 'text-white'} max-w-maxContent mx-auto justify-between p-3`}>
                        <div>
                            <span className="text-2xl cursor-pointer font-bold">SBAUXI</span>
                        </div>

                        <ul className="gap-5 p-1.5 md:flex flex-row  items-center justify-between  hidden ">
                            {
                                links.map((link, index) => {
                                    return (
                                        <li key={index} className="uppercase">
                                            <Link to={link.path} >{link.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="md:hidden">
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
                        <div className={`w-full max-w-maxContent pt-52   ${scrollY ? 'bg-whitesmoke' : 'bg-teagreen-800'} py-16  md:hidden flex flex-col`}>
                            <div className=" mt-24 flex flex-col ">
                                <div className={`flex flex-row font-bold justify-between w-11/12 mx-auto`}>
                                    <h2>SBAUXI</h2>
                                    <button
                                        type="button"
                                        className={`text-black flex items-end justify-end focus:outline-none`}
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
                                </div>
                                <ul className="gap-5 p-1.5 flex  text-black flex-col md:hidden mt-4 items-center  justify-center  w-full">
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