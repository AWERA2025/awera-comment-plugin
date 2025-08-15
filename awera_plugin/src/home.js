import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import './home.css';
import Navbar from './navbar';
import Plugin from './plugin';  

function Home() {
  
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar />
      <header className="App-header" id="home">
        <h1>Welcome to the Awera Plugin</h1>
        <p>This is a simple React application for the Awera comment plugin.</p>
        <button href="#features" className="cta-button" onClick={() => navigate('/plugin')}>
          Explore
        </button>
      </header>
      <main>
        <section id="features">
          <h2>Features</h2>
          <p>Here you can manage your comments and interact with the plugin features.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: support@aweraplugin.com</p>
          <p>Phone: +233 555 123 456</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Awera Plugin. All rights reserved.</p>
      </footer>

      <Routes>
        <Route path="/plugin" element={<Plugin />} />
      </Routes>
    </div>
  );
}

export default Home;
