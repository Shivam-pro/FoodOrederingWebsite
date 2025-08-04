import React from 'react'
import './footer.css'
import { assets } from '../../Assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="socialmedia">
                    <div className="image">
                        <img src={assets.logo} alt="" />
                    </div>
                    <p className='socialmedia-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatum culpa odit numquam suscipit, explicabo provident veritatis deleniti, porro ex quisquam maiores consequatur nam iure magni tempora pariatur sapiente adipisci mollitia incidunt! Alias, deleniti!</p>
                    <div className="social-media-icons">
                        <div className="facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="twitter">
                            <i className="fa-brands fa-x-twitter"></i>
                        </div>
                        <div className="linkedin">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className="company">
                    <h2 className='heading'>COMPANY</h2>
                    <ul className='ul'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="contact">
                    <h2 className='heading'>GET IN TOUCH</h2>
                    <ul className='ul'>
                        <li>+1-212-465-7980</li>
                        <li>fooddelivery@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <br />
            <p className='copyright'>Copyright 2024 &copy; Fooddelivery.com ~ All Right Reserved</p>
        </div>
    )
}

export default Footer
