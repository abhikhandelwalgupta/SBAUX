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
                <div className="flex   xl:w-full py-24 mx-auto xl:flex-row flex-col xl:gap-0 gap-8 items-center  ">
                    <div className="xl:w-[50%] w-full px-8  flex flex-col items-center justify-center">
                        <div className=" flex flex-col gap-4  justify-center">
                            <span className="font-bold xl:text-4xl text-2xl text-center text-theamColor">We Provide Awesome Services</span>
                            <p className="text-justify text-[1.2rem] xl:w-[80%] mx-auto">Being one of the companies in the industry, we are keen on providing truly outstanding services that are customized to suit the chemical sector. We understand the complex and unique problems found within this area therefore, with us, our customers are provided with something more than their expectations. We continuously strive for excellence from ground-breaking research and development to cost-effective manufacturing processes. In every project, our team of experienced professionals ensures that we offer a comprehensive support system and direction to our clients. Whether it is process optimization, product quality improvement or adherence to regulatory requirements, we guarantee targeted outcomes that contribute to client successes in chemicals business. Our commitment to quality and innovation, coupled by our determination never waned thus enabling us adapt to various customer needs and prosper in an ever-changing competitive landscape of this dynamic industry.</p>
                        </div>
                    </div>
                    <div className="xl:w-[50%] left-0 px-8 ">
                        <video width="650" height="500" className="rounded-lg" autoPlay loop muted>
                            <source src={chVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white">
                <div className="">
                    <div className=" flex flex-col items-center  w-11/12 mx-auto gap-2 py-12 justify-center  text-black ">
                        <h1 className="font-bold text-4xl text-theamColor">Our Product</h1>
                        <div className="w-16 border "></div>
                    </div>
                    <div className="flex flex-col w-full  ">
                        <ProductCard img={product1} heading={"Textile Chemical"} flexDirection={"xl:flex-row flex-col"} pragraph1={"Textile chemicals are defined as a wide range of chemical substances and preparations used in the processing, manufacturing, and finishing of textiles. These chemicals play vital parts in diverse stages of textile production such as pretreatment, dyeing, printing and finishing. Textile pre-treatment chemicals are meant to prepare textiles for future processes by removing impurities like oil, wax and dirt while making them more absorbent. Dyeing agents facilitate the fixing of dyes on the textile substrate resulting in colorfastness and uniformity. "}
                            pragraph2={"For effectiveness in transferal designs into fabrics during textile printing process; printing chemicals are utilized. Furthermore, there are those finishing chemicals that improve textile appearance and provide additional properties like wrinkle resistance, water repellency and flame retardancy that enhance their durability and functionality. However, excessive usage of these substances has environmental implications prompting the need for eco-friendly alternatives alongside sustainable practices in the industry."} bgColor="white" />
                        <ProductCard img={product2} heading={"Water Chemical"} flexDirection={"xl:flex-row-reverse flex-col"} pragraph1={" Water (H2O) is a compound composed of two hydrogen atoms and one oxygen atom. It plays an essential role for the existence of living organisms as it is known to be a universal solvent, participate in various chemical reactions and take part in different biological processes. The chemical properties of water are unique due primarily to its polarity which results from hydrogen bonding between molecules."} pragraph2={"This characteristic imparts high surface tension, cohesiveness, adhesiveness as well as moderating capacity to water with regard to temperature alterations. Moreover, water can exist in different physical states; liquid at standard conditions, solid (ice) at low temperatures and gas (water vapor) at high temperatures. Water’s abundance on Earth’s surface coupled with its spectacular characteristics makes it indispensable for life sustenance and preservation of ecosystems."} bgColor="white" />
                        <ProductCard img={produc3} heading={"Paper Chemical"} flexDirection={"xl:flex-row flex-col"} pragraph1={"Paper chemicals are defined as a group of substances used to make, process and treat paper and its products. The chemicals play various roles in papermaking at different stages such as pulp preparation, surface treatment, paper formation, and finishing. As an illustration, the common ones include pulping agents like sodium hydroxide and sodium sulfide which help in decomposition of raw materials into pulp. Moreover, additives for example sizing agents, fillers, and dyes boost the strength of the paper making it brighter and attractive."} pragraph2={""} bgColor="white" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;