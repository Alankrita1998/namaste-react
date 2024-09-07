import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import cancel from "../utils/cancel.svg";
import search from "../utils/search.svg";
import EmptySearch from "./EmptySearch";
import { RESTAURANT_LIST, PROXY_URL} from "../utils/constants.js";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            PROXY_URL +
            RESTAURANT_LIST
        );
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const handleSearch = () => {
        if (searchText.trim() === "") {
     
            return;
        }

        if (isSearching) {
            setSearchText("");
            setFilterRestaurant(listOfRestaurants);
            setIsSearching(false);
            
        } else {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestaurant(filteredRestaurant);
            setIsSearching(true);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchText(value);

        if (value.trim() === "") {
            setIsSearching(false);
            setFilterRestaurant(listOfRestaurants);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Seems like your internet is down. Please TURN ON the internet to resume.</h1>;

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="flex justify-between p-4 items-center ">
                    <div className="flex  justify-start  p-4 ml-4">
                    <button
                        className="bg-gradient-to-l from-teal-700 to-teal-400 w-[16rem] hover:text-black text-white font-bold p-2 rounded  "
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                            setFilterRestaurant(filteredList);
                        }}
                    >
                         Top Rated Restaurants! 
                    </button>
                    </div>
                    <div className="flex justify-between items-center mx-auto shadow-md  border-2 px-6 py-1 rounded-full w-[32rem] ml-[3.4rem]">
                        <input
                            className="focus:outline-none focus:border-transparent flex-grow text-left"
                            type="text"
                            placeholder="Search Restaurants"
                            value={searchText}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                        />
                        <button
                            className="focus:outline-none focus:border-transparent ml-4"
                            onClick={() => handleSearch()}
                        >
                            <img
                                className="w-5"
                                src={isSearching ? cancel : search}
                                alt={isSearching ? "Clear Search" : "Search"}
                            />
                        </button>
                    </div>
            </div>
            <div className="flex flex-wrap mx-12  shadow-lg justify-evenly">
                {filterRestaurant.length === 0 ? (
                <EmptySearch /> 
                    ) : (
                        filterRestaurant.map((restaurant) => (
                            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                <RestaurantCard resData={restaurant} />
                            </Link>
                        ))
                    )}
            </div>
        </div>
    );
};

export default Body;
