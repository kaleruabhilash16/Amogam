import React, { useEffect } from 'react';
import './home.css'; // Existing home styles
import Card from '../components/Card'; // Import the Card component
import welcomeImage from '../assets/images/welcome-image1.jpg'; // Example image
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Catalog from '../components/Catalog';
import eararrival from '../eararrival.jpg';
import p1 from '../p1.jpg';
import p2 from '../p2.jpg';
import p3 from '../p3.jpg';
import thelogo from '../thelogo.png'
import founders from '../founders.jpg';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const products = [
  { id: 1, image: p1, name: 'Dainty necklaces', price: '₹150' },
  { id: 2, image: eararrival, name: 'Product 2', price: '₹200' },
  { id: 3, image: p2, name: 'Ashwam Earrings', price: '₹250' },
  { id: 4, image: welcomeImage, name: 'Product 4', price: '₹280' },
  { id: 5, image: p3, name: 'Ashwa Kamalam Earrings', price: '₹290' },
  {id: 6, image: p3, name: 'Ashwa Kamalam Earrings', price: '₹290' },
  {id: 7, image: p3, name: 'Ashwa Kamalam Earrings', price: '₹290' },
  {id: 8, image: p3, name: 'Ashwa Kamalam Earrings', price: '₹290' },
  {id: 9, image: p3, name: 'Ashwa Kamalam Earrings', price: '₹290' },
  {id: 10, image: p3, name: 'Ashwa Kamalam Earrings', price: '₹290' },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="home-content">
  <div className="home-title">amogham</div>
  <div className="home-subtitle typing">Affordable | Elegant | Curated</div>

  <div className="logo-container" data-aos="fade-up">
    <img src={thelogo} alt="Logo" className="logo-image" data-aos="fade-up"  />
    <img src={founders} alt="Another" className="founders" data-aos="fade-down" />
  </div>

  <div className="card-container-wrapper">
    <span className="New-arrival" data-aos="fade-up">New Arrivals</span>
    <div className="card-container">
      {products.map((product, index) => (
        <div key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
          <Card
            image={product.image}
            name={product.name}
            price={product.price}
          />
        </div>
      ))}
    </div>
  </div>

  <Catalog />
  <Footer />
</div>

  );
};

export default Home;