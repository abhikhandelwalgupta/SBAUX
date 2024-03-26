import Testimonial from "../components/Testimonial"
import HeroSection from "../components/coman/Hero"
import water from "../assets/water.png"
import image1 from "../assets/product-1.jpg"
import img2 from "../assets/img-2.jpg"
import chVideo from "../assets/ch.mp4"
import img3 from "../assets/img-3.jpeg"
import MedicalService from "../components/coman/home/MedicalService"
const Home = () => {
    return (
        <>
            <div className="relative w-full h-full">
                <div className="relative h-[100vh] w-[100%] pb-4">
                    <HeroSection />
                </div>
                {/* Section About us */}

                {/* <div className="flex min-h-[100%] w-11/12 mx-auto py-12 md:mt-12 items-center justify-center flex-col">
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
                </div> */}
                {/* <div className="min-h-[100px]"></div> */}
                <div className="w-11/12 mx-auto h-full flex flex-col md:flex-row p-10">
                    <div className="flex flex-col md:w-[50%] w-full mx-auto gap-4 px-4"  >
                        <div className="flex flex-col md:flex-row gap-2 py-5 my-4  ">
                            <h2 className="text-4xl font-bold">About Us.</h2>
                            <p>Sysmbel of trust</p>
                        </div>
                        <div className="flex md:flex-row  flex-col gap-8 py-5 my-4 w-[100%]">
                            <div className="flex gap-3 flex-col md:w-[50%]">
                                <h2 className="text-4xl font-bold">1.</h2>
                                <h2 className="text-xl font-bold">What We Do</h2>
                                <p> Itaque qui dolores dicta quae quibusdam  </p>
                            </div>
                            <div className="flex flex-col gap-3  md:w-[50%]">
                                <h2 className="text-4xl font-bold">2.</h2>
                                <h2 className="text-xl font-bold">What We Do</h2>
                                <p> Itaque qui dolores dicta quae quibusdam </p>
                            </div>
                        </div>
                        <div className="flex md:flex-row  flex-col gap-8 py-5 my-4 w-[100%]">
                            <div className="flex gap-3 flex-col md:w-[50%]">
                                <h2 className="text-4xl font-bold">3.</h2>
                                <h2 className="text-xl font-bold">What We Do</h2>
                                <p> Itaque qui dolores dicta quae quibusdam </p>
                            </div>
                            <div className="flex gap-3 flex-col md:w-[50%]">
                                <h2 className="text-4xl font-bold">4.</h2>
                                <h2 className="text-xl font-bold">What We Do</h2>
                                <p> Itaque qui dolores dicta quae quibusdam </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[50%] w-full h-[100%]  ">
                        <div className="flex justify-end p-4 pr-14 w-[100%] h-[30%]">
                            <div className="border px-5 py-1 mt-5 mr-10  bg-whitesmoke rounded shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                                <a href="">Learn more</a>
                            </div>
                        </div>
                        <div className="mx-auto  flex justify-center md:w-full w-11/12 flex-row  gap-1 mt-10  ">
                            <div className="flex flex-col  mx-auto md:w-[100%] w-[50%]">
                                <div className="bg-cover bg-center bg-no-repeat md:h-64 md:w-64 md:ml-16">
                                    <img src={image1} alt="" className="md:h-60 md:w-64 h-28 w-40 rounded-lg" />
                                </div>
                                <div className="bg-cover bg-center bg-no-repeat md:h-64 md:w-64 md:ml-16">
                                    <img src={img2} alt="" className="md:h-48 md:w-64 rounded-lg" />
                                </div>
                            </div>
                            <div className="flex flex-col md:w-full w-[50%]">
                                <div className="bg-cover bg-center bg-no-repeat md:h-64 md:w-64 flex items-end pb-4 ">
                                    <img src={img3} alt="" className="md:h-48 md:w-64 rounded-lg" />
                                </div>
                                <div className="bg-cover bg-center bg-no-repeat md:h-64 md:w-64">
                                    <img src={image1} alt="" className="md:h-60 md:w-64 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <video className=" w-[60%]  rounded-3xl" autoPlay loop muted>
                            <source src={chVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                {/* <div className="bg-black">
                <ScrollDirection />
                </div> */}

                {/* section 3 */}


                <div className="w-[100%] bg-richblack-800    md:flex justify-center items-center ">
                    <div className="md:w-11/12 md:h-[100%] md:my-auto pt-24 w-full h-[100%] text-white  py-20 mx-auto  my-auto  gap-6 flex flex-col justify-center items-center text-center ">
                        <h1 className="md:text-4xl font-bold flex-2xl ">What We Provide</h1>
                        <div className="w-16 border -mt-5"></div>
                        <p className="md:text-xl text-xs md:w-[50%] w-full md:px-0 px-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid provident sed.</p>
                        <div className="mt-12 px-12 w-full md:w-10/12 items-center mx-auto  text-black flex md:flex-row flex-col  md:gap-14 gap-8">
                            <MedicalService heading={"Water Chemical"} pragraph={"incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!"} image={water} />
                            <MedicalService heading={"Textile Chemical"} pragraph={"incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!"} />
                            <MedicalService heading={"Paper Chemical"} pragraph={"incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!"} />

                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-whitesmoke">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <Testimonial />
                </div>
            </section>

        </>
    )
}




export default Home