/* eslint-disable react/prop-types */
const HeaderSection = ({ heading, pragraph }) => {
    return (
        <>
            <div className={`w-[100%] ${pragraph !== undefined ? ' xl:min-h-[60vh]' : 'xl:min-h-[40vh]'} bg-theamColor   xl:flex justify-center items-center `}>
                <div className="xl:w-11/12 xl:h-[100%] xl:my-auto pt-24 w-full h-[100%] text-white xl:pb-0 pb-20 mx-auto  my-auto  gap-6 flex flex-col justify-center items-center text-center ">
                    <h1 className="text-[4rem] sm:text-4xl xs:text-3xl font-bold  ">{heading}</h1>
                    <div className="w-16 border -mt-5"></div>
                    <p className="xl:text-xl text-xs w-[50%] ">{pragraph}</p>
                </div>
            </div>
        </>
    )
}

export default HeaderSection;