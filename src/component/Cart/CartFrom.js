import React, { Component } from 'react';
import { PConsumer } from '../../context.js';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart.js';



export default class CartFrom extends Component {
    render() {
        return (
            <PConsumer>{
                value => {
                    const { cart, clearCart } = value;
                    if (cart.length > 0) {

                        return <React.Fragment>

                            <div className=" col-12 position">
                                <form className="main-cart-form col-lg-6 col-md-6 col-sm-6 col-12" onSubmit={() => {
                                    alert("thank you for shopping");
                                    clearCart();

                                }}>
                                    <div className="col-10 col-lg-12 col-md-12 col-sm-12 cart-form">
                                        <label className="label mr-lg-2">Name:</label>
                                        <input className="inpt" type="text" required placeholder="name"></input>
                                    </div>
                                    <div className="col-10 col-lg-12 col-md-12 col-sm-12 cart-form">
                                        <label className="label mr-lg-2 ">Email:</label>
                                        <input className="inpt email" type="email" required placeholder="email address"></input>
                                    </div>
                                    <div className="col-10 col-lg-12 col-md-12 col-sm-12 cart-form">
                                        <label className="label mr-lg-2">Address:</label>
                                        <input className="inpt" type="text" required placeholder="address"></input>
                                    </div>
                                    <div className=" cart-form">

                                        <input type="submit" value="Check out" className="btn-form"></input>
                                    </div>

                                </form>
                            </div>


                        </React.Fragment>
                    }
                    else {
                        return <EmptyCart></EmptyCart>
                    }

                }
            }

            </PConsumer>
        )
    }
}
