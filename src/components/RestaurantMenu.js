import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { MENU_URL } from "../utils/constants.js";
import { useParams } from "react-router-dom";
import { STAR} from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo,setResInfo]= useState(null);
    const {resId}= useParams();

useEffect(() => {
    fetchMenu();
}, []);
    
    
    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);

    };

    if (resInfo === null) return <Shimmer/>
    
    const {name,cuisines,costForTwoMessage,avgRating}= resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}= resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)

        return (
        <div className= "menu">
                <h1>{name}</h1>
                {/* <ul className="list"> */}
                <h2><img className="star-logo" src={STAR}/>{avgRating}{" • "}{costForTwoMessage}</h2>
                {/* <ul><li><h3 >{costForTwoMessage}</h3></li></ul> */}
                {/* </ul> */}
                <h3 style={{color:"grey"}}>{cuisines.join(', ')}</h3>
                <h2>MENU</h2>
                <ul>
                    {itemCards?.length > 0 ? (
                        itemCards.map((item) => (
                            <li key={item.card.info.id}>
                                {item.card.info.name} - {"Rs."}
                                {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                            </li>
                        ))
                    ) : (
                        <li style={{color:"red"}}>No items available</li>
                    )}
                </ul>
            </div>
        )
};

export default RestaurantMenu;