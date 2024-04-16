import React from 'react'
import './header.css';
import Bean_Scene from "./images/Bean_Scene.png";
import Coffee from "./images/Coffee.png"

function Header() {
  return (
    <div className='container wrapper_header'>
        <div className="header">
            <img src={Bean_Scene} alt="{bean_scene}"/>
           <div className="pages">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
           </div>
            <div className="sign">
            <a href="#">Sign In</a>
            <button>SignUp</button>
            </div>
        </div>
        <div className="header_hero">
            <h1>We’ve got your morning covered with</h1>
            <img src={Coffee} alt="" />
            <p> It is best to start your day with a cup of coffee. Discover the
                best flavours coffee you will ever have. We provide the best
                for our customers.
            </p>
            <button>Order Now</button>
        </div>
    </div>
  )
}

export default Header
