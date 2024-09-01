import { useState,useEffect } from "react";
const useOnlineStatus = () =>{

    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(() => {
            fetchOnlineStatus();
    },[])

    const fetchOnlineStatus = () => {
        window.addEventListener('offline',
            () => {    
                setOnlineStatus(false);
            });
            window.addEventListener('online',
            () => {
                setOnlineStatus(true);
            });
    }
    return onlineStatus;
};
export default useOnlineStatus;