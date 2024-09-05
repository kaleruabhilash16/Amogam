import React from 'react';
import './Catalog.css'; // Import the CSS for styling
import jew2 from '../jew2.jpg';
import earrings from '../earrings.jpg';
import bracelet from '../bracelet.jpg';
import necklace from '../necklace.jpg';

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
          <img src={necklace} alt="Necklace" />
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