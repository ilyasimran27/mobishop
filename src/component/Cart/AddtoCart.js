import React, { Component } from 'react';
import Title from '../Heading/Title.js';
import CartCoulumns from './CarCoulumns.js';
import EmptyCart from './EmptyCart.js';
import { PConsumer } from '../../context.js';
import CartList from './CartList.js';
import CartTotal from './CartTotal.js';
import './Cart.css';


class AddtoCart extends Component {
    render() {
        return (
            <PConsumer>{
                value => {
                    const { cart } = value;
                    if (cart.length > 0) {
                        return <React.Fragment>

                            <CartCoulumns></CartCoulumns>
                            <CartList value={value}></CartList>
                            <CartTotal value={value}></CartTotal>
                        </React.Fragment>
                    }
                    else {
                        return <EmptyCart></EmptyCart>
                    }
                }
            }

            </PConsumer>
        );
    }
}

export default AddtoCart;