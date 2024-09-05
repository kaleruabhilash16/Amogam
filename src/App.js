import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import AboutUS from "./components/AboutUs"
import Catalog from "./components/Catalog"
import Navbar from "./components/navbar";
import Pages from "./components/Pages";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AboutUs" element={<AboutUS />} />
          <Route path="Catalog" element={<Catalog />} />
          <Route path="Pages" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;