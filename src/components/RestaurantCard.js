import { CDN_URL , STAR} from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info
    return(
        <div className = "res-card" >
            <img className= "res-logo" src ={CDN_URL + 
                cloudinaryImageId}/>
            <div className = "content">
                <h3>{name}</h3> 
                <h4> {cuisines.join(", ")}</h4> 
                <h4><img className="star-logo" src={STAR}/>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime}</h4> 
            </div>
        </div>
 
    )
}

export default RestaurantCard;