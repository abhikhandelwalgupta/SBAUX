
//import image1 from "../assets/img.jpg";
import about1 from "../assets/about-1.jpg"
import HeaderSection from "../components/coman/HeaderSection"
const About = () => {
    return (
        <>

            <HeaderSection heading={"About Us"} pragraph={"incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!"} />
            <div className="bg-whitesmoke  mx-auto h-full ">
                <div className="flex container  xl:w-11/12 py-24 mx-auto xl:flex-row flex-col xl:gap-0 gap-8 items-center  ">
                    <div className="xl:w-[100%] w-full px-8  flex flex-col items-center justify-center">
                        <div className=" flex flex-col gap-4  justify-center">
                            <span className="font-bold text-4xl">Who we are</span>
                            <p className="text-justify xl:w-[80%]">Today, only if an enterprise has an online presence does it stand a chance to succeed to its optimum potential. Initiated with a mission to transform all the mundane business firms into dynamic and happening enterprises, Daksh Infosoft intends to endow your business with a web presence that would give your enterprise a firm standing in these technologically advanced times. We are a Jaipur based website design and development company with a specialization in website designing, graphics designing, Digital Marketing and Bulk SMS/IVR/Voice Call services along with expertise in building a fully customized application for all types of industry. For more than a decade, with our expertise, we prefer to deliver our products within time offering the best quality and minimum cost to clients. Encouraging direct contact with our creative team we prefer creating a comfort zone for both - the client and the team that wll work for them. Thus delivering precisely what you are looking for!</p>
                        </div>
                    </div>
                    <div className="xl:w-[30%] left-0 px-8">
                        <img src={about1} className="xl:w-[100%] xl:h-[50%]   rounded-md" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-theamColor text-vanillaWhite  mx-auto h-full ">
                <div className="flex container  xl:w-11/12 py-24 mx-auto xl:flex-row flex-col xl:gap-0 gap-8 items-center  ">
                    <div className="xl:w-[100%] w-full px-8  flex flex-col items-center justify-center">
                        <div className=" flex flex-col gap-4  justify-center items-center">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <span className="font-bold text-4xl">WHY WE?</span>
                                <h2>Trust of Symbol</h2>
                            </div>
                            <p className="text-justify xl:w-[80%]">Today, only if an enterprise has an online presence does it stand a chance to succeed to its optimum potential. Initiated with a mission to transform all the mundane business firms into dynamic and happening enterprises, Daksh Infosoft intends to endow your business with a web presence that would give your enterprise a firm standing in these technologically advanced times. We are a Jaipur based website design and development company with a specialization in website designing, graphics designing, Digital Marketing and Bulk SMS/IVR/Voice Call services along with expertise in building a fully customized application for all types of industry. For more than a decade, with our expertise, we prefer to deliver our products within time offering the best quality and minimum cost to clients. Encouraging direct contact with our creative team we prefer creating a comfort zone for both - the client and the team that wll work for them. Thus delivering precisely what you are looking for!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-KittenWhite text-black  mx-auto h-full ">
                <div className="flex container  xl:w-11/12 py-24 mx-auto xl:flex-row flex-col xl:gap-0 gap-8 items-center  ">
                    <div className="xl:w-[100%] w-full px-8  flex flex-col items-center justify-center">
                        <div className=" flex flex-col gap-4  justify-center">
                            <span className="font-bold text-4xl">About Me</span>
                            <p className="text-justify xl:w-[80%]">Today, only if an enterprise has an online presence does it stand a chance to succeed to its optimum potential. Initiated with a mission to transform all the mundane business firms into dynamic and happening enterprises, Daksh Infosoft intends to endow your business with a web presence that would give your enterprise a firm standing in these technologically advanced times. We are a Jaipur based website design and development company with a specialization in website designing, graphics designing, Digital Marketing and Bulk SMS/IVR/Voice Call services along with expertise in building a fully customized application for all types of industry. For more than a decade, with our expertise, we prefer to deliver our products within time offering the best quality and minimum cost to clients. Encouraging direct contact with our creative team we prefer creating a comfort zone for both - the client and the team that wll work for them. Thus delivering precisely what you are looking for!</p>
                        </div>
                    </div>
                    <div className="xl:w-[30%] left-0 px-8">
                        <img src={about1} className="xl:w-[100%] xl:h-[50%]   rounded-md" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About