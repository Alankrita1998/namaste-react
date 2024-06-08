import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SEARCH_LOGO } from "../utils/constants";
import { useState,useEffect } from "react"; 
// Above import within branckets is called named import
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        // To bypass CORS issue go to corsproxy.io and copy paste the URL just before the fetch url http, by this the page will directly not visit the swiggy API and also by adding this we wont need the CORS chrome

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
    };
   


    // // Conditional Rendering--> you render a component based on a condition
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }

//    we can also write the conditional rendering in the below manner in return itself with colon
    return listOfRestaurants.length === 0 ?(
        <Shimmer/>):
        (
        <div className= "body">
            <div className="body-head">
                <div className="filter">
            {/* Filerl}ogic onClick of Top Rated Restaurant button */}
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4)
                    setFilterRestaurant(filteredList) ;}}>-- Top Rated Restaurants! --</button>
                    <div className="search-container">
                <input className="search-input" type="text" placeholder="Search Restaurants" value = {searchText} onChange = {(e) => { setSearchText(e.target.value);}} />
                <button className="search-btn" alt = "Search" onClick={() => { const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())); setFilterRestaurant(filteredRestaurant )}}> Search</button>
                </div>
                
            </div>
            
        </div>
            <div className= "res-container">
                {filterRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
                ))}
            </div>
        </div>
    )

}

export default Body;