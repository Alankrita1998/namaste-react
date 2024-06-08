import {LOGO, LOGIN} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";



const Header = () => {
    const [btnName,setBtnName] = useState("Log in");
    return(
        <div className = "header">
          <div class="logo-container">
          <div>
            <img class="logo" src={LOGO}/>
          </div>
          <div class="logo-text">
              <h1 >Foodie.co</h1>
          </div>
          </div>
            <div className= "nav-items">
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About Us</Link></li>
                    <li><Link to ="/contact">Contact</Link></li>
                    <li><Link>Cart</Link></li>
                    {/* <button className="profile-button">Login</button> */}
                    <div className="column">
                    <button class="profile-button">
                        <img src={LOGIN} alt="Profile Picture"></img>
                    </button> 
                    <button class= "login-button" onClick={()=> {btnName === "Log in" ? setBtnName("Log out") : setBtnName("Log in")}}>{btnName}</button>
                    </div>
                </ul>
            </div>    
        </div>
    )
};

export default Header; 