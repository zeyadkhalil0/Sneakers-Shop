import {React, useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Products from "./Pages/Products";
import Offers from "./Components/Offers"
import Footer from './Components/Footer';
import AboutUs from './Pages/AboutUs';
import Loader from './Components/Loader'


function App() {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://sneaks-api-xobu.vercel.app/search/home");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  return (
    <Router>
      <Navbar />
        {loading && (
          <div className="absolute inset-0 z-50 overflow-hidden flex items-center justify-center h-screen bg-gray-100">
            <Loader />
          </div>
        )}
      <Routes>
        {/* Home */}
        <Route path="/" element={
            <>
              <Hero loading={loading} />
              <Cards products={products} loading={loading} />
              <Offers/>
            </>
          }
          />
        {/*Products Page*/}
        <Route path="/products" element={<Products />}  />
        <Route path="/AboutUs" element={<AboutUs />}  />
      </Routes>
      <Footer/>
    </Router>
  );
} 


export default App;
