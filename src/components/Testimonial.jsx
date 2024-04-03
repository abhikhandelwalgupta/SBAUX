/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import TestimonialContainer from './coman/home/TestimonialContainer';


const Testimonial = () => {
    return (
        <>
            <div>

                <h2 className='text-2xl xl:text-4xl font-bold uppercase'>what client says</h2>
                <div className='flex items-center w-10 border justify-center mx-auto'></div>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#000',
                        '--swiper-pagination-color': '#000',
                        '--swiper-height': '1vh',
                        '--swiper-navigation-size': '32px'
                    }}

                    speed={600}
                    loop={true}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={32}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Parallax, Pagination, Navigation, Autoplay]}
                    className="mySwiper xl:!h-[50vh] xs:!h-[40vh] sm:!h-[60vh] md:!h-[50vh] 2xl:!h-[30vh]"
                >

                    <SwiperSlide>
                        <TestimonialContainer name={"Micheal Gough"} designation={"CEO"} feedback={"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialContainer name={"Micheal Gough"} designation={"CEO"} feedback={"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialContainer name={"Micheal Gough"} designation={"CEO"} feedback={"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."} />
                    </SwiperSlide>

                </Swiper>
            </div >
        </>

    )
}

export default Testimonial;