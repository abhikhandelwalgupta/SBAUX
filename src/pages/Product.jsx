import HeaderSection from "../components/coman/HeaderSection";
import ProductCard from "../components/coman/product/ProductCard";

import product1 from "../assets/product-1.jpg"

const Product = () => {
    return (
        <>
            <HeaderSection heading={"Our Service"} />
            <div className="w-full">
                <div className="bg-whitesmoke  h-full ">
                    <div className="flex container  md:w-11/12 py-24 mx-auto md:flex-row flex-col md:gap-0 gap-8 items-center  ">
                        <div className="md:w-[100%] w-full px-8  flex flex-col items-center justify-center">
                            <div className=" flex flex-col gap-4  justify-center">
                                <span className="font-bold text-4xl">We Provide Awesome Services</span>
                                <p className="text-justify md:w-[80%]">Today, only if an enterprise has an online presence does it stand a chance to succeed to its optimum potential. Initiated with a mission to transform all the mundane business firms into dynamic and happening enterprises, Daksh Infosoft intends to endow your business with a web presence that would give your enterprise a firm standing in these technologically advanced times. We are a Jaipur based website design and development company with a specialization in website designing, graphics designing, Digital Marketing and Bulk SMS/IVR/Voice Call services along with expertise in building a fully customized application for all types of industry. For more than a decade, with our expertise, we prefer to deliver our products within time offering the best quality and minimum cost to clients. Encouraging direct contact with our creative team we prefer creating a comfort zone for both - the client and the team that wll work for them. Thus delivering precisely what you are looking for!</p>
                            </div>
                        </div>
                        {/* <div className="md:w-[30%] left-0 px-8">
                        <img src={about1} className="md:w-[100%] md:h-[50%]   rounded-md" alt="" />
                    </div> */}
                    </div>
                </div>
                <div className="w-full bg-richblack-800">
                    <div className=" flex flex-col items-center gap-8 mx-auto w-11/12 py-12 justify-center  text-white ">
                        <h1 className="font-bold text-4xl">Our Product</h1>
                    </div>
                </div>
                <div className="flex flex-row gap-8 space-x-12 px-4 ">
                    <ProductCard img={product1} heading={"First product"} pragraph={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quisquam facere alias earum sit, ex enim iusto quis laudantium dolore dolores, debitis illum fuga vitae veritatis. Repellendus, ut iure!"} />
                    {/* <ProductCard img={product1} heading={"First product"} pragraph={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quisquam facere alias earum sit, ex enim iusto quis laudantium dolore dolores, debitis illum fuga vitae veritatis. Repellendus, ut iure!"} />
                            <ProductCard img={product1} heading={"First product"} pragraph={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quisquam facere alias earum sit, ex enim iusto quis laudantium dolore dolores, debitis illum fuga vitae veritatis. Repellendus, ut iure!"} /> */}
                </div>
            </div>
            <div>

            </div>
        </>
    )
}
export default Product;