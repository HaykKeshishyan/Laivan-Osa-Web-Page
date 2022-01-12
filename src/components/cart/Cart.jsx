import React from "react";
import style from './Cart.module.scss'
import Cartitem from "./Cartitem/Cartitem";

function Cart(props) {
  let cardElement = props.addedModels.map(card => <Cartitem
    id={card.id}
    picture={card.picture}
    model={card.model}
    price={card.price}
    removeAdded={props.removeAdded}
    key={card.model}
  />)


  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Cart <img onClick={props.onClose} className="cu-p" width={16} height={16} src="/img/close-btn.svg" />
        </h2>
        {
          props.addedModels.length > 0 ?
            (<div>
          {cardElement}
          <div className="items">
            <div className={style.cartTotalBlock}>
              <ul>
                <li>
                  <span>Sum:</span>
                  <div className="mr-30"></div>
                  <b>19000 amd</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div className="mr-30"></div>
                  <b>800 amd</b>
                </li>
              </ul>
              <button className={style.button}>Order</button>
            </div>
          </div> 
        </div>) :
        (<div className={style.cartEmpty} className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width={120} height={120} src="/img/empty_box.png" alt="empty_box" />
            <h2>Cart is empty</h2>
            <p className="opacity-6">Please add at least one model if you want to place an order</p>
            <button onClick={props.onClose} className={style.button}>Back</button>
          </div>)}
      </div>
    </div>
  )
}

export default Cart;