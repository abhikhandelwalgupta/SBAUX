
import vision from "../assets/vision.png";
import about1 from "../assets/about-1.jpg"
import HeaderSection from "../components/coman/HeaderSection"
import mission from "../assets/mission.png";
const About = () => {
    return (
        <>

            <HeaderSection heading={"About Us"} pragraph={"incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!"} />
            <div className="bg-whitesmoke  mx-auto h-full ">
                <div className="flex container  xl:w-11/12 py-24 mx-auto xl:flex-row flex-col xl:gap-0 gap-8 items-center  ">
                    <div className="xl:w-[100%] w-full px-8  flex flex-col items-center justify-center">
                        <div className=" flex flex-col gap-4  justify-center ">
                            <span className="font-bold text-4xl text-theamColor">Who we are</span>
                            <div className="w-16 border -mt-4 "></div>
                            <p className="text-justify xl:w-[80%] text-[1.2rem]">We are pioneers in the chemical industry, dedicated to innovation, sustainability, and excellence. Our rich history and forward-thinking approach place us at the forefront of developing cutting-edge solutions to address the world's pressing challenges. Our diverse team, comprising chemists, engineers, researchers, and business leaders, is united by a common goal: to create value through chemistry. Committed to safety, environmental stewardship, and ethical practices, we continually strive to push the boundaries of what's possible, driving progress and shaping the industrys future. Our passion for discovery and unwavering commitment to quality define who we are and propel us towards a brighter, more sustainable tomorrow.</p>
                        </div>
                    </div>
                    <div className="xl:w-[70%] left-0 px-8">
                        <img src={about1} className="xl:w-[100%] xl:h-[50%]   rounded-md" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-theamColor text-white  mx-auto h-full ">
                <div className="flex container  xl:w-11/12 py-24 mx-auto xl:flex-row flex-col xl:gap-0 gap-8 items-center  ">
                    <div className="xl:w-[100%] w-full px-8  flex flex-col items-center justify-center">
                        <div className=" flex flex-col gap-4  justify-center items-center">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <span className="font-bold text-4xl ">Why We?</span>
                                <div className="w-16 border -mt-4 "></div>
                            </div>
                            <p className="text-justify xl:w-[80%] text-[1.2rem]">In short, the role that we, the chemical industry, play in each aspect of management of modern civilisation is massive. Furthermore, we play a crucial part in striving to reduce the impact of human activity, direct or indirect, aiming to reduce the impact on the environment severely. Our work and efforts define the rhythm of progress, development, and quality of life in its entirety. Hence, the influence of our industry, inspired by the necessary safety measure, examination, and collaboration defines future shapes and outcomes, extending to our future offsprings.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-KittenWhite text-black  mx-auto h-full ">
                <div className="flex container  xl:w-11/12 py-24 mx-auto xl:flex-row flex-col xl:gap-0 gap-8 items-center  ">
                    <div className="xl:w-[100%] w-full px-8  flex flex-col items-center justify-center">
                        <div className=" flex flex-col gap-4  justify-center">
                            <span className="font-bold text-4xl text-theamColor">About Us</span>
                            <div className="w-16 border -mt-4 "></div>
                            <p className="text-justify xl:w-[80%] text-[1.2rem]">We are a professional devoted to the chemical industry and pride myself on the experience and expertise I bring to the table. With a solid background in chemistry and inspiration for innovation, I strive to change the way chemical processes and technologies work. I am distinguished by the desire for an outstanding performance in optimal production output, the consistent adherence to safety measures, or sustainable solutions development. I am comfortable in an ever-changing work environment that requires me to collaborate and develop problem-solving skills. I also draw inspiration from expanding the boundaries of what is achievable in my area of expertise. These traits, combined with attention to detail, allow me to navigate the complicated and enticing landscape of this discipline.</p>
                        </div>
                    </div>
                    <div className="xl:w-[70%] left-0 px-8">
                        <img src={about1} className="xl:w-[100%] xl:h-[50%]   rounded-md" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-KittenWhite text-black mx-auto h-full w-full py-16 ">
                <div className="flex justify-center items-center flex-col py-8">
                    <h1 className="text-4xl font-bold text-center " >Our <span className="text-theamColor">Vision and  Mission</span></h1>
                    <div className="w-16 border mt-2 "></div>
                </div>
                <div className="flex xs:flex-col sm:flex-col w-10/12 mx-auto   gap-6  ">
                    <div className="flex justify-center items-center flex-col text-center w-[50%] xs:w-[100%] sm:w-[100%] mx-auto bg-white p-4 shadow-lg rounded-lg">
                        <div className="">
                            <img src={vision} alt="" />
                        </div>
                        <div>
                            <h1 className="text-[1.7rem] py-4 font-bold">Vision</h1>
                            <p className="text-[1.2rem]">We have started our journey with a vision of providing the best and most reliable IT services. Today, we are proud to have turned that vision into reality. We now aspire to be at the forefront of technological evolution and touch every industry in every corner of the world.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col text-center w-[50%] xs:w-[100%] sm:w-[100%]  bg-white p-4 shadow-lg rounded-lg">
                        <div className="">
                            <img src={mission} alt="" />
                        </div>
                        <div>
                            <h1 className="text-[1.7rem] py-4 font-bold">Mission</h1>
                            <p className="text-[1.2rem]">Our mission is simple - leave no stone unturned in transforming every business, brand, and individual that partners with Provis Technologies. We put all we have to propel your growth. Collaboration with us is beyond just business.</p>
                        </div>
                    </div>

                    {/* <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h1>Mission</h1>
                            <p>Our mission is simple - leave no stone unturned in transforming every business, brand, and individual that partners with Provis Technologies. We put all we have to propel your growth. Collaboration with us is beyond just business.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default About