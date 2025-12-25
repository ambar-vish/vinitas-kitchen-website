import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-image">
                {/* Placeholder for background image - can be replaced with actual image */}
                <div className="hero-image-placeholder"></div>
            </div>
            <div className="hero-overlay">
                <h1 className="hero-title">Vini's Kitchen</h1>
                <p className="hero-subtitle">Fresh homemade Indian cooking made from the heart</p>
            </div>
        </section>
    );
};

export default Hero;
