import React from 'react'

export default function CarCoulumns() {
    return (
        <div className="container-fluid d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="cart-prduct">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="cart-prduct">name of products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="cart-prduct">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="cart-prduct">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="cart-prduct">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="cart-prduct">total</p>
                </div>

            </div>
        </div>
    )
}
