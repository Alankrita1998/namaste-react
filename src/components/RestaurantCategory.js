import arrowdown from "../utils/arrowdown.svg";
import arrowup from "../utils/arrowup.svg";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";



const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    const [selfExpand,setSelfExpand] = useState(false)

    useEffect(() => {
        if (!showItems) {
          setSelfExpand(false);
        }
      }, [showItems]);
    
      const handleClick = () => {
        if (selfExpand) {
          setSelfExpand(false);
          setShowIndex(null); // Close the accordion when clicked again
        } else {
          setShowIndex(); // Handle the first functionality
          setSelfExpand(true);
        }
      };

    return (
        <div className="py-auto">
        <div className="flex justify-between my-4 cursor-pointer "   onClick = {handleClick}>
        
            <span className="text-sm font-bold ml-2  my-auto">{data.title} ({data.itemCards.length})</span>
            <img className ="w-4 my-auto" src={selfExpand && showItems ? arrowup : arrowdown} alt="arrow"/>
        </div>
        
        {selfExpand && showItems && <ItemList items={data.itemCards} />}
    
        <hr className=" border-4 shadow-lg"></hr>
        </div>
    )
};
export default RestaurantCategory