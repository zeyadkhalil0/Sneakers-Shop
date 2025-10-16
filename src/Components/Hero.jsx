import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero1 from "../assets/Hero1.avif";
import Hero2 from "../assets/Hero2.avif";
import Hero3 from "../assets/Hero3.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Hero = ({loading}) => {

  
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        Aos.refreshHard();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loading]);
  
  useEffect(() => {
  Aos.init({ duration: 2000, once: true });
}, []);
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
      image: Hero3,
      title: "Elegance Starts from Your Feet",
      subtitle: "Your choices define you.",
    },
  ];
  return (
    <section className="w-full md:h-[90vh] md:py-0 py-20 relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="md:h-[90vh] h-[70vh]"
      >
        {Slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full md:h-84 h-64 object-contain "
                loading="lazy"
                data-aos="fade-down"  
                
              />
              <div className="flex flex-col text-center items-center  font-semibold ">
                <h1 className="md:text-5xl text-4xl  pb-4 text-gray-800 drop-shadow-lg" data-aos="fade-right"  >
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl  mb-4 text-gray-500" data-aos="fade-left"  >
                  {slide.subtitle}
                </p>
                <a
                  href="#popular"
                  className="text-white font-semibold bg-indigo-600 shadow-md py-3 px-8 rounded-full hover:bg-indigo-800 transition"
               data-aos="fade-up"   >
                  Shop Now
                </a>
              </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default React.memo(Hero);
