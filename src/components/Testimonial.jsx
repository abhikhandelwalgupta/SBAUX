/* eslint-disable react/no-unescaped-entities */

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import TestimonialContainer from './coman/home/TestimonialContainer';

// Import Swiper styles





// import required modules




const Testimonial = () => {
    return (
        <>
            <div>

                <h2 className='text-4xl font-bold uppercase text-theamColor'>what client says</h2>
                <div className='flex items-center w-10 border justify-center mx-auto'></div>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#000',
                        '--swiper-pagination-color': '#000',
                        '--swiper-height': '1vh',
                        '--swiper-navigation-size': '32px'
                    }}

                    speed={4000}
                    loop={true}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={32}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    modules={[Parallax, Pagination, Navigation, Autoplay]}
                    className="mySwiper xl:!h-[50vh] xs:!h-[40vh] sm:!h-[60vh] md:!h-[50vh] 2xl:!h-[30vh]"
                >

                    <SwiperSlide>
                        <TestimonialContainer name={"Mafatlal industries ltd"} designation={""} feedback={"SB Auxi  has been an invaluable partner for my leather goods business. Their dyeing auxiliaries have helped me achieve consistent, high-quality results that have improved the appeal"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialContainer name={"Garg acrylics ltd"} designation={""} feedback={"As a sustainability-minded consumer, I appreciate that SB Auxi Chem offers eco-friendly products that meet my ethical standards. Their team is knowledgeable and responsive, and I trust them"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialContainer name={"Kumar cottan mills pvt ltd"} designation={""} feedback={"SB Auxi has been a game-changer for my detergent business. Their pretreatment auxiliaries have improved the efficiency and effectiveness of my operations, resulting in cost savings"} />
                    </SwiperSlide>

                </Swiper>
            </div >
        </>

    )
}

export default Testimonial;