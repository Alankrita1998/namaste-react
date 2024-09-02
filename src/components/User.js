import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";

const User = () => {

const [users,setUsers]= useState(null);

useEffect(() =>{
    fetchUsers();
},[])

async function fetchUsers () {
    const data = await fetch ("https://api.github.com/users/alankrita1998");
    const json = await data.json();
    setUsers(json);
}

if (users === null) return <Shimmer/>;
    const {name, avatar_url,company,location}= users;

    return (
        <div className="user-card">
            <img className= "user-image" src ={avatar_url}/>
            <h1>{name}</h1>
            <h3>{company}{","}{location}</h3>
        </div>
    );
};

export default User;