/* eslint-disable react/jsx-key */

import HeroSection from "../components/coman/Hero"
import ScrollDirection from "../components/coman/ScrollDirection "
import { HiAcademicCap } from "react-icons/hi";
import image1 from "../assets/maxresdefault.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
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
                <div className="min-h-[100px]"></div>
                <div className=" w-full bg-bluegreen-700 h-full md:mt-20 p-8 flex flex-col justify-start items-start gap-8">
                    <div className="text-bluegreen-25   text-justify flex items-start justify-start clearfix  ">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque qui dolores dicta quae quibusdam reprehenderit odio praesentium neque ducimus et quasi maiores vero dolore, nobis aspernatur necessitatibus fugiat beatae ipsa.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque qui dolores dicta quae quibusdam reprehenderit odio praesentium neque ducimus et quasi maiores vero dolore, nobis aspernatur necessitatibus fugiat beatae ipsa.</p>
                    </div>
                    <button className="py-3 px-4 rounded-md bg-bluegreen-800 text-white">Read More</button>
                </div>

                {/* <div className="bg-richblack-800 relative">
                    <div className="w-3/4 m-auto">
                        <div className="pt-20">
                            <Slider {...settings}>
                                {reviews.map((d) => (
                                    <div className="bg-white h-[400px]  text-black rounded-xl">
                                        <div className="  rounded-t-xl flex gap-2 p-2 " >
                                            <img src={image1} alt="" className="h-24 w-24 rounded-full " />

                                            <div className="pl-1">
                                                <p className="text-2xl pt-5 ">{d.name}</p>
                                                <p className="text-lg">{d.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-4 p-4 ">
                                            <svg className="h-8   text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                            </svg>
                                            <p className="text-center ">"{d.text}"</p>
                                            <button className="bg-richblack-800 text-white text-lg px-6 py-1">Read More</button>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div> */}


                {/* <div className="bg-black">
                    <ScrollDirection />
                </div> */}
                {/* section 3 */}


                <div className="w-[100%] bg-richblack-800    md:flex justify-center items-center ">
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
                </div>
            </div>

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