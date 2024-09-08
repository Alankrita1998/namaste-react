import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";


const Cart = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart())
    }

    const isCartEmpty = Object.keys(cartItems).length === 0;

    const handlePlaceOrder = () => {
      setIsModalOpen(true); 
    };

    const handleCloseModal = () => {
      setIsModalOpen(false); 
      handleClear();
    };

  return (
    <div className= " mx-64 my-4 shadow-2xl px-20 py-2">
        <div className="text-center font-bold text-xl  my-8 mx-auto">Let's Pack !</div>
        {!isCartEmpty && (
          <div>
          <button className=" bg-gray-600 hover:bg-red-600  m-2 text-white justify-end rounded p-1 text-xs my-4" onClick={() => handleClear()}> Clear Cart</button>
          <ItemList items = {cartItems}/>
          <hr ></hr>
          <h2 className="justify-start underline text-sm mt-2 font-serif">Bill Details</h2>
          <div className = " m-2 flex justify-between">
        
            <div className= " m-1">
              <ul>
                <li className="text-xs font-normal text-gray-500">Item Total</li>
                <li className="text-xs font-normal text-gray-500">Delivery Fee</li>
                <li className="text-xs font-normal text-gray-500"> Extra discount for you</li>
                <li className="text-xs font-normal text-gray-500">Platform fee</li>
                <li className="text-xs font-normal text-gray-500">GST and Restaurant Charges</li>
              </ul>
            </div>
              <div className= " m-1">
              <ul>
                <li className="text-xs font-normal text-gray-500"> ₹158</li>
                <li className="text-xs font-normal text-gray-500"> ₹49</li>
                <li className="text-xs font-normal text-gray-500"> -₹15</li>
                <li className="text-xs font-normal text-gray-500"> ₹9</li>
                <li className="text-xs font-normal text-gray-500"> ₹28</li>
              </ul>
              </div>
            </div>
            <hr className ="h-px bg-gray-300 border-0 my-2"></hr>
            <div className = " m-2 flex justify-between">
              <div className="m-1">
                <ul>
                  <li className = "text-sm font-semibold"> To Pay</li>
                </ul>
              </div>
              <div className="m-1">
              <ul>
                  <li className = "text-sm font-semibold">₹229 </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
            <button className= "text-sm px-4 py-2  hover:bg-teal-700  bg-green-600 text-white  items-center mt-2  rounded min-w-[80px]" onClick={() => {handlePlaceOrder()}}>Place Order</button>
            </div>
            <p className="text-[0.64rem] text-gray-400 text-center font-serif mx-auto  my-2">Note: The bill section for cart is static.</p>
          </div>
          )}

          {isModalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-slate-100 font-serif p-6 rounded shadow-lg mx-auto text-center">
                      <h2 className="text-lg font-sans font-bold mb-4">Order placed {"✅"}</h2>
                      <p className="text-sm">Thanks for ordering from Foodie.co !</p>
                      <button
                        className="mt-4 font-serif text-xs bg-black text-white p-2 rounded"
                        onClick={() => {handleCloseModal()}}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
                
        {isCartEmpty && ( <h1 className =" text-center my-40 text-lg font-serif"> Your cart looks empty . Please add items to proceed. </h1>)}
        
    </div>
  )
}

export default Cart;