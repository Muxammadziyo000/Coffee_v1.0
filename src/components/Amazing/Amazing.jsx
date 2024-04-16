import React from 'react'
import "./Amazing.css";
import  Cup_a from "./images/cup.png"

function Amazing() {
  return (
    <div className="container amazing_wrapper">
        <div className="amazing_content">
            <div className="amazing_text">
                <h1>Get a chance to have an <br />Amazing morning</h1>
                <p>We are giving you are one time opportunity to <br />experience a better life with coffee.</p>
                <button>Order Now</button>
            </div>
           
        </div>
        <div className="amazing_images">
                <img src={Cup_a} alt="" />
            </div>
    </div>
  )
}

export default Amazing