import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import catelog from "../../assets/catelog.pdf"
import video from "../../assets/ch-1.mp4";

const HeroSection = () => {
  return (
    <>
      <div className="relative  h-[100%] w-[100%] top-0 bottom-0 z-[1] mix-blend-lighten "></div>
      <video
        src={video}
        className="absolute sm:h-[100vh] xs:h-[100vh] w-[100%] top-0 bottom-0 left-0 right-0 object-cover"
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="px-[1.5rem] text-white w-full max-h-max pt-[1rem]  h-[100vh] flex gap-12 flex-col items-stretch justify-center m-auto z-[100]">
        <div className="absolute py-7 xl:left-16 space-y-4">
          <div>
            <h1
              className="font-bold text-5xl xs:text-2xl sm:text-2xl md:text-3xl"
              data-aos="zoom-in-up"
            >
              Welcome to SB AUXICHEM
            </h1>
            <p
              className="text-end text-xl xl:text-3xl font-medium"
              data-aos="zoom-in-up"
            >
              SYMBOL OF TRUST
            </p>
          </div>
          <div className="flex  items-end justify-end gap-4">
            <Link
              to={"/Contact"}
              className="bg-theamColor px-6 hover:bg-richblack-800 py-2 rounded-md shadow float-end"
              data-aos="zoom-in-up"
            >
              Contact US
            </Link>
            {/* <Link className="bg-theamColor px-6 hover:bg-richblack-800 py-2 rounded-md shadow float-end flex items-center
                        gap-2" data-aos="zoom-in-up" to="./"><span><IoMdDownload /></span> Catalog </Link> */}
            <a
              target="_blank"
              className="bg-theamColor px-6 hover:bg-richblack-800 py-2 rounded-md shadow float-end flex items-center
                        gap-2"
              data-aos="zoom-in-up"
              href={catelog}
            >
              <span>
                <IoMdDownload />
              </span>
              Catalog
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
