/* eslint-disable react/prop-types */
const HeaderSection = ({ heading, pragraph }) => {
    return (
        <>
            <div className={`w-[100%] ${pragraph !== undefined ? ' md:min-h-[60vh]' : 'md:min-h-[40vh]'} bg-richblack-800    md:flex justify-center items-center `}>
                <div className="md:w-11/12 md:h-[100%] md:my-auto pt-24 w-full h-[100%] ` md:pb-0 pb-20 mx-auto  my-auto  gap-6 flex flex-col justify-center items-center text-center ">
                    <h1 className="md:text-4xl flex-2xl  text-white">{heading}</h1>
                    <p className="md:text-xl text-xs w-[50%] text-white">{pragraph}</p>
                </div>
            </div>
        </>
    )
}

export default HeaderSection;