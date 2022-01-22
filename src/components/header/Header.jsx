import React from "react";
import style from './Header.module.scss'

function Header(props) {


    return (
        <header className={style.header}>
            <div className="d-flex align-center">
                <img width={60} height={54} src="/img/logo.png" />
                <div>
                    <h3 className="text-uppercase">Laivan Osa</h3>
                    <p className="opacity-5">Wooden DIY models</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onOpen} className="mr-30 cu-p">
                        <img width={18} height={18} 
                        src="/img/shopping-cart.png" />
                    <span>{props.price}</span>
                </li>
                <li>
                    <img width={18} height={18} 
                    src="/img/user.png" />
                </li>
            </ul>
        </header>
    )
}

export default Header;