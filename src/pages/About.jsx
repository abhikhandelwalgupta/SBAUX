
//import image1 from "../assets/img.jpg";
import about1 from "../assets/about-1.jpg"
const About = () => {
    return (
        <>
            <div className="w-[100vw]">
                <div className="w-[100%] md:min-h-[60vh] bg-richblack-800 min-h-[50%]   md:flex justify-center items-center block">
                    <div className="md:w-11/12 md:h-[100%] md:my-auto pt-24 w-full h-[100%] ` md:pb-0 pb-20 mx-auto  my-auto  gap-6 flex flex-col justify-center items-center text-center ">
                        <h1 className="md:text-4xl flex-2xl  text-white">ABOUT US</h1>
                        <p className="md:text-xl text-xs w-[50%] text-white"> incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!</p>
                    </div>
                </div>
                <div className="bg-whitesmoke  mx-auto h-full ">
                    <div className="flex container  md:w-11/12 py-24 mx-auto md:flex-row flex-col md:gap-0 gap-8 items-center  ">
                        <div className="md:w-[100%] w-full px-8  flex flex-col items-center justify-center">
                            <div className=" flex flex-col gap-4  justify-center">
                                <span className="font-bold text-4xl">Who we are</span>
                                <p className="text-justify md:w-[80%]">Today, only if an enterprise has an online presence does it stand a chance to succeed to its optimum potential. Initiated with a mission to transform all the mundane business firms into dynamic and happening enterprises, Daksh Infosoft intends to endow your business with a web presence that would give your enterprise a firm standing in these technologically advanced times. We are a Jaipur based website design and development company with a specialization in website designing, graphics designing, Digital Marketing and Bulk SMS/IVR/Voice Call services along with expertise in building a fully customized application for all types of industry. For more than a decade, with our expertise, we prefer to deliver our products within time offering the best quality and minimum cost to clients. Encouraging direct contact with our creative team we prefer creating a comfort zone for both - the client and the team that wll work for them. Thus delivering precisely what you are looking for!</p>
                            </div>
                        </div>
                        <div className="md:w-[30%] left-0 px-8">
                            <img src={about1} className="md:w-[100%] md:h-[50%]   rounded-md" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-richblack-800 text-vanillaWhite  mx-auto h-full ">
                    <div className="flex container  md:w-11/12 py-24 mx-auto md:flex-row flex-col md:gap-0 gap-8 items-center  ">
                        <div className="md:w-[100%] w-full px-8  flex flex-col items-center justify-center">
                            <div className=" flex flex-col gap-4  justify-center items-center">
                                <div className="flex flex-col justify-center items-center space-y-2">
                                    <span className="font-bold text-4xl">WHY WE?</span>
                                    <h2>Trust of Symbol</h2>
                                </div>
                                <p className="text-justify md:w-[80%]">Today, only if an enterprise has an online presence does it stand a chance to succeed to its optimum potential. Initiated with a mission to transform all the mundane business firms into dynamic and happening enterprises, Daksh Infosoft intends to endow your business with a web presence that would give your enterprise a firm standing in these technologically advanced times. We are a Jaipur based website design and development company with a specialization in website designing, graphics designing, Digital Marketing and Bulk SMS/IVR/Voice Call services along with expertise in building a fully customized application for all types of industry. For more than a decade, with our expertise, we prefer to deliver our products within time offering the best quality and minimum cost to clients. Encouraging direct contact with our creative team we prefer creating a comfort zone for both - the client and the team that wll work for them. Thus delivering precisely what you are looking for!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-KittenWhite text-black  mx-auto h-full ">
                    <div className="flex container  md:w-11/12 py-24 mx-auto md:flex-row flex-col md:gap-0 gap-8 items-center  ">
                        <div className="md:w-[100%] w-full px-8  flex flex-col items-center justify-center">
                            <div className=" flex flex-col gap-4  justify-center">
                                <span className="font-bold text-4xl">About Me</span>
                                <p className="text-justify md:w-[80%]">Today, only if an enterprise has an online presence does it stand a chance to succeed to its optimum potential. Initiated with a mission to transform all the mundane business firms into dynamic and happening enterprises, Daksh Infosoft intends to endow your business with a web presence that would give your enterprise a firm standing in these technologically advanced times. We are a Jaipur based website design and development company with a specialization in website designing, graphics designing, Digital Marketing and Bulk SMS/IVR/Voice Call services along with expertise in building a fully customized application for all types of industry. For more than a decade, with our expertise, we prefer to deliver our products within time offering the best quality and minimum cost to clients. Encouraging direct contact with our creative team we prefer creating a comfort zone for both - the client and the team that wll work for them. Thus delivering precisely what you are looking for!</p>
                            </div>
                        </div>
                        <div className="md:w-[30%] left-0 px-8">
                            <img src={about1} className="md:w-[100%] md:h-[50%]   rounded-md" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About