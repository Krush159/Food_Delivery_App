import React from 'react';
import './App.css';
// import Home from './Component/Pages/Home';
import Footer from './Component/Footer/Footer';
import NavbarHeader from './Component/Header/Navbar';
import Routing from './Routing/Routes';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Routing/>
      <Footer />
    </div>
  );
}

export default App;
