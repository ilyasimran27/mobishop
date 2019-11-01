import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import Header from './component/Navbar/Header.js';
import AddtoCart from './component/Cart/AddtoCart';
import  ByDefault from './component/ByDefault';
import ProductDetails from './component/ProductDetail/ProductDetails.js';
import Model from './component/Model/Model.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './component/ProductList';
import CartFrom from './component/Cart/CartFrom'

class App extends React.Component {
  render(){
  return (
   <React.Fragment>
        
        <Header></Header>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/productdetails" component={ProductDetails}/>
          <Route path="/bydefault" component={ByDefault}/>
          <Route path="/addtocart" component={AddtoCart}/>
          <Route path="/CartFrom" component={CartFrom}/>
        </Switch>
      <Model></Model>

   </React.Fragment>
  );
  }
}

export default App;
