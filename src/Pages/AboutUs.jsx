import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import aboutImg from "../assets/Hero1.avif"; 

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="About" className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-6">
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-gray-800 drop-shadow-lg">
          About <span className="text-indigo-600">MyShoes</span>
        </h1>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          We're passionate about sneakers, style, and comfort — and bringing you the best of all worlds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Founded with a love for sneakers and street culture, MyShoes brings together the latest styles
            and exclusive releases from around the world. Whether you're an athlete, a sneakerhead, or
            just love comfort and fashion — we’ve got something special for you.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is simple: to provide high-quality shoes that make every step feel confident.
            From limited editions to timeless classics, our curated collection ensures you always stay ahead of the trend.
          </p>
          <a
            href="/products"
            className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-indigo-800 transition"
          >
            Explore Our Collection
          </a>
        </div>

        <div data-aos="fade-left" className="flex justify-center">
          <img
            src={aboutImg}
            alt="About MyShoes"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-20 text-center max-w-4xl" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Quality</h3>
            <p className="text-gray-600">
              We handpick every pair to ensure top quality, durability, and comfort.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Innovation</h3>
            <p className="text-gray-600">
              Staying ahead with the latest sneaker tech and fashion trends worldwide.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Community</h3>
            <p className="text-gray-600">
              We believe in building a community that shares a passion for sneakers and self-expression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);