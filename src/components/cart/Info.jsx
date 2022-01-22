import React from "react";
import style from './Cart.module.scss'
import { AppContext } from "../../App";

const Info = ({ title, image, description }) => {

    const {setCartOpend} = React.useContext(AppContext);

    return (
        <div className={style.cartEmpty} className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width={120} height={120} src={image} alt="empty_box" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={() => setCartOpend(false)} className={style.button}>Back</button>
        </div>
    )
}

export default Info