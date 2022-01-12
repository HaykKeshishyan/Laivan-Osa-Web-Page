import React from "react";
import style from './Cartitem.module.scss'

const Cartitem = (props) => {
  return (
    <div className={style.cartItem}>
    <div>
      <img className={style.removeBtn} onClick={() => props.removeAdded(props.id)} width={18} height={18} src="/img/remove.png" alt="remove" />
    </div>
      <img className="model-photo mr-20" width={109} height={72} src={props.picture} alt="model" />
      <div className="mr-20">
        <p className="mb-5">Model {props.model}</p>
        <b>{props.price} amd</b>
      </div>
    </div>
  )
}

export default Cartitem