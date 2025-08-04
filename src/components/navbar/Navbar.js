import React, { act, useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../Assets/assets'
import { Link } from 'react-router-dom';
import { Storecontext } from '../../context/Storecontext';

const Navbar = ({showlogin}) => {
    const [active, setActive] = useState("home");
    const {getTotalCartAmount} = useContext(Storecontext)
    return (
        <div className='navbar'>
            <div className="image">
                <Link to='/'><img src={assets.logo} alt="image" /></Link>
            </div>
            <ul className='navbar-ul'>
                <li className={active === "home" ? "active" : ""} onClick={() => { setActive("home") }}>
                    <Link to={'/'} >Home</Link>
                </li>
                <li className={active === "menu" ? "active" : ""} onClick={() => { setActive("menu") }}>
                    <a href='#exploremenu'>Menu</a>
                </li>
                <li className={active === "mobile-app" ? "active" : ""} onClick={() => { setActive("mobile-app") }}>
                    <a href='#appdownload'>Mobile App</a>
                </li>
                <li className={active === "contact-us" ? "active" : ""} onClick={() => { setActive("contact-us") }}>
                    <a href='#footer'>Contact us</a>
                </li>
            </ul>
            <div className="navbar-right-box">
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className='cart-icon'>
                    <Link to='/cart'><i className={`fa-solid fa-cart-shopping ${getTotalCartAmount() ? "dot" : ""}`}></i></Link>
                </div>
                <button className='signin' onClick={()=>showlogin(true)}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
