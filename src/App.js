import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import AboutUS from "./components/AboutUs"
import Catalog from "./components/Catalog"
import Navbar from "./components/navbar";
import Pages from "./components/Pages";
import './App.css';
import Cart from "./components/Cart";
import Necklaces from "../src/components/Necklaces";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Abt" element={<AboutUS />} />
          <Route path="Catalog" element={<Catalog />} />
          <Route path="Pages" element={<Pages />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;