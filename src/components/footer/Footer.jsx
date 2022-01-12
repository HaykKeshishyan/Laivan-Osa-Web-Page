import React from "react";
import style from './Footer.module.scss'

function Footer(props) {
    return (
        <div className={style.footer}>
            <img width={240} height={216} src="/img/LOGO_with_text.svg"/>
            <div className="about">
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>+374 34 01 30 35</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;