import React from 'react';
import './Catalog.css'; // Import the CSS for styling
import jew2 from '../assets/images/jew2.jpg';
import earrings from '../assets/images/earrings.jpg';
import bracelet from '../assets/images/bracelet.jpg';
import necklace from '../assets/images/necklace.jpg';
import { Link } from 'react-router-dom';

const Catalog = () => {
  return (
    <div className="catalog">
      <h1 data-aos="fade-up">Catalog</h1> {/* Fade-up effect for the catalog title */}
      <div className="catalog-grid">
        <div className="category" data-aos="fade-up" data-aos-delay="100">
          <h2>Rings</h2>
          <img src={jew2} alt="Ring" />
        </div>
        <div className="category" data-aos="fade-up" data-aos-delay="200">
          <img src={earrings} alt="Earrings" />
          <h2>Earrings</h2>
        </div>
        <div className="category" data-aos="fade-up" data-aos-delay="300">
          <h2>Necklace</h2>
          <Link to="/necklaces">
          <img src={necklace} alt="Necklace" />
          </Link>
        </div>
        <div className="category" data-aos="fade-up" data-aos-delay="400">
          <img src={bracelet} alt="Bracelet" />
          <h2>Bracelet</h2>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
