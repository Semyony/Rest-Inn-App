import SwiperCore, { Virtual, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "./Carousel.css";

const cld = new cloudinary.Cloudinary({
  cloud_name: "eitanpeer",
});

const imagesSrcs = [
  "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_19/1562894/future-of-travel-today-main.png",
  "https://blog.spendesk.com/hs-fs/hubfs/business-travel-statistics-1.jpg?width=896&name=business-travel-statistics-1.jpg",
];

const Carousel = () => {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 10000 }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imagesSrcs.map((imgsrc) => (
        <div className="swiper">
            <SwiperSlide>
                <img
                    alt="img"
                    style={{
                        width: "100%",
                    }}
                    src={imgsrc}
                    className="swiper-lazy image"
                />
                
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

export default Carousel;
