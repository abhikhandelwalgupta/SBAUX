import Testimonial from "../components/Testimonial"
import HeroSection from "../components/coman/Hero"
import water from "../assets/water.png"
import chVideo from "../assets/ch.mp4"
import MedicalService from "../components/coman/home/MedicalService"
import AboutSection from "../components/coman/home/AboutSection"

const Home = () => {
    return (
        <>
            <div className="relative w-full w-maxContent h-full">
                <div className="relative h-[100vh] w-[100%] pb-4">
                    <HeroSection />
                </div>
                {/* Section About us */}
                <AboutSection />

                {/* <div className="min-h-[100px]"></div> */}


                <div className=" w-full bg-bluegreen-700 h-full   xl:mt-20 p-8 flex flex-col justify-start items-start gap-8">
                    <div className="text-bluegreen-25  items-center  flex-col  w-11/12 mx-auto text-justify flex gap-4 justify-start clearfix  ">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque qui dolores dicta quae quibusdam reprehenderit odio praesentium neque ducimus et quasi maiores vero dolore, nobis aspernatur necessitatibus fugiat beatae ipsa.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque qui dolores dicta quae quibusdam reprehenderit odio praesentium neque ducimus et quasi maiores vero dolore, nobis aspernatur necessitatibus fugiat beatae ipsa.</p>
                        <button className="py-3 px-4 rounded-md bg-bluegreen-800 text-white">Read More</button>
                    </div>
                </div>
                <div className="w-full h-full bg-whitesmoke">
                    <div className="flex justify-center items-center  py-10">
                        <h1 className="xl:text-4xl text-2xl font-bold ">
                            Elemental Extravaganza
                        </h1>
                    </div>
                    <div className=" flex justify-center items-center py-8">
                        <video className=" xl:w-[60%] xl:px-0 px-6 rounded-2xl w-full" autoPlay loop muted>
                            <source src={chVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                {/* <div className="bg-black">
                <ScrollDirection />
                </div> */}

                {/* section 3 */}


                <div className="w-[100%] bg-richblack-800    xl:flex justify-center items-center ">
                    <div className="xl:w-11/12 xl:h-[100%] xl:my-auto pt-24 w-full h-[100%] text-white  py-20 mx-auto  my-auto  gap-6 flex flex-col justify-center items-center text-center ">
                        <h1 className="xl:text-4xl md:text-2xl font-bold flex-2xl ">What We Provide</h1>
                        <div className="w-16 border -mt-5"></div>
                        <p className="xl:text-xl text-xs xl:w-[50%] w-full xl:px-0 px-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid provident sed.</p>
                        <div className="mt-12 px-12 w-full xl:w-10/12 items-center mx-auto  justify-center  text-black flex xl:flex-row flex-col  xl:gap-14 gap-8">
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