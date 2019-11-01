import React from 'react';
import { Link } from 'react-router-dom';
import CartFrom from './CartFrom.js'

export default function CartTotal(props) {
    const { subTotal, tax, cartTotal, clearCart } = props.value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                    <div>
                    <Link to="/CartFrom">
                            <button className="btn btn-outline mb-3 px-5" type="button">
                            Go to purchase
                             </button>
                        </Link>
                        </div>
                        <Link to="/">
                            <button className="btn btn-outline-danger mb-3 px-5" type="button" onClick={
                                () => clearCart()
                            }>
                                clear Cart
                             </button>
                        </Link>
                        <h5>
                            <span className="extra">subtotal : </span>
                           <span className="extra-price"> {subTotal}</span>
                        </h5>
                        <h5>
                            <span className="extra">tax : </span>
                            <span className="extra-price">{tax}</span>
                        </h5>
                        <h5>
                            <span className="extra"> cart total : </span>
                           <span className="extra-price"> {cartTotal}</span>
                        </h5>
                       
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
