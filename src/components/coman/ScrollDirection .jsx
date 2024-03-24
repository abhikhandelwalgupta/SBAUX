import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import about1 from "../../assets/about-1.jpg"
const ScrollDirection = () => {
    useEffect(() => {
        const scroller = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-section]'),
            smooth: true,
            direction: 'horizontal',
            mobile: {
                getDirection: true,
                direction: 'horizontal',
                smooth: true
            },
            tablet: {
                getDirection: true,
                direction: 'horizontal',
                smooth: true
            },


        });

        return () => scroller.destroy();
    }, []);

    return (
        <section id="services" className="relative py-20  md:overflow-x-visible text-white" data-scroll-section>
            <div className='grid  auto-cols-auto grid-cols-repeat grid-flow-col gap-4 ' data-scroll-target="#services">
                <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" />
                <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" />
                <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" />
                <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" />
                <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" />
                <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" />
                <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" />
                <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" />
            </div>


            <div className='grid mt-20 auto-cols-auto grid-cols-repeat grid-flow-col gap-4 ' data-scroll-target="#services">
                <div className='flex justify-center items-center'>
                    <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30" />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30" />
                </div><div className='flex justify-center items-center'>
                    <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30" />
                </div><div className='flex justify-center items-center'>
                    <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30" />
                </div><div className='flex justify-center items-center'>
                    <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30" />
                </div><div className='flex justify-center items-center'>
                    <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30" />
                </div><div className='flex justify-center items-center'>
                    <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30" />
                </div><div className='flex justify-center items-center'>
                    <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30" />
                </div><div className='flex justify-center items-center'>
                    <img src={about1} alt="" className="image-style" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30" />
                </div>
            </div>
        </section>
    );
};

export default ScrollDirection;