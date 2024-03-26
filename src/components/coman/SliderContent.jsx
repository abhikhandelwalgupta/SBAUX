/* eslint-disable react/prop-types */

const SliderContent = ({ img, heading, content }) => {

    return (
        <>
            <div
                slot="container-start"
                className="parallax-bg h-full"
                style={{
                    'backgroundImage': `  url(${img})`,
                    'backgroundPosition': 'center',
                    'backgroundSize': 'cover',
                    filter: 'blur(5px)'

                }}
                data-swiper-parallax="-23%"
            ></div>
            <div className="absolute  flex items-center justify-center  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   text-left   text-white ">
                <div className="z-10 flex flex-col items-center gap-4" >
                    <h2 className="font-bold lg:text-4xl text-2xl pb-4  text-center uppercase">{heading}</h2>
                    <p className="text-white lg:text-xl text-sm  text-center">{content}</p>
                    <button className="text-black bg-whitesmoke md:py-4 md:px-4 py-2 px-2 rounded-lg">Contact Us</button>
                </div>
            </div>
        </>
    )
}

export default SliderContent