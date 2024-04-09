/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import about from "../../../assets/unnamed (1).jpg"

const AboutSection = () => {



    return (
        <>
            <div className="h-full py-24  relative bg-whitesmoke w-full ">
                <div className="container w-11/12 py-12  mx-auto max-w-maxContent  flex xl:flex-row    flex-col-reverse gap-8">
                    <div className="relative xl:w-[50%] sm:w flex xs:justify-center w-[100%] sm:justify-center  justify-end">
                        <img src={about} alt="" className="xl:w-[70%] h-full w-[100%] sm:h-full xs:w-[100%] xs:h-full " loading="lazy" />
                    </div>
                    <div className="xl:w-[50%] pl-4 w-[100%]">
                        <h1 className="text-4xl font-bold pb-4 text-theamColor " data-aos="zoom-in-up">About Us</h1>
                        <div className="xl:w-[80%]  w-[100%] pb-4 text-justify">
                            <span className=" text-[18px] font-bold " data-aos="zoom-in-up" >At Sb Auxichem, we offer a range of high-quality textile chemicals and auxiliaries that are designed to enhance the performance, quality, and sustainability of your textile products.</span>
                            <p className="text-[18px] pt-2 font-bold" data-aos="zoom-in-up">
                                We prioritize quality at every stage of our manufacturing process, ensuring that from sourcing raw materials to the final product, strict quality control measures are adhered to. Our state-of-the-art facilities and advanced technology allow us to consistently deliver products that surpass industry standards.
                            </p>
                        </div>
                        <div>
                            <Link to={"/about"} className="bg-theamColor text-whitesmoke px-6 hover:bg-richblack-800 py-2 rounded-md shadow">Read More</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutSection;







{/* <div className="w-[100vw] h-[100%] py-20 xs:flex-col sm:flex-col xs:px-4 sm:px-4 sm:gap-0 xs:gap-0  flex  items-center gap-4">
    <div className="w-[50%] h-[50%] xs:w-[100%] sx:w-[100%] px-5 rotate-90 xl:mt-30">
        <img src={about1} alt="" className="w-[70%] h-[50%] " />
    </div>
    <div className="w-[50%] xs:w-[100%] sm:w-[100%]">
        <h1 className="text-[18px] font-bold pb-4">About Us</h1>
        <div className="w-[60%] xs:w-[80%] sm:w-[80%] pb-4">
            <span className=" text-[12px] font-bold " >Your Main Idea Goes Here</span>
            <p className="text-[14px] pt-2 font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt, voluptate animi velit commodi debitis.
            </p>
        </div>
        <div className="w-[60%] xs:w-[80%] sm:w-[80%] pb-4">
            <span className=" text-[12px] font-bold " >Your Main Idea Goes Here</span>
            <p className="text-[14px] pt-2 font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt, voluptate animi velit commodi debitis.
            </p>
        </div>
        <div className="w-[60%] xs:w-[80%] sm:w-[80%] pb-4">
            <span className=" text-[12px] font-bold " >Your Main Idea Goes Here</span>
            <p className="text-[14px] pt-2 font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt, voluptate animi velit commodi debitis.
            </p>
        </div>
    </div>
</div>

</> */}
// <section className="w-full mx-auto  h-full flex flex-col  p-10  bg-whitesmoke "  >
//     <motion.div
//         variants={fadeIn("down", 0.5)}
//         initial="hidden"
//         whileInView={"show"}
//         viewport={{ once: false, amount: 0.14 }}
//         className="flex flex-row justify-between  w-full xl:w-10/12 xl:mx-auto xs:gap-8  gap-2 py-5 my-4 "  >
//         <div className="sm:w-[50%] xs:w-[50%] w-[80%]" >
//             <h2 className="text-4xl xs:text-xl sm:text-xl font-bold"  >About Us.</h2>
//             <p  >Sysmbel of trust</p>
//         </div>
//         <div className="flex  xl:pr-14 pr-0 xs:w-[50%] sm:w-[50%] w-[20%] ">
//             <Link className="bg-black px-4 py-2 text-center flex items-center justify-center rounded-md text-white">Learn more</Link>
//         </div>
//     </motion.div>
//     <div className=" w-full xl:w-10/12 xl:mx-auto flex md:flex-col xl:flex-row flex-col">
//         <motion.div
//             variants={fadeIn("right", 1)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.14 }}
//             className="flex flex-col md:flex-col  md:w-full xl:w-[60%] w-full mx-auto gap-4 sm:gap-0 xs:gap-0 px-4"  >
//             <div
//                 className="flex xl:flex-row md:flex-row flex-col gap-8 py-5 my-4 w-[100%]">
//                 <div className="flex gap-3 flex-col xl:w-[50%]">
//                     <div className="flex items-end gap-3">
//                         <h2 className="text-4xl  font-bold">1.</h2>
//                         <h2 className="xl:text-2xl md:text-xl sm:text-xl xs:text-xl font-bold">What We Do</h2>
//                     </div>
//                     <p> Itaque qui dolores dicta quae quibusdam lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel nisi sunt! Necessitatibus, commodi unde. </p>
//                 </div>
//                 <div className="flex flex-col gap-3  xl:w-[50%]">
//                     <div className="flex items-end gap-3">
//                         <h2 className="text-4xl  font-bold">2.</h2>
//                         <h2 className="xl:text-2xl container md:text-xl sm:text-xl xs:text-xl font-bold">What We Do</h2>
//                     </div>
//                     <p> Itaque qui dolores dicta quae quibusdam lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel nisi sunt! Necessitatibus, commodi unde. </p>
//                 </div>
//             </div>
//             <div className="flex xl:flex-row  md:flex-row flex-col gap-8 py-5 xs:py-0 sm:py-0 my-4 w-[100%]">
//                 <div className="flex gap-3 flex-col xl:w-[50%]">
//                     <div className="flex items-end gap-3">
//                         <h2 className="text-4xl  font-bold">3.</h2>
//                         <h2 className="xl:text-2xl md:text-xl sm:text-xl xs:text-xl font-bold">What We Do</h2>
//                     </div>
//                     <p> Itaque qui dolores dicta quae quibusdam lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel nisi sunt! Necessitatibus, commodi unde. </p>
//                 </div>
//                 <div className="flex gap-3 flex-col xl:w-[50%]">
//                     <div className="flex items-end gap-3">
//                         <h2 className="text-4xl  font-bold">4.</h2>
//                         <h2 className="xl:text-2xl md:text-xl sm:text-xl xs:text-xl font-bold">What We Do</h2>
//                     </div>
//                     <p> Itaque qui dolores dicta quae quibusdam lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel nisi sunt! Necessitatibus, commodi unde.   </p>
//                 </div>
//             </div>
//         </motion.div    >
//         <motion.div
//             variants={fadeIn("right", 1)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.5 }}
//             className="xl:w-[50%] w-full h-[100%]  ">
//             <div className="xs:pl-8  flex justify-center xl:w-[80%] w-11/12 md:w-[60%] md:mx-auto flex-row  gap-4 md:gap-0 mt-10  ">
//                 <div className="flex flex-col justify-end  md:justify-center md:w-24 mx-auto  ">
//                     <div className=" xl:h-56 xl:w-56 md:w-48 h-36 w-36 xl:ml-16">
//                         <img src={image1} alt="" className="xl:h-52 xl:w-56 md:w-48 h-32 w-36 rounded-lg" />
//                     </div>
//                     <div className=" xl:h-56 xl:w-56 md:w-56 h-36 w-36   xl:ml-16">
//                         <img src={img2} alt="" className="xl:h-44 xl:w-56 md:w-48 h-28 w-36 rounded-lg" />
//                     </div>
//                 </div>
//                 <div className="flex flex-col mx-auto   md:w-24 justify-start ">
//                     <div className=" xl:h-56 xl:w-56 md:w-48 h-36 w-36 flex items-end pb-4  ">
//                         <img src={img3} alt="" className="xl:h-44 xl:w-56 md:w-48  h-28 w-36  rounded-lg" />
//                     </div>
//                     <div className=" xl:h-56 xl:w-56 md:w-48 h-36 w-36 ">
//                         <img src={image1} alt="" className="xl:h-52 xl:w-56 md:w-48 h-32 w-36 rounded-lg" />
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     </div>
// </section >