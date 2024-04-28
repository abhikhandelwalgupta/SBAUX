/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({ img, heading, pragraph1, pragraph2, flexDirection, bgColor, textcolor }) => {
    console.log(bgColor)
    return (
        <>
            <div className={`flex bg-${bgColor} xl:justify-between  w-full  py-8  `} >
                <div className={` text-black  py-6 px-12  w-11/12 mx-auto rounded-lg  bg-${bgColor}  border-spacing-6 flex   ${flexDirection}`}>
                    <div className={`xl:w-[50%] w-[100%] flex justify-start   flex-col text-${textcolor}`}>
                        <div className="text-start xl:w-[100%] mx-auto space-y-4">
                            <h1 className={`font-bold xl:text-2xl text-xl mb-[-1rem] ${bgColor === 'white' ? "text-theamColor" : "text-white"} `}>{heading}</h1>
                            <div className="w-16 border "></div>
                            <p className=" flex items-end text-[1.2rem] text-justify xl:w-[80%]"> {pragraph1}</p>
                            {/* <p className=" flex items-end text-[1.2rem] text-justify xl:w-[80%]"> {pragraph2}</p> */}
                        </div>
                        <div className="flex py-4 ">
                            <Link className="py-3 mt-5 px-4 rounded-md   bg-theamColor hover:bg-richblack-800 delay-200 text-white ">View More</Link>
                        </div>
                    </div>
                    <div className="flex xl:w-[50%] mx-auto  rounded-xl pb-4  w-full">
                        <img src={img} alt="" className="xl:w-[85%] w-[100%] h-[100%] bg-center rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard;
