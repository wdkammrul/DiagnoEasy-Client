import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const PersonalizedSlider = () => {

    const [tests, setTests] = useState([])
    useEffect(() => {
        fetch('https://diagno-easy-server.vercel.app/tests')
            .then(res => res.json())
            .then(data => setTests(data))
    }, [])


    return (
        <section>

            <SectionTitle
                heading={'upcoming tests'}
            ></SectionTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}
                className="mySwiper my-24"
            >
               {
                    tests.map(test => <SwiperSlide key={test?._id}>
                        <img className="w-[530px] h-[220px] rounded-tl-3xl rounded-br-3xl" src={test?.image} alt="" />
                    </SwiperSlide>)
               }
            </Swiper>
        </section>
    );
};

export default PersonalizedSlider;