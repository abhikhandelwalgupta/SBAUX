import HeaderSection from "../components/coman/HeaderSection";
import ProductCard from "../components/coman/product/ProductCard";

import product1 from "../assets/textileChemicsl.jpg"
import product2 from "../assets/water-Photoroom.jpg"
import produc3 from "../assets/paperchem.jpg"
import chVideo from "../assets/ch.mp4"



const Product = () => {
    return (
        <>
            <HeaderSection heading={"Bussines Segments"} />

            <div className="bg-whitesmoke w-full h-full ">
                <div className="flex   xl:w-11/12 py-24 mx-auto xl:flex-row flex-col xl:gap-0 gap-8 items-center  ">
                    <div className="xl:w-[50%] w-full px-8  flex flex-col items-center justify-center">
                        <div className=" flex flex-col gap-4  justify-center">
                            <span className="font-bold xl:text-4xl text-2xl text-center">We Provide Awesome Services</span>
                            <p className="text-justify xl:w-[80%] mx-auto">Today, only if an enterprise has an online presence does it stand a chance to succeed to its optimum potential. Initiated with a mission to transform all the mundane business firms into dynamic and happening enterprises, Daksh Infosoft intends to endow your business with a web presence that would give your enterprise a firm standing in these technologically advanced times. We are a Jaipur based website design and development company with a specialization in website designing, graphics designing, Digital Marketing and Bulk SMS/IVR/Voice Call services along with expertise in building a fully customized application for all types of industry. For more than a decade, with our expertise, we prefer to deliver our products within time offering the best quality and minimum cost to clients. Encouraging direct contact with our creative team we prefer creating a comfort zone for both - the client and the team that wll work for them. Thus delivering precisely what you are looking for!</p>
                        </div>
                    </div>
                    <div className="xl:w-[50%] left-0 px-8">
                        <video width="700" height="500" autoPlay loop muted>
                            <source src={chVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white">
                <div className="">
                    <div className=" flex flex-col items-center  w-11/12 mx-auto gap-8 py-12 justify-center  text-black ">
                        <h1 className="font-bold text-4xl">Our Product</h1>
                    </div>
                    <div className="flex flex-col w-full  ">
                        <ProductCard img={product1} heading={"Textile Chemical"} flexDirection={"xl:flex-row flex-col"} pragraph={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quisquam facere alias earum sit, ex enim iusto quis laudantium dolore dolores, debitis illum fuga vitae veritatis. Repellendus, ut iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quisquam facere alias earum sit, ex enim iusto quis laudantium dolore dolores, debitis illum fuga vitae veritatis. Repellendus, ut iure!"} bgColor="white" />
                        <ProductCard img={product2} heading={"Water Chemical"} flexDirection={"xl:flex-row-reverse flex-col"} pragraph={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quisquam facere alias earum sit, ex enim iusto quis laudantium dolore dolores, debitis illum fuga vitae veritatis. Repellendus, ut iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quisquam facere alias earum sit, ex enim iusto quis laudantium dolore dolores, debitis illum fuga vitae veritatis. Repellendus, ut iure!"} bgColor="theamColor" />
                        <ProductCard img={produc3} heading={"Paper Chemical"} flexDirection={"xl:flex-row flex-col"} pragraph={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quisquam facere alias earum sit, ex enim iusto quis laudantium dolore dolores, debitis illum fuga vitae veritatis. Repellendus, ut iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam quisquam facere alias earum sit, ex enim iusto quis laudantium dolore dolores, debitis illum fuga vitae veritatis. Repellendus, ut iure!"} bgColor="white" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;