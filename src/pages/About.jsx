import Footer from "../components/coman/Footer"
import image1 from "../assets/img.jpg";
import about1 from "../assets/about-1.jpg"
const About = () => {
    return (
        <>
            <div className="relative h-[100vh]">
                <div className="w-[100vw]  md:h-[50%]   text-black bg-black  justify-center block">

                    <div className="w-11/12 h-[100%] mx-auto gap-6 flex flex-col justify-center items-center text-center ">
                        <h1 className="md:text-4xl flex-2xl  text-white">ABOUT US</h1>
                        <p className="text-xl text-white"> incidunt. Voluptanaman khandelwal is a tes at cupiditate sapiente consequuntur nostrum!</p>
                    </div>
                    {/* <img src={image1} className="w-[100vw] h-[50vh]"></img> */}
                </div>

                <div className="flex min-h-[100%]  w-full p-10  items-center justify-center bg-white  relative  ">
                    <div className="p"> <span>About Me</span>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque qui dolores dicta quae quibusdam reprehenderit odio praesentium neque ducimus et quasi maiores vero dolore, nobis aspernatur necessitatibus fugiat beatae ipsa.</p></div>
                    <img src={about1} className="w-[100vw] h-[50vh]" alt="" />
                </div>

                <Footer />
            </div>

        </>
    )
}

export default About