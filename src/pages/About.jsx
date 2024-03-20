import Footer from "../components/coman/Footer"
import image1 from "../assets/img.jpg";
import Navbar from "../components/coman/Navbar"
const About = () => {
    return (
        <>
            <div className="relative">
                <div className=" min-h-[100%]  w-full  text-black  justify-center block">
                    <Navbar />
                    <div className="absolute top-[20%] left-[25%]  justify-center items-center text-center z-[2]">
                        <h1 className="text-6xl text-white">ABOUT US</h1>
                        <p className="text-xl text-white"> incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!</p>
                    </div>
                    <img src={image1} className="w-[100vw] h-[50vh]"></img>
                </div>

                <div className="flex min-h-[100%]  w-full   bg-slate-600 items-center justify-center  relative  ">
                    <div>

                    </div>
                    <div></div>
                </div>

                <Footer />
            </div>

        </>
    )
}

export default About