import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.scss'

function Navbar(props) {
    return (
        <div className={style.navbar}>
            <ul className="d-flex">
                
                <li className="p-10">
                    <NavLink to="/About">About</NavLink>
                </li>
                <li className="p-10">
                <NavLink to="/Shop">Online Shop</NavLink>
                </li>
                <li className="p-10">
                <NavLink to="/News">News</NavLink>
                </li>
            </ul>
            <img width={191} height={34} src="/img/laivanosa.png"/>
            <ul className="language d-flex ">
                    <li className="p-10">Հայ</li>
                    <li className="p-10">рус</li>
                    <li className="p-10">Eng</li>
                </ul>
        </div>
    )
}

export default Navbar;