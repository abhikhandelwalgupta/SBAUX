import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollDirection = () => {
    useEffect(() => {
        const scroller = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-section]'),
            smooth: true,
            direction: 'horizontal',

        });

        return () => scroller.destroy();
    }, []);

    return (
        <section id="services" className="relative py-60 bg-green-50 text-white" data-scroll-section>
            <div className="">
                <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-target="#services">
                    <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">Social Media — Email Marketing — Digital Advertising</span>
                </div>
            </div>
            <div className="   mt-40">
                <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-30" data-scroll-target="#services">
                    <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">Web Development - Motion Design - Graphic Design</span>
                </div>
            </div>
        </section>
    );
};

export default ScrollDirection;