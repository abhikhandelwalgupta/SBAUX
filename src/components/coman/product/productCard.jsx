/* eslint-disable react/prop-types */

const ProductCard = ({ img, heading, pragraph }) => {
    return (
        <>
            <div className="flex bg-whitesmoke rounded-lg shadow-xl md:justify-around  ">
                <div className=" text-richblack-700  py-6 px-4 rounded-2xl border-spacing-6 flex flex-row w-full ">
                    <div className="flex justify-center rounded-xl pb-4 w-[50%] ">
                        <img src={img} alt="" className="rounded-xl w-full" />
                    </div>
                    <div className="pt-6 w-[50%]">
                        <div className="text-center space-y-4">
                            <h1 className="font-bold md:text-2xl text-xl">{heading}</h1>
                            <p> {pragraph}</p>
                        </div>
                        <div className="flex justify-center">
                            <button className="py-3 mt-5 px-4 rounded-md   bg-bluegreen-800 text-white">Read More</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
export default ProductCard;