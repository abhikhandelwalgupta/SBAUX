/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */

import { IoIosCall, IoIosChatboxes } from "react-icons/io";

import { BiWorld } from "react-icons/bi";
import HeaderSection from "../components/coman/HeaderSection"
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>

            <HeaderSection heading={"Contact Us"} />
            <div className="bg-whitesmoke">
                <div className=" text-black w-11/12 mx-auto xl:flex pt-20 pb-20 gap-0 items-start justify-center  ">
                    <div className="bg-theamColor text-whitesmoke rounded-xl xl:p-5 xl:mx-10 xl:my-16  ">
                        <div className="p-5">
                            <span className="xl:text-2xl text-xl flex items-center space-x-2 ">
                                <IoIosChatboxes /> <h2>Chat on us</h2>
                            </span>
                            <p className="text-base">Our friendly team is here to help. <br />
                                <Link to="#" onClick={(e) => {
                                    window.location.href = "mailto:info@sbauxichem.com";
                                    e.preventDefault();
                                }}> info@sbauxichem.com</Link>
                            </p>
                        </div>
                        <div className="p-5">
                            <span className="xl:text-2xl text-xl flex items-center space-x-2 ">
                                <BiWorld />
                                <h2> Visit us</h2>
                            </span>
                            <p className="text-base">
                                Come and say hello at our office  <br />
                                111, Golden chambers,  Veera Desai,<br/> Andheri-West, Mumbai-400068
                            </p>
                        </div>
                        <div className="p-5">
                            <span className="xl:text-2xl text-xl flex items-center space-x-2"><IoIosCall /> <h2>Call us</h2></span>
                            <p className="text-base">
                                +91 7623806276
                            </p>
                        </div>
                    </div>
                    <div className="xl:p-5  py-4 xl:mt-0 mt-4 border rounded-lg ">
                        <div className="p-4">
                            <span className="text-4xl">Let's Get Associated</span>
                            {/* <p className="text-[#95d0a8]">Tell us more about yourself and what youre got in mind.</p> */}
                        </div>

                        <form className=" flex-wrap  bg-whitesmoke w-full xl:gap-0 gap-4">
                            <div className="flex flex-col md:flex-row xl:flex-row xl:p-4 xl:px-0 px-4 xl:gap-8 gap-4 ">
                                <div className="flex flex-col md:w-[50%] xl:w-[50%] w-full">
                                    <label htmlFor="firstName">First Name</label>
                                    <input name="firstName" type='text' id="firstName" placeholder='Name'
                                        className="form-style " />

                                </div>
                                <div className="flex flex-col md:w-[50%] xl:w-[50%] w-full">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input name="lastName" type='text' id="lastName" placeholder='Name'
                                        className="form-style " />
                                </div>
                            </div>

                            <div className="flex sm:flex-col xs:flex-col flex-row w-full xl:p-4 xl:px-0 px-4 xl:gap-8 xl:py-0 py-4 gap-4">
                                <div className="flex flex-col  w-[50%] xs:w-full">
                                    <label htmlFor="email">Email</label>
                                    <input name="email" type='email' id="email" placeholder='Email' className="form-style" />
                                </div>
                                <div className="flex flex-col w-[50%] xs:w-full">
                                    <label htmlFor="mobileNumber">Number</label>
                                    <input name="mobileNumber" id="mobileNumber" type='Number' placeholder='Number'
                                        className="form-style " />
                                </div>
                            </div>
                            <div className="flex flex-col w-full xl:p-4 xl:px-0 px-4  ">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder='Message' rows="6"
                                    className="form-style"></textarea>
                            </div>
                            <div className="flex w-full xl:p-4 xl:px-0 px-4 xl:py-0 py-4">
                                <button type='button'
                                    className=" bg-theamColor text-white  font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>

                            </div>
                        </form>
                    </div>
                </div >
            </div>
            <div className="w-full xl:px-0 px-2 xl:pr-0 pr-6 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3160029347473!2d72.82963287381824!3d19.137640050037238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62334353a81%3A0x159914c92bfb013a!2sGolden%20Chambers%2C%20Veera%20Desai%20Industrial%20Estate%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400102!5e0!3m2!1sen!2sin!4v1718455363244!5m2!1sen!2sin" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

        </>

    )
}

export default Contact