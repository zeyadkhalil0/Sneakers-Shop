import React from "react";
import Hero1 from "../assets/img01.avif";
import Hero2 from "../assets/img02.avif";
import Hero3 from "../assets/img02.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const Slides = [
    {
  image: Hero1,
  title: "Discover the Latest Shoe Models",
  subtitle: "Comfort and style in every step.",
},
{
  image: Hero2,
  title: "Shop Now at Great Prices",
  subtitle: "Exclusive discounts for a limited time.",
},
{
  image: Hero1,
  title: "Elegance Starts from Your Feet",
  subtitle: "Your choices define you.",
},

  ]
  return (
    <section className="w-full md:h-[90vh] md:py-0 py-20 relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="h-full"
      >
        {Slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full md:h-84 h-64 object-contain"
              />
              <div className="flex flex-col text-center items-center  font-semibold ">
                <h1 className="text-5xl pb-4 text-gray-800 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl  mb-4 text-gray-500">{slide.subtitle}</p>
                <a
                  href="#"
                  className="text-white font-semibold bg-indigo-600 shadow-md py-3 px-8 rounded-full hover:bg-gray-200 transition"
                >
                  Shop Now
                </a>
              </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Hero;
