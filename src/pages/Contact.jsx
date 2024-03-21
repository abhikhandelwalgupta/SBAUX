
import HeaderSection from "../components/coman/HeaderSection"
const Contact = () => {
    return (
        <>

            <HeaderSection heading={"Contact US"} />
            <div className="bg-whitesmoke">
                <div className=" text-black w-11/12 mx-auto md:flex pt-20 pb-20 gap-6 items-start justify-center  ">
                    <div className="bg-richblack-800 text-whitesmoke rounded-xl md:p-5 md:m-10 box-content  ">
                        <div className="p-5">
                            <span className="md:text-2xl text-xl ">Chat on us</span>
                            <p className="text-base">Our friendly team is here to help. <br />
                                info@studynotion.com</p>
                        </div>
                        <div className="p-5">
                            <span className="md:text-2xl text-xl ">Visit us</span>
                            <p className="text-base">
                                Come and say hello at our office HQ. <br />
                                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, <br />
                                Bangalore-560016
                            </p>
                        </div>
                        <div className="p-5">
                            <span className="md:text-2xl text-xl ">Call us</span>
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

        </>

    )
}

export default Contact