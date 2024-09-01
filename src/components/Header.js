import {LOGO} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import cart from "../utils/cart.svg";
import user from "../utils/user.svg";



const Header = () => {
    const [btnName,setBtnName] = useState("Log In");
    const onlineStatus = useOnlineStatus();

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
                    <li className= "p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded "><Link to ="/">Home</Link></li>
                    <li className= "p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded"><Link to ="/about">About Us</Link></li>
                    <li className= "p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded" ><Link to ="/contact">Contact</Link></li>
                    <div className= "p-2 text-small m-2 font-serif hover:bg-teal-700  cursor-pointer rounded"><Link><img
                                className= "w-6"
                                src={cart}
                                alt= "cart"
                             />
                        </Link>
                    </div>
                    {/* <button className="profile-button">Login</button> */}
                    <div>
                    <div className="flex justify-center mx-auto w-7">
                        <img src={user} alt="Profile Picture"></img>
                    </div> 
                    <button className= "text-xs px-2 py-1  hover:bg-teal-700  bg-gray-700 text-white inline-flex items-center justify-center rounded min-w-[60px]" onClick={()=> {btnName === "Log In" ? setBtnName("Log Out") : setBtnName("Log In")}}>{btnName}</button>
                    </div>
                </ul>
            </div>    
        </div>
    )
};

export default Header; 