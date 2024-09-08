import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import { LINKEDIN, STAR } from "../utils/constants";
import bicycle from "../utils/bicycle.svg";
import location from "../utils/location.svg";
import linkedin from "../utils/linkedin.svg";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    
    // Ensure resInfo is not null and has the expected structure
    if (!resInfo || !resInfo.cards) return <Shimmer />;

    const info = resInfo.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
    const restaurantAddresses = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
    ) || [];

    return (
        <div className="justify-evenly mx-64 my-4 shadow-2xl px-20 py-2">
            <h1 className="font-extrabold text-xl text-neutral-700 py-4 ml-1">{info.name || 'Restaurant Name'}</h1>
            <div className="border-4 border-gray-100 shadow-lg rounded-xl p-4 mb-12 ">
                <div className="flex py-2">
                    <img className="w-4 h-4 " src={STAR} />
                    <div className="text-sm font-serif px-2">
                        {info.avgRating || 'N/A'} { "• " + (info.totalRatingsString || 'No Ratings')}
                    </div>
                    <h4 className="text-sm font-medium px-1 ">{ "• " + (info.costForTwoMessage || 'Cost not available')}</h4>
                </div>
                <div className="text-sm font-bold text-teal-800">{info.cuisines?.join(', ') || 'Cuisines not available'}</div>
                <div className="text-xs ">{info.areaName || 'Area Name'}, {info.city || 'City'}</div>
                <hr className="w-full my-4 "></hr>
                <div className="flex">
                    <div className="w-6">
                        <img src={bicycle} alt="ride"></img>
                    </div> 
                    <div className="text-xs font-bold text-gray-400">{info.expectationNotifiers?.[0]?.enrichedText?.replace(/<\/?b>/g, "") || 'Expectation not available'}</div>
                </div>
            </div>
            
            {/* Category accordion */}
            <div>
                {categories.map((category, index) => (
                    <RestaurantCategory 
                        key={category?.card?.card?.title || index} 
                        data={category?.card?.card}
                        showItems={index === showIndex}
                        setShowIndex={() => setShowIndex(index)} 
                    />
                ))}
            </div>
            <div className="bg-gradient-to-l from-teal-50 to-yellow-50 rounded border-transparent shadow-sm w-full h-48 my-8 ">
                <div className="mx-4 my-6">
                    {restaurantAddresses.map((address, index) => (
                        <div key={index} className="py-4 overflow-hidden">
                            <div className="text-xs font-bold leading-normal text-gray-500"> {address.card.card.name}</div>
                            <div className="text-[0.6rem] text-gray-500 leading-loose"> Outlet: {address.card.card.area}</div>
                            <div className="flex justify-items-start">
                                <img src={location} alt="location" className="w-3 h-4 flex-shrink-0"/>
                                <div className="text-[0.6rem] ml-1 text-gray-500"> {address.card.card.completeAddress}</div>
                            </div>
                            <hr className="my-4 shadow-lg border-gray-400"></hr>
                            <div className="m-2">
                                <p className="font-cursive text-[0.6rem] text-gray-500">Foodie.co is a web application created for learning purposes. If you have any questions, feel free to reach out to me on LinkedIn.</p>
                                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} alt="LinkedIn" className="my-4 mx-auto w-4"/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
