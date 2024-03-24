import Testimonial from "../components/Testimonial"
import HeroSection from "../components/coman/Hero"

import { HiAcademicCap } from "react-icons/hi";

import chVideo from "../assets/ch.mp4"
const Home = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    // };
    return (
        <>
            <div className="relative w-full h-full">
                <div className="relative h-[100vh] w-[100%] pb-4">
                    <HeroSection />
                </div>
                {/* Section About us */}

                <div className="flex min-h-[100%] w-11/12 mx-auto py-12 md:mt-12 items-center justify-center flex-col">
                    <h2 className="font-bold text-4xl">About us</h2>
                    <div className="flex md:flex-row flex-col items-center  w-full gap-8 justify-center">
                        <div className="md:w-[50%] w-full h-full md:mt-20 p-8 rounded-md flex flex-col justify-start items-start gap-8">
                            <div className="text-bluegreen-25   text-justify flex items-start justify-start clearfix  ">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque qui dolores dicta quae quibusdam reprehenderit odio praesentium neque ducimus et quasi maiores vero dolore, nobis aspernatur necessitatibus fugiat beatae ipsa.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque qui dolores dicta quae quibusdam reprehenderit odio praesentium neque ducimus et quasi maiores vero dolore, nobis aspernatur necessitatibus fugiat beatae ipsa.</p>
                            </div>
                            <button className="py-3 px-4 rounded-md bg-bluegreen-800 text-white">Read More</button>
                        </div>
                        <div className="dee  h-[50%] -mt-16 md:py-0 py-16">
                            <div className="bottle h-full">
                                <div className="bottle__sides h-full">
                                    <div className="bottle__side  text-2xl"><span>D</span><span>r</span><span>i</span><span>n</span><span>k</span><span> </span><span>m</span><span>o</span><span>r</span><span>e</span><span> </span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>!</span>
                                    </div>
                                    <div className="bottle__side text-2xl"><span>D</span><span>r</span><span>i</span><span>n</span><span>k</span><span> </span><span>m</span><span>o</span><span>r</span><span>e</span><span> </span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>!</span>
                                    </div>
                                    <div className="bottle__side text-2xl"><span>D</span><span>r</span><span>i</span><span>n</span><span>k</span><span> </span><span>m</span><span>o</span><span>r</span><span>e</span><span> </span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>!</span>
                                    </div>
                                    <div className="bottle__side text-2xl"><span>D</span><span>r</span><span>i</span><span>n</span><span>k</span><span> </span><span>m</span><span>o</span><span>r</span><span>e</span><span> </span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>!</span>
                                    </div>
                                    <div className="bottle__side text-2xl"><span>D</span><span>r</span><span>i</span><span>n</span><span>k</span><span> </span><span>m</span><span>o</span><span>r</span><span>e</span><span> </span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>!</span>
                                    </div>
                                    <div className="bottle__side text-2xl"><span>D</span><span>r</span><span>i</span><span>n</span><span>k</span><span> </span><span>m</span><span>o</span><span>r</span><span>e</span><span> </span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>!</span>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="min-h-[100px]"></div> */}
                <div className=" flex items-center w-11/12 mx-auto">
                    <h2> Elemental Extravaganza </h2>
                    <video>
                        <source></source>
                    </video>
                </div>
                <div className=" w-full bg-bluegreen-700 h-full   md:mt-20 p-8 flex flex-col justify-start items-start gap-8">
                    <div className="text-bluegreen-25  items-center  flex-col  w-11/12 mx-auto text-justify flex gap-4 justify-start clearfix  ">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque qui dolores dicta quae quibusdam reprehenderit odio praesentium neque ducimus et quasi maiores vero dolore, nobis aspernatur necessitatibus fugiat beatae ipsa.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque qui dolores dicta quae quibusdam reprehenderit odio praesentium neque ducimus et quasi maiores vero dolore, nobis aspernatur necessitatibus fugiat beatae ipsa.</p>
                        <button className="py-3 px-4 rounded-md bg-bluegreen-800 text-white">Read More</button>

                    </div>
                </div>
                <div className="w-full h-full bg-whitesmoke">
                    <div className="flex justify-center items-center  py-10">
                        <h1 className="text-4xl font-bold ">
                           Elemental Extravaganza
                        </h1>
                    </div>

                    <div className=" flex justify-center items-center py-8">
                        <video className=" w-[60%]  rounded-3xl" controls>
                        <source src={chVideo} type="video/mp4" />

                        </video>
                    </div>


                </div>
                {/* <div className="bg-black">
                <ScrollDirection />
                </div> */}

                {/* section 3 */}


                {/* <div className="w-[100%] bg-richblack-800    md:flex justify-center items-center ">
                    <div className="md:w-11/12 md:h-[100%] md:my-auto pt-24 w-full h-[100%] text-white  py-20 mx-auto  my-auto  gap-6 flex flex-col justify-center items-center text-center ">
                        <h1 className="md:text-4xl font-bold flex-2xl ">Our Bussines Category</h1>
                        <div className="w-16 border -mt-5"></div>
                        <p className="md:text-xl text-xs w-[50%] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid provident sed.</p>
                        <div className="mt-12 text-black flex gap-14">
                            <MedicalService heading={"Water Chemical"} pragraph={"incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!"} />
                            <MedicalService heading={"Textile Chemical"} pragraph={"incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!"} />
                            <MedicalService heading={"Paper Chemical"} pragraph={"incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!"} />

                        </div>
                    </div>
                </div> */}
            </div>
            <section className="bg-whitesmoke">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <Testimonial />
                </div>
            </section>

        </>
    )
}

function MedicalService({ heading, pragraph }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-8 w-80">
            <HiAcademicCap className="h-20 w-20 inline-block mr-2" />
            <h2 className="text-2xl font-bold mb-4">{heading}</h2>
            <p className="text-gray-700">
                {pragraph}
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Learn More
            </button>
        </div>
    )
}



export default Home