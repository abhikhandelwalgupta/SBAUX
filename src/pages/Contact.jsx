/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
const Contact = () => {
    return (
        <>
            <div className="">
                <div className="w-11/12 h-[40vh] flex justify-center items-center">
                    <h1 className=" text-4xl text-white ">Contact US</h1>
                </div>
                <div className="flex text-black w-full p-20  bg-white">
                    <div className="bg-[#6C5F5B] rounded-lg p-20 box-content h-[100%] w-[3  0%]">
                        <div className="p-5">
                            <span className="text-2xl ">Chat on us</span>
                            <p>Our friendly team is here to help. <br />
                                info@studynotion.com</p>
                        </div>
                        <div className="p-5">
                            <span className="text-2xl ">Visit us</span>
                            <p className="">
                                Come and say hello at our office HQ. <br />
                                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, <br />
                                Bangalore-560016
                            </p>
                        </div>
                        <div className="p-5">
                            <span className="text-2xl ">Call us</span>
                            <p>
                                Mon - Fri From 8am to 5pm <br />
                                +123 456 7869
                            </p>
                        </div>
                    </div>
                    <div className="p-20 ml-20 border rounded-lg">
                        <div>
                            <span className="text-4xl">Got a Idea? We've got the skills. Let's team up</span>
                            <p className="text-[#95d0a8]">Tell us more about yourself and what you're got in mind.</p>
                        </div>
                        <div>
                            <form className="mt-8 space-y-4">
                                <p>Name</p>
                                <input type='text' placeholder='Name'
                                    className="w-full rounded-md py-3 px-4  text-sm " />
                                <p>Email</p>
                                <input type='email' placeholder='Email'
                                    className="w-full rounded-md py-3 px-4  text-sm " />
                                <p>Number</p>
                                <input type='Number' placeholder='Number'
                                    className="w-full rounded-md py-3 px-4  text-sm " />
                                <p>Message</p>
                                <textarea placeholder='Message' rows="6"
                                    className="w-full rounded-md px-4  text-sm pt-3 "></textarea>
                                <button type='button'
                                    className=" bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact