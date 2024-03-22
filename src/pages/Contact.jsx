
import HeaderSection from "../components/coman/HeaderSection"
import { IoIosChatboxes ,IoIosCall  } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

const Contact = () => {
    return (
        <>

            <HeaderSection heading={"Contact US"} />
            <div className="bg-whitesmoke">
                <div className=" text-black w-11/12 mx-auto md:flex pt-20 pb-20 gap-6 items-start justify-center  ">
                    <div className="bg-richblack-800 text-whitesmoke rounded-xl md:p-5 md:m-10 box-content  ">
                        <div className="p-5">
                            <span className="md:text-2xl text-xl flex items-center space-x-2 ">
                                <IoIosChatboxes /> <h2>Chat on us</h2>
                            </span>
                            <p className="text-base">Our friendly team is here to help. <br />
                                info@studynotion.com</p>
                        </div>
                        <div className="p-5">
                            <span className="md:text-2xl text-xl flex items-center space-x-2 ">
                                <BiWorld />
                                <h2> Visit us</h2>
                            </span>
                            <p className="text-base">
                                Come and say hello at our office HQ. <br />
                                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, <br />
                                Bangalore-560016
                            </p>
                        </div>
                        <div className="p-5">
                            <span className="md:text-2xl text-xl flex items-center space-x-2"><IoIosCall /> <h2>Call us</h2></span>
                            <p className="text-base">
                                Mon - Fri From 8am to 5pm <br />
                                +123 456 7869
                            </p>
                        </div>
                    </div>
                    <div className="md:p-5 py-4 md:mt-0 mt-4 border rounded-lg ">
                        <div className="p-4">
                            <span className="text-4xl">Got a Idea? We have got the skills. Lets team up</span>
                            <p className="text-[#95d0a8]">Tell us more about yourself and what youre got in mind.</p>
                        </div>

                        <form className=" flex-wrap  bg-whitesmoke w-full md:gap-0 gap-4">
                            <div className="flex flex-col md:flex-row md:p-4 md:px-0 px-4 md:gap-8 gap-4 ">
                                <div className="flex flex-col md:w-[50%] w-full">
                                    <label htmlFor="firstName">First Name</label>
                                    <input name="firstName" type='text' id="firstName" placeholder='Name'
                                        className="form-style " />

                                </div>
                                <div className="flex flex-col md:w-[50%] w-full">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input name="lastName" type='text' id="lastName" placeholder='Name'
                                        className="form-style " />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row w-full md:p-4 md:px-0 px-4 md:gap-8 md:py-0 py-4 gap-4">
                                <div className="flex flex-col md:w-[50%] w-full">
                                    <label htmlFor="email">Email</label>
                                    <input name="email" type='email' id="email" placeholder='Email' className="form-style" />
                                </div>
                                <div className="flex flex-col md:w-[50%] w-full">
                                    <label htmlFor="mobileNumber">Number</label>
                                    <input name="mobileNumber" id="mobileNumber" type='Number' placeholder='Number'
                                        className="form-style " />
                                </div>
                            </div>
                            <div className="flex flex-col w-full md:p-4 md:px-0 px-4  ">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder='Message' rows="6"
                                    className="form-style"></textarea>
                            </div>
                            <div className="flex w-full md:p-4 md:px-0 px-4 md:py-0 py-4">
                                <button type='button'
                                    className=" bg-richblue-800 text-white  font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>

                            </div>
                        </form>
                    </div>
                </div >
            </div>
            <div className="w-full md:px-0 px-2 md:pr-0 pr-6 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14685.382598502008!2d72.66050861243023!3d23.04778616149248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86d53c2ed683%3A0x161958a4f45e809a!2sNikol%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1711132739534!5m2!1sen!2sin" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

        </>

    )
}

export default Contact