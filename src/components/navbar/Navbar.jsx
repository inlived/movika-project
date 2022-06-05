import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <a href="https://hr.movika.com/?utm_source=sberu_ambassadors&utm_campaign=maripro1356#about" className="nav__brand">
                Darya Sidorenko for Movika
            </a>
            <ul className={active}>
                <li className="nav__item">
                    <a href="https://t.me/sdrnkdr" className="nav__link">
                        My Telegram
                    </a>
                </li>
                <li className="nav__item">
                    <a href="https://github.com/inlived" className="nav__link">
                        My Github
                    </a>
                </li>
                <li className="nav__item">
                    <a href="https://drive.google.com/file/d/1o59J9B8uO_zvf_B47WjVkcoXwEP0H80f/view?usp=sharing" className="nav__link">
                        My CV
                    </a>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;