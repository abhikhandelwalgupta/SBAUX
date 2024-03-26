import { Link } from "react-router-dom"
import { links } from "../../links"

const Footer = () => {
    return (
        <>
            <div className="bg-jetcolor text-richblack-800">
                <div className=" md:w-4/6 w-full md:mx-auto max-w-maxContent flex text-white leading-4  py-14 items-center gap-3 mx-auto justify-between font-inter">
                    <div className=" flex  text-white  flex-wrap w-11/12 max-w-maxContent mx-auto justify-between p-3 md:flex-row flex-col md:space-y-0 space-y-12">
                        <div className="flex md:flex-row flex-col  md:w-[100%]  gap-6">
                            <div className="md:w-[50%]  w-[100%] ">
                                <h2 className="font-bold text-2xl">SB AUXI CHEM</h2>
                                <p className="mt-4 leading-6 text-whitesmoke">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus voluptatem ab, consectetur animi nesciunt repudiandae esse maiores rem eaque atque, omnis quo cum voluptate incidunt debitis dicta aspernatur earum?
                                </p>
                            </div>
                            <div className="flex flex-row  justify-around md:md:w-[70%] w-full">
                                <div className="flex flex-col md:space-y-6 space-y-4">
                                    <h2> Quick Links</h2>
                                    <ul className="gap-5  flex flex-col  items-start justify-between   ">
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
                                <div className="flex flex-col md:space-y-6 space-y-4">
                                    <h2> Business Segments</h2>
                                    <ul>
                                        <li className="uppercase">
                                            <Link to={"#"} >{"Paper Cheimcal"}</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col md:space-y-6 space-y-4">
                                    <h2>Meet Us</h2>
                                    <p>38, Arbuda Industrial Estate-1, Narol-Isanpur Road, Narol, Ahmedabad-382405</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer