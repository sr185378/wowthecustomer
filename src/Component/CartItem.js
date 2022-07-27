import React from 'react'
import './CSS/Cart.css';
function CartItem({data}){
    return (
        <div className="row cItem">
            <div className="col-8 itemName">{data.name}</div>
            <div className="col-4 itemPrice">${data.Price}</div>
        </div>
    )
}

export default CartItem