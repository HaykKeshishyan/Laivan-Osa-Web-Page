import React from "react";
import style from './Cart.module.scss'
import Cartitem from "./Cartitem/Cartitem";
import Info from "./Info"
import { AppContext } from "../../App";
import { useState } from 'react';
import axios from "axios";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))

function Cart(props) {
  const { addedModels, setAddedModels } = React.useContext(AppContext)
  const [ orderId, setOrderId ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [isOrderComplete, setIsOrderComplete] = useState(false)

  const onClickOrder = async () => {
    // try {
      setLoading(true);
      const { data } = await axios.post('https://61b8b44138f69a0017ce5cd7.mockapi.io/orders', { items: addedModels, });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setAddedModels([]);
      for (let i = 0; i < addedModels.length; i++) {
        const item = addedModels[i];
        await axios.delete('https://61b8b44138f69a0017ce5cd7.mockapi.io/cart' + item.id);
        await delay();
      }
    // } catch (error) {
    //   alert('Feiled to create order');
    // }
    setLoading(false);
  };

  let cardElement = addedModels.map(card => <Cartitem
    id={card.id}
    picture={card.picture}
    model={card.model}
    price={card.price}
    removeAdded={props.removeAdded}
    key={card.model}
  />)

  return (
    <div className={`${style.overlay} ${props.cartOpend ? style.overlayVisible : ''}`}>
      <div className={style.drawer}>
        <h2 className="d-flex justify-between mb-30 flex">
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
                  <b>{props.totalPrice}</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div className="mr-30"></div>
                  <b>{props.totalPrice * 0.1}</b>
                </li>
              </ul>
              <button disabled={loading} className={style.button} onClick={onClickOrder} >Order</button>
            </div>
          </div> 
        </div>) : (
          <Info title={isOrderComplete ? "Order completed" : "Cart is empty"} 
          description={isOrderComplete ? `Your order #${orderId} is en route` : "Please add at least one model if you want to place an order"} 
          image={isOrderComplete ? "/img/complete-order.png" : "/img/empty_box.png"} />
        )}
      </div>
    </div>
  )
}

export default Cart;