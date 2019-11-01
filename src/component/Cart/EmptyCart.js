import React from 'react'

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto empty">
                    <h1>your cart is empty</h1>
                    <div>
                    <i class="far fa-frown"></i>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
