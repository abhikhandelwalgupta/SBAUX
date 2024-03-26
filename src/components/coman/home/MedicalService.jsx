/* eslint-disable react/prop-types */
import { HiAcademicCap } from "react-icons/hi";
const MedicalService = ({ heading, pragraph }) => {
    return (
        <div className="bg-white rounded-lg shadow-md xl:p-8 py-8 xl:py-8 xl:w-80">
            <HiAcademicCap className="h-20 w-20 inline-block mr-2" />
            {/* <img src={image} alt="water logo" className="h-20 w-20 inline-block mr-2" /> */}
            <h2 className="xl:text-2xl text-xl font-bold mb-4">{heading}</h2>
            <p className="text-gray-700">
                {pragraph}
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Learn More
            </button>
        </div>
    )
}

export default MedicalService;