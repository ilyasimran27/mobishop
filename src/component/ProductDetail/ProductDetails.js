import React, { Component } from 'react';
import { PConsumer } from '../../context.js';
import { Link } from 'react-router-dom';
import './productdetailsstyle.css';



class ProductDetails extends Component {
    render() {

        return (
            <PConsumer>
                {value => {
                    const { id, img, info, price, title, inCart, company } = value.productDetail;
                    console.log(value.productDetail);
                    return (
                        <div className="container py-5">
                            <div className="row title">
                                <h1 className="title">{title}</h1>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 image ">
                                    <img className="image" src={img} alt="product"></img>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12  ">
                                    <h2 className="c-name">made by : <span className="company">{company}</span></h2>
                                    <h3 className="price">Prcice:  <span className="p-price">Rs{price}</span></h3>
                                    <p className="detailinfo">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <button type="button" className="btn btn-products">Back to Products</button>
                                        </Link>

                                        <button disabled={inCart ? true : false} type="button" className="btn btn-cart" onClick={() => {
                                            value.addToCart(id);
                                            value.openModel(id);
                                        }}
                                        >{inCart ? "inCart" : "Add to Cart"}</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                }

                }
            </PConsumer>
        );
    }
}

export default ProductDetails;