import React from 'react';
import CartFrom from './CartFrom.js';
import {Link} from 'react-router-dom';

export default function CartItem(props) {
    const { id, title, img, price, total, count } = props.item;
    const { increament, decreament, removeItem } = props.value;
    return (
        <div className="row cart-items-main">
            <div className="col-10 mx-auto col-lg-2">
                <img  src={img}  className="img-fluid cart-items-img" alt="prduct"></img>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">products :</span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price :</span>{price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="quantity">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decreament(id)}>-</span>
                        <span className="btn  fixed mx-1" >{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increament(id)}>+</span>
                    </div>

                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h5> item total : <span className="per-total">RS {total}</span></h5>
            </div>
          
        </div>

    )
}
