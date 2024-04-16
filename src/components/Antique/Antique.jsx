import React from 'react'
import './Antique.css';
import Coffee from './images/coffe.png'
import medal2 from './images/medal2.png'
import Cup_coffee from './images/cupCoffe.png'
import Best_price from './images/best-price 1.png'
function Antique() {
  return (
    <div className="container antique_wrapper">
        <div className="antique_content">
        <h1>Why are we different?</h1>
        <p>We don’t just make your coffee, we make your day!</p>
        <div className="cart_antique">
            <div className="cart_antique_cart">
                <img src={Coffee} alt="" />
                <h4>Supreme Beans</h4>
                <p>Beans that provides <br />great taste</p>
            </div>
            <div className="cart_antique_cart">
                <img src={medal2} alt="" />
                <h4>High Quality</h4>
                <p>We provide the <br />highest quality</p>
            </div>
            <div className="cart_antique_cart">
                <img src={Cup_coffee} alt="" />
                <h4>Extraordinary  </h4>
                <p>Coffee like you have <br />never tasted</p>
            </div>
            <div className="cart_antique_cart">
                <img src={Best_price} alt="" />
                <h4>Affordable Price</h4>
                <p>Our Coffee prices are <br />easy to afford</p>
            </div>
        </div>
        <p className='botttom_p'>Great ideas start with great coffee, Lets help you achieve that</p>
            <h3>Get started today.</h3>
            <button>Join Us</button>
        </div>
    </div>
  )
}

export default Antique