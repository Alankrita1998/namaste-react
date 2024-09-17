import { useState,useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {
        try {
            const response = await fetch(`${MENU_URL}?resId=${resId}`); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await response.text(); 
                throw new Error(`Expected JSON but got something else: ${text}`);
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

