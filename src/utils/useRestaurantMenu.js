import { useState,useEffect } from "react";
import { MENU_URL,PROXY_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {
        try {
            const response = await fetch(PROXY_URL + encodeURIComponent(MENU_URL + resId));
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            if (json.data) {
                setResInfo(json.data); 
            } else {
                console.error("Invalid format or no data in response", json);
            }
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    return resInfo;
};

export default useRestaurantMenu;

