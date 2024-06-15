import 'aos/dist/aos.css'

import AboutChoose from "../components/coman/home/AboutChoose"
import AboutSection from "../components/coman/home/AboutSection"
import Aos from "aos";
import HeroSection from "../components/coman/Hero"
import JourneySection from "../components/coman/home/JourneySection"
import { Link } from "react-router-dom";
import MedicalService from "../components/coman/home/MedicalService"
import Testimonial from "../components/Testimonial"
import Water from "../assets/water-Photoroom.jpg";
import journey1 from "../assets/journey-1.png"
import journey2 from "../assets/journey-2.png"
import journey3 from "../assets/journey-3.png"
import journey4 from "../assets/journey-4.png"
import paper from "../assets/paperchem.jpg";
import textile from "../assets/textileChemicsl.jpg";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, []);
    return (
        <>
            <section className="relative font-inter w-full w-maxContent h-full">

                <HeroSection />
                <AboutSection />
                <div className="w-[100%] bg-theamColor relative   xl:flex justify-center items-center ">
                    <div className="xl:w-11/12 xl:h-[100%] xl:my-auto pt-24 w-full h-[100%] text-white  py-20 mx-auto  my-auto  gap-6 flex flex-col justify-center items-center text-center ">
                        <h1 className="xl:text-4xl text-4xl font-bold flex-2xl ">What We Provide</h1>
                        <div className="w-16 border -mt-5"></div>

                        <div className="mt-12 px-12 w-full xl:w-10/12 items-center mx-auto  justify-center  text-black flex xl:flex-row flex-col md:flex-row  xl:gap-14 gap-8" >
                            <MedicalService image={textile} heading={"Textile Chemical"} pragraph={"SB Auxichem  also offers a range of high-quality chemical auxiliaries for the textile industry"} dataAos={'zoom-in-up'} />
                            <MedicalService image={Water} heading={"Water Chemical"} pragraph={"Water treatment chemicals, which reduce the dispersed oil content in the effluent water."} dataAos={'zoom-in-up'} />
                            <MedicalService image={paper} heading={"Paper Chemical"} pragraph={"SB Auxichem help paper manufacturers modify the properties of paper."} dataAos={'zoom-in-up'} />
                        </div>
                    </div>
                </div>

                <div className="w-[100vw] relative   py-16 bg-whitesmoke bg-no-repeat   bg-cover object-center ">

                    <div className="xl:w-11/12 xl:h-[100%] xl:my-auto  w-full h-[100%]  text-black   mx-auto  my-auto  gap-6 py-4  flex flex-col justify-center items-center text-center ">
                        <h1 className="text-4xl font-extrabold flex-2xl text-theamColor" data-aos="zoom-in-up">Why Choose Us?</h1>
                        <div className="w-16 border -mt-5"></div>
                    </div>
                    <div className="w-[100%] flex xs:flex-col sm:flex-col sm:px-2 xs:px-2 xs:gap-0 justify-center     gap-6 px-10 pb-10 ">
                        <div className="flex w-[50%] xs:w-[100%] sm:w-[100%] flex-col  ">
                            <AboutChoose heading={"Innvation at the code"} pragraph={"Our innovation is driven by the use of strong funding in research and development. This is the rule of thumb and description in our organisation. As a producer our manner is to apprehend the marketplace tendencies and the desires of our clients and attempt to fulfill any of them. We choice that we push the boundaries and invent answers that have not been seen earlier than."} dataAos={'zoom-in-up'} />

                            <AboutChoose heading={"Engaging Genuine Customers"} pragraph={"Customers are the rulers in the business world. Gaining or losing a customer can change the course of your business. Every single detail needs to be processed clearly to create a positive customer experience. Their perception is built from your product and your services. Thus the engagement of the customers is one of the top priorities. Let's upbeat their opinion for you!"} dataAos={'zoom-in-up'} />
                        </div>

                        <div className="flex w-[50%] xs:w-[100%] sm:w-[100%] flex-col">
                            <AboutChoose heading={"Skilled and Dedicated Team"} pragraph={"Our success wouldn't be possible without our tremendous team of specialists. From professional chemists to committed customer support representatives, every member of our team plays a vital feature in our journey to excellence. We invest in ongoing education and improvement to make sure that our employees have the capabilities and data they need to supply top-notch outcomes."} dataAos={'zoom-in-up'} />

                            <AboutChoose heading={"Building Strong Rapport"} pragraph={"Customers are the rulers in the business world. Gaining or losing a customer can change the course of your business. Every single detail needs to be processed clearly to create a positive customer experience. Their perception is built from your product and your services. Thus the engagement of the customers is one of the top priorities. Let's upbeat their opinion for you!"} dataAos={'zoom-in-up'} />
                        </div>
                    </div>

                </div>

                <div className="relative bg-theamColor py-16 flex flex-col gap-8" >
                    <div className="flex justify-center w-11/12 mx-auto">
                        <h1 className="text-4xl pb-[2rem] font-bold text-white text-center" >The four stages of a customer journey</h1>
                    </div>

                    <div className="flex  xs:flex-col sm:flex-col gap-14 px-6 text-center w-11/12 mx-auto md:grid md:grid-cols-2  md:place-content-between lg:grid lg:grid-cols-2  lg:place-content-between">
                        <JourneySection image={journey1} heading={'Inquiry'} pragraph={"The inquiry stage is when a potential customer begins researching the product or service, either directly through the product site or through a third party, which could be social media, word of mouth or an advertisement. "} dataAos="zoom-out-up" />
                        <JourneySection image={journey2} heading={'Comparison'} pragraph={"The comparison stage is where the consumer gains a considerable amount of control and can compare certain products and services with others to ensure they receive what they want. "} dataAos="zoom-out-up" />
                        <JourneySection image={journey3} heading={'Purchase'} pragraph={"The purchase stage is when a prospect becomes a customer, triggering the service department to begin with installation or follow-up services."} dataAos="zoom-out-up" />
                        <JourneySection image={journey4} heading={'Support'} pragraph={"Customers are the rulers in the business world. Gaining or losing a customer can change the course of your business. Every single detail needs to be processed clearly to create a positive customer experience. "} dataAos="zoom-out-up" /></div>
                </div>


                <section className="py-16 relative">
                    {/* <div className="max-w-screen-xl px-4 py-12  mx-auto text-center lg:py-16 lg:px-6">
                        <Testimonial />
                    </div> */}
                </section>

                <div className="mx-auto max-w-3xl px-4 bg-transparent relative sm:mt-32 sm:px-6  lg:px-8 -mb-12">
                    <div className="flex flex-col items-center bg-theamColor justify-between gap-7 rounded-xl bg-neutral-200 px-6 py-8 shadow-sm dark:bg-neutral-900 sm:px-10 lg:px-14 xl:flex-row">
                        <div className="mx-auto max-w-2xl text-center xl:mx-0 xl:text-left">
                            <h2 className="text-3xl font-bold leading-tight tracking-wide text-neutral-900 text-white lg:text-4xl">
                                Are u excited for  demo
                            </h2>
                        </div>
                        <div>
                            <div className="mx-auto flex max-w-md items-start gap-x-4 bg-white rounded-md" >
                                <Link to={"/Contact"} className=" px-6 hover:bg-richblack-800 py-2 rounded-md shadow float-end font-inter font-semibold" >Request Demo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        </>
    )
}




export default Home