import React, { Component } from 'react';
import { PConsumer } from '../../context.js';
import { Link } from 'react-router-dom';
import './Model.css';


export default class Model extends Component {
    render() {
        return (
            <PConsumer>
                {
                    (value) => {
                        const { modelOpen, closeModel } = value;
                        const { img, title, price, inCart, id, company, info } = value.modelProduct;
                        if (!modelOpen) {
                            return null;
                        }
                        else {
                            return (
                                <div className="box-model">
                                    <div className="container">
                                        <div className="row ">
                                            <div className=" col-md-6 col-lg-4 col-8 p-5" id="model">
                                                <h2 className=" title-model">Added Item to the cart</h2>
                                                <img src={img} alt="model-image" className="img-fluid"></img>
                                                <h4 className="model-title">{title}</h4>
                                                <h5 >Prcice:  <span className="price-model-rs">Rs{price}</span></h5>
                                                <div className="buttons">
                                                    <Link to="/">
                                                        <button type="button" className="btn btn-products" onClick={() => {
                                                            value.closeModel();
                                                        }}>Continue Shoping</button>
                                                    </Link>
                                                    <Link to="/addtocart">
                                                        <button type="button" className="btn btn-cart" onClick={() => {
                                                            value.closeModel();
                                                        }}
                                                        >Go to the Cart</button>
                                                    </Link>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>)
                        }
                    }
                }
            </PConsumer>
        )
    }
}
