import React from 'react';
import './contact.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className='image'>
        <h2 className='title-block'>CRAFT BY SAASH</h2>
      </header>
      <div className="contact-section">
        <h2 className="section-title">Reach Out</h2><br></br>
        <h2>Craft By Saash</h2>
        <p className="contact-info">
          <strong>Location:</strong> Main office, Craft By Saash, Chennai-600028.
        </p>
        <p className="contact-info">
          <strong>Email:</strong> craftbyshaash@gmail.com
        </p>
        <p className="contact-info">
          <strong>Phone:</strong> +123-456-7890
        </p>
      </div>
      <footer className='image'>
      <img
          src='https://img.freepik.com/premium-photo/mockup-design-perfume-bottle-with-plant-branch-empty-blank-copy-space-wallpaper-bottle-essential-oil-with-herbs-elegant-minimalistic-podium-scene-product-presentation_146482-9328.jpg?size=626&ext=jpg&ga=GA1.1.1677326305.1675962342&semt=ais'
          alt='Perfume Bottle with Flowers'
        />

      </footer>
    </div>
  );
};

export default Home;