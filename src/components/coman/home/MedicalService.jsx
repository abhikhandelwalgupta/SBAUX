/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const MedicalService = ({ heading, pragraph, image, dataAos }) => {
    return (
        <div className="bg-white rounded-lg shadow-md  xl:w-[25.33%] md:[33%] h-[50%]  " data-aos={dataAos}>

            <div className="h-44 w-full  relative">
                <img src={image} alt="water logo" className=" h-[12rem] w-full absolute left-0  inline-block rounded-lg shadow-md" />
            </div>
            <div className="py-4 mt-8">
                <h2 className="xl:text-2xl text-xl font-bold mb-4">{heading}</h2>
                <p className="text-gray-700 pb-8 px-2">
                    {pragraph}
                </p>
                <Link className="bg-theamColor hover:bg-blue-700 text-white font-bold py-2  px-4 rounded mt-">
                    View More
                </Link></div>
        </div>
    )
}

export default MedicalService;