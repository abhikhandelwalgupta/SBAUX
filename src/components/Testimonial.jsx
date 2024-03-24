/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';


const Testimonial = () => {
    return (
        <>
            <h2 className='text-2xl md:text-4xl font-bold uppercase'>what client says</h2>
            <div className='flex items-center w-10 border justify-center mx-auto'></div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#000',
                    '--swiper-pagination-color': '#000',
                    '--swiper-height': '1vh'
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
                className="mySwiper !h-[50vh]"
            >

                <SwiperSlide>
                    <figure className="max-w-screen-md shadow-2xl bg-black rounded-md p-4 mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p className="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="max-w-screen-md bg-black shadow-2xl rounded-md p-4 mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p className="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>

            </Swiper>

        </>

    )
}

export default Testimonial;