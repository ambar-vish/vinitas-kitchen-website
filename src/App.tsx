import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Menu from './components/Menu';
import WhatsAppSection from './components/WhatsAppSection';
import Reviews from './components/Reviews';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <AboutMe />
            <Menu />
            <WhatsAppSection />
            <Reviews />
            <footer className="footer">
                <p>&copy; 2025 Vini's Kitchen. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
