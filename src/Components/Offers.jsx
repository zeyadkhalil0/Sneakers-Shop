import React, { useEffect, useState } from "react";
import {  FaShoppingCart, FaHeart } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
}, []);

const [offers,setOffers] = useState([])
  useEffect(() => {
      const fetchOffers = async () => {
        try {
          const response = await fetch("https://sneaks-api-xobu.vercel.app/search/:shoe");
          if (!response.ok) throw new Error("Failed to fetch products");
  
          const data = await response.json();
         setOffers (data);
        } catch (error) {
          console.error("Error fetching products:", error);
      }
    };
      
      fetchOffers();
    }, []);


  return (
    <>
    <section id="offers" className="py-20 px-8 bg-gray-100 ">
      <div
        className="text-center mb-10"
        data-aos="fade-down"
        >
        <h1 className="text-5xl font-semibold text-gray-800 drop-shadow-lg">
          Special Offers
        </h1>
        <p className="text-gray-500 text-lg mt-2">
          Limited-time discounts on top sneaker brands!
        </p>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        data-aos="fade-up"
        >
        {offers.slice(22,32).map((offer) => (
            <div className="bg-white rounded-lg p-4 py-8 shadow-lg flex flex-col" data-aos="fade-up">
                       {/* Brand And QuickView Btn */}
                       <div className="flex items-center justify-between">
                       <span className="text-lg font-bold drop-shadow-lg">{offer.brand}</span>
                       <button className="bg-blue-500 drop-shadow-lg font-semibold text-white p-2 rounded-2xl cursor-pointer hover:bg-blue-600">Quick View</button>
                       </div>
                       {/* img */}
                       <div className="w-64  m-auto object-cover">
                           <img src={offer.thumbnail} alt={offer.shoeName} loading="lazy" />
                       </div>
                       {/* Name And Price */}
                       <div className="flex flex-col items-center justify-between py-4" >
                           <h1 className=" text-xl text-gray-800 font-medium drop-shadow-2xl"> {offer.make} </h1>
                       </div>
                           <div className="flex items-center justify-center space-x-8">
                           <p className="text-gray-500 font-semibold text-lg line-through" > {offer.retailPrice ? `$${offer.retailPrice + 100}` : "Price not available"} </p>
                           <p className="text-red-500 font-semibold text-lg" > {offer.retailPrice ? `$${offer.retailPrice}` : "Price not available"} </p>
                           </div>
                       {/* icons */}
                       <div className="flex items-center justify-between cursor-pointer">
                       <FaHeart className="text-2xl text-red-500  hover:text-red-600" />
                       <FaShoppingCart className="text-gray-700 cursor-pointer text-2xl hover:text-indigo-500 transition float-right" />
                       </div>
           
                   </div>
        ))}
      </div>
    </section>
        </>
  );
};

export default Offers;
