import React from 'react';
import { Navigation, Scrollbar, A11y, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Part = ({ datas }) => {
    return (

        <Swiper
            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
            slidesPerView={5}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
        >

            {datas.map((data, i) => (
                <SwiperSlide key={i}>
                    <img src={data?.icons} alt={data.name} />
                </SwiperSlide>
            ))}

        </Swiper>

    );
};

export default Part;