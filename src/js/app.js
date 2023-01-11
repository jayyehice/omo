import React, { Component } from "react";
// import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import Login from './component/Login/Login';
// import Products from './component/Products/Products';

// import DataInput from "./DataInput";

class App extends Component {

  state = {
    productList: [],
  }

  componentDidMount = () => {
    // const url = "https://shopping-cart-apis-jay.herokuapp.com/products";
    // fetch(url)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       productList: res.data,
    //     });
    //     // console.log(res.data);
    //   })
  }
  render() {

    return (
      <div>
        <Header />
        <hr/>
        <Home />
      </div>
    );
  }
}

export default App;