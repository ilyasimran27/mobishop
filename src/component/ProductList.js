import React, { Component } from 'react';
import Product from './Products/Product.js';
import Title from './Heading/Title.js';
import Slider from './Slider.js';
import Footer from '../component/Footer/Footer.js';
import { PConsumer } from '../context.js';
class ProductList extends Component {

  render() {

    return (
      <div>
        <Slider></Slider>
        <div className="container">
          <div className="heading col-12">
            <Title name="available" title="Products"></Title>

          </div>
          <div className="row">
            <PConsumer>
              {(value) => {
                return value.productsItems.map(product => {
                  return (<Product key={product.id} product={product}></Product>)
                })
              }}
            </PConsumer>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ProductList;