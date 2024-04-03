/* eslint-disable react/prop-types */
const AboutChoose = ({ heading, pragraph, dataAos }) => {
    return (
        <>
            <div className=" sm:w-11/12 xs:w-11/12 mx-auto h-[50%] pt-10  flex flex-col gap-6 justify-center items-center" data-aos={dataAos}  >
                <div className="w-[70%] xs:w-full sm:w-full md:w-[100%] ">
                    <h1 className="text-[32px] sm:text-[20px] lg:text-[21px] md:text-[20px] xs:text-[20px] font-bold pb-2 text-start">{heading}</h1>
                    <p className="text-[18px] sm:text-[16px] xs:text-[16px] content-center text-justify" >
                        {pragraph}
                    </p>
                </div>

            </div>

        </>


    )
}
export default AboutChoose;