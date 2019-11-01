import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PConsumer } from '../../context.js';
import './product.css';
import PropType from 'prop-types';


class Product extends Component {

    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <div className="productwraper col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card" >
                    <PConsumer>
                        {(value) => {
                            return (<div className="image-container p-5" onClick={
                                () => value.handleDetail(id)
                            }>
                                <Link to="/productdetails">
                                    <img src={img} className="card-img-top" alt="product image"></img>
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModel(id);
                                    }

                                    }>
                                    {inCart ? (<p className="text-capitalize mb-0" disabled>{""} inCart</p>) :
                                        (<i className="fas fa-cart-plus"></i>)}
                                </button>
                            </div>);
                        }


                        }
                    </PConsumer>
                    <div className="card-body">
                        <h5 className="product-title">{title}</h5>
                        <h5 className="product-price"><span>Rs:</span>{price}</h5>
                    </div>
                </div>

            </div>

        );
    }
}
Product.propTypes = {
    product: PropType.shape({
        id: PropType.number,
        img: PropType.string,
        title: PropType.string,
        price: PropType.number,
        inCart: PropType.bool
    }).isRequired
}

export default Product;