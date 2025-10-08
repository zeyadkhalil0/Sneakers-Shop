import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Products from "./Components/Products";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
            </>
          }
        />

        {/* Products */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
