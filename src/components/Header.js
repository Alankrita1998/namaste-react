import {LOGO} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../utils/cart.svg";
import user from "../utils/user.svg";
import { useSelector } from "react-redux";



const Header = () => {
    const [btnName,setBtnName] = useState("Log In");

    const cartItems = useSelector((store) => store.cart.items);
    const totalCartItems = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);

    return(
        <div className = "flex p-3 justify-between bg-customGreen shadow-lg m-2  max-h-[100%]" >
          <div className="flex my-auto">
          <div>
            <img className="w-12 " src={LOGO}/>
          </div>
          <div className="flex p-2 font-bold text-lg font-serif">
              <h1 >Foodie.co</h1>
          </div>
          </div>
            <div className= "flex  my-auto">
                <ul className= "flex" >
                <Link to ="/"> <li className= "p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded ">Home</li></Link>
                <Link to ="/about"> <li className= "p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded">About Us</li></Link>
                <Link to ="/contact">  <li className= "p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded" >Contact</li></Link>
                <Link  to ="/cart">  <div className= "  inline-flex  p-2 text-small m-2 font-serif hover:bg-teal-700  cursor-pointer  hover:text-customGreen  rounded">
                         <img
                                className= "w-6"
                                src={cart}
                                alt= "cart"
                             />
                        <div className=" font-bold w-8 text-center ">({totalCartItems})</div>
                    </div>
                    </Link>
                
                    <div>
                        <div className="flex justify-center mx-auto w-7">
                            <img src={user} alt="Profile Picture"></img>
                        </div> 
                        <Link to = "/login"> <button className= "text-xs px-2 py-1  hover:bg-teal-700  bg-gray-700 text-white inline-flex items-center justify-center rounded min-w-[60px]" onClick={()=> {btnName === "Log In" ? setBtnName("Log Out") : setBtnName("Log In")}}> {btnName} </button></Link>
                    
                    </div>
                </ul>
            </div>    
        </div>
    )
};

export default Header; 