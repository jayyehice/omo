import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';


class App extends Component {

  state = {
    productList: [],
  }

  componentDidMount = () => { }

  render() {

    return (
      <div>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/about/" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;