import React from 'react'
import './Coffee.css';
import coffee_first from "./images/coffee_first.png";
import first_cup from "./images/first_cup.png";
import second_cup from "./images/second_cup.png";
import third_cup from "./images/third_cup.png";
import fourth_cup from "./images/fourth_cup.png";

function Coffee() {
  return (
    <div className="container wrapper_coffee">
        <section className="discover">
            <div className="discover_info">
                <h1>Discover the best coffee</h1>
                <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                <button>Learn More</button>
            </div>
            <img src={coffee_first} alt="" />
        </section>
        <section className="cups_coffe">
            <h1>Enjoy a new blend of coffee style</h1>
            <p className="cups_info_p">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
            <div className="cup_wrapper">
            <div className="menu_cup">
                <img src={first_cup} alt="" />
                <h4>Cappuccino</h4>
                <p>Coffee 50% | Milk 50%</p>
                <p>$8.50</p>
                <button>Order Now</button>
            </div>
            <div className="menu_cup">
                <img src={second_cup} alt="" />
                <h4>Chai Latte</h4>
                <p>Coffee 50% | Milk 50%</p>
                <p>$8.50</p>
                <button>Order Now</button>
            </div>
            <div className="menu_cup">
                <img src={third_cup} alt="" />
                <h4>Macchiato</h4>
                <p>Coffee 50% | Milk 50%</p>
                <p>$8.50</p>
                <button>Order Now</button>
            </div>
            <div className="menu_cup">
                <img src={fourth_cup} alt="" />
                <h4>Expresso</h4>
                <p>Coffee 50% | Milk 50%</p>
                <p>$8.50</p>
                <button>Order Now</button>
            </div>
            </div>
         
        </section>
    </div>
  )
}

export default Coffee