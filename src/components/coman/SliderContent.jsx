/* eslint-disable react/prop-types */

const SliderContent = ({ img ,heading, content }) => {
    console.log(img);
    return (
        <>
            <div
                slot="container-start"
                className="parallax-bg h-full"
                style={{
                    'backgroundImage':
                        `url(${img})`,
                }}
                data-swiper-parallax="-23%"
            ></div>
            <div className="absolute  md:left-[20%] left-10 w-11/12  md:w-[30%]  text-left  mx-auto my-auto lg:top-[30%] top-[20%] text-white ">
                <div className="z-10">
                    <h2 className="font-bold lg:text-4xl text-2xl pb-4 fade">{heading}</h2>
                    <p className="text-white lg:text-xl text-sm fade-parp">{content}</p>
                </div>
            </div>
        </>
    )
}

export default SliderContent