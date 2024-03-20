// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

//import image1 from "../../assets/img-1.jpg"
// import mobile_image from "../../assets/img-2.jpg"

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
                    <div
                        slot="container-start"
                        className="parallax-bg h-full"
                        style={{
                            'backgroundImage':
                                'url(src/assets/img-1.jpg)',
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <div className="absolute  md:left-[20%] left-10 w-11/12  md:w-[30%]  text-left  mx-auto my-auto lg:top-[30%] top-[20%] text-white ">
                        <div className="z-10">
                            <h2 className="font-bold lg:text-4xl text-2xl pb-4 fade">Heading</h2>
                            <p className="text-white lg:text-xl text-sm fade-parp">Lorem ipsum dolor, amet consectetur adipisicing elit. Ea ut tenetur eveniet deleniti nesciunt, accusantium commodi ratione. Assumenda amet temporibus error officia, optio, tempore voluptates fugiat doloribus id, laudantium labore!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 2
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 3
                    </div>
                    {({ isActive }) => console.log("test", isActive)}
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default HeroSection;