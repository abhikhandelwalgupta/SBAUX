/* eslint-disable react/prop-types */
const JourneySection = ({ image, heading, pragraph, dataAos }) => {
    return (
        <div className="shadow-2xl py-8 lg:mx-auto bg-white w-[35%] md:w-[80%] lg:w-[80%] xs:w-[100%] sm:w-[100%] rounded-lg " data-aos={dataAos} >
            <div className="flex justify-center items-center mx-auto rounded-[50%] relative h-36 w-36 bg-theamColor ">
                <img src={image} alt="" className="w-[6rem] h-[8rem] bottom-0 absolute " /></div>
            <div className="text-cente  ">
                <h1 className="text-[2rem] font-bold  rounded-md  text-theamColor">{heading}</h1>
                <p className="text-[1rem] px-8 py-4 text-justify">{pragraph}</p>
            </div>
        </div>
    )
}
export default JourneySection;