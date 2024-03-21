/* eslint-disable react/prop-types */

const SliderContent = ({ img ,heading, content }) => {
    
    return (
        <>
            <div
                slot="container-start"
                className="parallax-bg h-full"
                style={{
                    'backgroundImage':`url(${img})`,
                    'backgroundPosition' :'center',
                    'backgroundSize' :'cover',
                    
                }}
                data-swiper-parallax="-23%"
            ></div>
            <div className="absolute  flex items-center justify-center  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   text-left   text-white ">
                <div className="z-10">
                    <h2 className="font-bold lg:text-4xl text-2xl pb-4 fade text-center">{heading}</h2>
                    <p className="text-white lg:text-xl text-sm fade-parp text-center">{content}</p>
                </div>
            </div>
        </>
    )
}

export default SliderContent