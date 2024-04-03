/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { fadeIn } from "../../variants";
const SliderContent = ({ img, heading, content }) => {

    return (
        <>
            <div
                slot="container-start"
                className="parallax-bg h-full"
                style={{
                    'backgroundImage': `  url(${img})`,
                    'backgroundColor': 'black',
                    'backgroundPosition': 'center',
                    'backgroundSize': 'cover',


                }}
                data-swiper-parallax="-23%"
            ></div>
            <div className="absolute w-[50%] flex items-center justify-center  top-[50%] left-[20%] translate-x-[-20%] translate-y-[-50%] font-inter font-semibold   text-left   text-white ">
                <motion.div
                    variants={fadeIn("down", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.14 }} className="z-10 flex flex-col items-start gap-4" >
                    <h2 className="font-bold lg:text-4xl text-2xl pb-4  text-center uppercase">{heading}</h2>
                    <p className="text- text-justify lg:text-xl text-sm w-[60%] ">{content}</p>
                    <button className="text-white bg-black xl:py-4 xl:px-4 py-2 px-2 rounded-lg">Contact Us</button>
                </motion.div>
            </div>
        </>
    )
}

export default SliderContent