import { Link } from "react-router-dom"
import { links } from "../../links"

const Footer = () => {
    return (
        <>
            <div className="bg-jetcolor text-richblack-400">
                <div className=" md:w-4/6 w-full md:mx-auto max-w-maxContent flex text-white leading-4  py-14 items-center gap-3 mx-auto justify-between font-inter">
                    <div className=" flex  text-white  flex-wrap w-11/12 max-w-maxContent mx-auto justify-between p-3 md:flex-row flex-col md:space-y-0 space-y-12">
                        <div className="flex md:flex-row flex-row flex-wrap md:w-[50%]  gap-6">
                            <div className="md:w-[50%] w-[100%] ">
                                <h2 className="font-bold text-2xl">SB AUXI CHEM</h2>
                                <p className="mt-4 leading-6 text-whitesmoke">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus voluptatem ab, consectetur animi nesciunt repudiandae esse maiores rem eaque atque, omnis quo cum voluptate incidunt debitis dicta aspernatur earum?
                                </p>
                            </div>
                            <div className="flex flex-col md:space-y-12 space-y-4">
                                <h2> Quick Links</h2>
                                <ul className="gap-5 p-1.5 flex flex-col  items-start justify-between   ">
                                    {
                                        links.map((link, index) => {
                                            return (
                                                <li key={index} className="uppercase">
                                                    <Link to={link.path} >{link.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-row  justify-around md:w-[50%]">
                            <div>
                                <h2> Business Segments</h2>
                            </div>
                            <div>
                                <h2>Meet Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer