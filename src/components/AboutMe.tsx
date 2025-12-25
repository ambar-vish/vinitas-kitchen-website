import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        <div className="chef-image-placeholder">
                            {/* Placeholder for chef image */}
                            <span>Chef Photo</span>
                        </div>
                    </div>
                    <div className="about-text">
                        <p>
                            Hi, I'm Vinita, and I'd like to welcome you to my kitchen! I'm a passionate home cook who has been cooking for my family for
                            30 years. I come from New Delhi, India, where my love for cooking first started.
                        </p>
                        <p>
                            All my recipes are inspired by my family and
                            have been passed down through generations. I learnt cooking from my mother, who taught me the importance of fresh ingredients
                            and keeping your kitchen neat and tidy. She believed that the kitchen is a temple, something that I also hold dear.
                        </p>
                        <p>
                            I started this business because I wanted to share my love for cooking and food with others. I believe that home cooking is healthier and
                            more fresh than eating out, and I want to help busy families enjoy delicious, home cooked meals for a price they can afford. I aim to provide
                            authentic Indian cusine and introduce others to new dishes and Indian cooking they have never tried before.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
