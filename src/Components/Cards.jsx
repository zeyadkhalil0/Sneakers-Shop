import {React, useEffect} from "react";
import {  FaShoppingCart, FaHeart } from "react-icons/fa";
import Loader from './Loader'
import Aos from "aos";
import "aos/dist/aos.css";

const Cards = ({ products, loading }) => {
    useEffect(() => {
      Aos.init({ duration: 1000, once: true });
  }, []);
  if (loading) {
    return (
      <div className="absolute inset-0 z-50 overflow-hidden flex items-center justify-center h-screen bg-gray-100">
        <Loader />
      </div>
    );
  }
  return (
      <>
      <div id="popular" className="text-center my-20">
        <h1 className="text-5xl font-semibold text-gray-800 drop-shadow-lg">Common Items</h1>
      </div>
    <section  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 mb-20">
      {products.slice(0,30).map((item) => (
        <>
        <div className="bg-white rounded-lg p-4 py-8 shadow-lg flex flex-col" data-aos="fade-up">
            {/* Brand And QuickView Btn */}
            <div className="flex items-center justify-between">
            <span className="text-lg font-bold drop-shadow-lg">{item.brand}</span>
            <button className="bg-blue-500 drop-shadow-lg font-semibold text-white p-2 rounded-2xl cursor-pointer hover:bg-blue-600">Quick View</button>
            </div>
            {/* img */}
            <div className="w-64  m-auto">
                <img src={item.thumbnail} alt={item.shoeName} />
            </div>
            {/* Name And Price */}
            <div className="flex flex-col items-center justify-between py-6" >
                <h1 className=" text-xl text-gray-800 font-medium drop-shadow-2xl"> {item.make} </h1>
                <p className="text-red-500 font-semibold text-lg" > {item.retailPrice ? `$${item.retailPrice}` : "Price not available"} </p>
            </div>
            {/* icons */}
            <div className="flex items-center justify-between cursor-pointer">
            <FaHeart className="text-2xl text-red-500  hover:text-red-600" />
            <FaShoppingCart className="text-gray-700 cursor-pointer text-2xl hover:text-indigo-500 transition float-right" />
            </div>

        </div>
        </>
      ))}
    </section>

        </>
  );
};

export default Cards;
