import React from 'react';
import './App.css';
import Navbar from './Component/Header/Navbar';
import Home from './Component/Pages/Home';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
