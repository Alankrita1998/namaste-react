import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import { STAR} from "../utils/constants";
import bicycle from "../utils/bicycle.svg";
import useRestaurantMenu  from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {

    const {resId}= useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer/>
    
    const {name,cuisines,costForTwoMessage,avgRating,areaName,city, totalRatingsString, expectationNotifiers}= resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}= resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter (
        (c) => 
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        return (
        <div className= "justify-evenly mx-64 my-4 shadow-2xl px-20 py-2">
                <h1 className="font-extrabold text-xl text-neutral-700 py-4 ml-1">{ name }</h1>
                <div className="border-4 border-gray-100  shadow-lg rounded-xl p-4 mb-12 ">
                <div className="flex py-2">
                <img className="w-4 h-4 " src={STAR}/>
                <div
                className="text-sm font-serif px-2">
                {avgRating} { "• " + totalRatingsString}
                </div>
                <h4 className="text-sm font-medium px-1 ">{ "• " + costForTwoMessage}</h4>
                </div>
                {/* <div className="flex"><img className="w-4 h-4" src={STAR}/><h2 className="py-1">{avgRating}{" • "}{costForTwoMessage}</h2></div> */}
                <div className= "text-sm font-bold text-teal-800">{cuisines.join(', ')}</div>
                <div className="text-xs ">{areaName},{city}</div>
                <hr className="w-full my-4 "></hr>
                <div className="flex">
                <div className="w-6">
                        <img src={bicycle} alt="ride"></img>
                </div> 
                <div className="text-xs font-bold text-gray-400">{expectationNotifiers[0].enrichedText.replace(/<\/?b>/g, "")}</div>
                </div>
                </div>
                {/* cateogy accordion */}
                <p>
                    {categories.map((category) =>(
                        <RestaurantCategory data={category?.card?.card}/>
                    ))}
                </p>

                {/* <h2>MENU</h2>
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
                </ul> */}
            </div>
        )
};

export default RestaurantMenu;