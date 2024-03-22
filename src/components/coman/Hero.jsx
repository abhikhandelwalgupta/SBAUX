// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import SliderContent from './SliderContent';

import image1 from "../../assets/maxresdefault.jpg"
import mobile_image from "../../assets/img-2.jpg"
import img3 from "../../assets/img-3.jpeg"


const HeroSection = () => {


    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                loop={true}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <SliderContent img={image1} heading={"heading"} content={"Lorem ipsum dolor, amet consectetur adipisicing elit. Ea ut tenetur eveniet deleniti nesciunt, accusantium commodi ratione. Assumenda amet temporibus error officia, optio, tempore voluptates fugiat doloribus id, laudantium labore!"} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderContent img={mobile_image} heading={"heading"} content={"Lorem ipsum dolor, amet consectetur adipisicing elit. Ea ut tenetur eveniet deleniti nesciunt, accusantium commodi ratione. Assumenda amet temporibus error officia, optio, tempore voluptates fugiat doloribus id, laudantium labore!"} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderContent img={img3} heading={"heading"} content={"Lorem ipsum dolor, amet consectetur adipisicing elit. Ea ut tenetur eveniet deleniti nesciunt, accusantium commodi ratione. Assumenda amet temporibus error officia, optio, tempore voluptates fugiat doloribus id, laudantium labore!"} />
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default HeroSection;