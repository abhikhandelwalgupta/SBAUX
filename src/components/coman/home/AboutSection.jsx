import { Link } from "react-router-dom";
import image1 from "../../../assets/product-1.jpg"
import img2 from "../../../assets/img-1.jpg"
import img3 from "../../../assets/img-3.jpeg"

const AboutSection = () => {
    return (
        <div className="w-full mx-auto  h-full flex flex-col  p-10  bg-whitesmoke">
            <div className="flex flex-row justify-between  w-full xl:w-10/12 xl:mx-auto xs:gap-8  gap-2 py-5 my-4  ">
                <div className="sm:w-[50%] xs:w-[50%] w-[80%]">
                    <h2 className="text-4xl xs:text-xl sm:text-xl font-bold">About Us.</h2>
                    <p>Sysmbel of trust</p>
                </div>
                <div className="flex  xl:pr-14 pr-0 xs:w-[50%] sm:w-[50%] w-[20%] ">
                    <Link className="bg-black px-4 py-2 text-center flex items-center justify-center rounded-md text-white">Learn more</Link>
                </div>
            </div>
            <div className=" w-full xl:w-10/12 xl:mx-auto flex md:flex-col xl:flex-row flex-col">
                <div className="flex flex-col md:flex-col  md:w-full xl:w-[60%] w-full mx-auto gap-4 sm:gap-0 xs:gap-0 px-4"  >
                    <div className="flex xl:flex-row md:flex-row flex-col gap-8 py-5 my-4 w-[100%]">
                        <div className="flex gap-3 flex-col xl:w-[50%]">
                            <div className="flex items-end gap-3">
                                <h2 className="text-4xl  font-bold">1.</h2>
                                <h2 className="xl:text-2xl md:text-xl sm:text-xl xs:text-xl font-bold">What We Do</h2>
                            </div>
                            <p> Itaque qui dolores dicta quae quibusdam  </p>
                        </div>
                        <div className="flex flex-col gap-3  xl:w-[50%]">
                            <div className="flex items-end gap-3">
                                <h2 className="text-4xl  font-bold">2.</h2>
                                <h2 className="xl:text-2xl container md:text-xl sm:text-xl xs:text-xl font-bold">What We Do</h2>
                            </div>
                            <p> Itaque qui dolores dicta quae quibusdam </p>
                        </div>
                    </div>
                    <div className="flex xl:flex-row  md:flex-row flex-col gap-8 py-5 xs:py-0 sm:py-0 my-4 w-[100%]">
                        <div className="flex gap-3 flex-col xl:w-[50%]">
                            <div className="flex items-end gap-3">
                                <h2 className="text-4xl  font-bold">3.</h2>
                                <h2 className="xl:text-2xl md:text-xl sm:text-xl xs:text-xl font-bold">What We Do</h2>
                            </div>
                            <p> Itaque qui dolores dicta quae quibusdam </p>
                        </div>
                        <div className="flex gap-3 flex-col xl:w-[50%]">
                            <div className="flex items-end gap-3">
                                <h2 className="text-4xl  font-bold">4.</h2>
                                <h2 className="xl:text-2xl md:text-xl sm:text-xl xs:text-xl font-bold">What We Do</h2>
                            </div>
                            <p> Itaque qui dolores dicta quae quibusdam </p>
                        </div>
                    </div>
                </div>
                <div className="xl:w-[50%] w-full h-[100%]  ">
                    <div className="xs:pl-8  flex justify-center xl:w-[80%] w-11/12 md:w-[60%] md:mx-auto flex-row  gap-4 md:gap-0 mt-10  ">
                        <div className="flex flex-col justify-end  md:justify-center md:w-24 mx-auto  ">
                            <div className=" xl:h-56 xl:w-56 md:w-48 h-36 w-36 xl:ml-16">
                                <img src={image1} alt="" className="xl:h-52 xl:w-56 md:w-48 h-32 w-36 rounded-lg" />
                            </div>
                            <div className=" xl:h-56 xl:w-56 md:w-56 h-36 w-36   xl:ml-16">
                                <img src={img2} alt="" className="xl:h-44 xl:w-56 md:w-48 h-28 w-36 rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col mx-auto   md:w-24 justify-start ">
                            <div className=" xl:h-56 xl:w-56 md:w-48 h-36 w-36 flex items-end pb-4  ">
                                <img src={img3} alt="" className="xl:h-44 xl:w-56 md:w-48  h-28 w-36  rounded-lg" />
                            </div>
                            <div className=" xl:h-56 xl:w-56 md:w-48 h-36 w-36 ">
                                <img src={image1} alt="" className="xl:h-52 xl:w-56 md:w-48 h-32 w-36 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;