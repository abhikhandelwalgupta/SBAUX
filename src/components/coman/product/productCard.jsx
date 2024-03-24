/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({ img, heading, pragraph, flexDirection }) => {
    return (
        <>
            <div className="flex  rounded-lg md:justify-evenly md:w-11/12 mx-auto ">
                <div className={` text-whitesmoke md:space-x-8 py-6 px-4 rounded-2xl border-spacing-6 flex   ${flexDirection}`}>
                    <div className="pt-6 md:w-[50%] w-[100%] flex justify-start flex-col">
                        <div className="text-start md:w-[100%] mx-auto space-y-4">
                            <h1 className="font-bold md:text-2xl text-xl">{heading}</h1>
                            <div className="w-16 border"></div>
                            <p className=" flex items-end"> {pragraph}</p>
                            <p className=" flex items-end"> {pragraph}</p>
                        </div>
                        <div className="flex ">
                            <Link className="py-3 mt-5 px-4 rounded-md   bg-bluegreen-800 text-white">View More</Link>
                        </div>
                    </div>
                    <div className="flex md:w-[50%] mx-auto justify-center rounded-xl pb-4  w-full">
                        <img src={img} alt="" className="md:w-[80%] w-[100%] h-[100%]" />
                    </div>
                </div>


            </div>
        </>
    )
}
export default ProductCard;