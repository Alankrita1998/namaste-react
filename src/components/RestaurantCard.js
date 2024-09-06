import { CDN_URL , STAR} from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info
    return(
        <div className = "leading-relaxed w-[16vw] h-[42vh] bg-[#edf5f4] m-4 rounded-lg p-1 shadow-lg border-2 shadow-gray-500 transition-transform duration-100 ease-in-out hover:cursor-pointer hover:scale-90 text-black overflow-hidden" >
            <img  className="w-72 h-32 object-cover rounded-2xl p-1 pb-1" src ={CDN_URL + 
                cloudinaryImageId}/>
                <div className="mx-2 my-1 overflow-hidden  ">
                <h3 className="res-name font-bold text-[0.88rem] pb-1 ">{name}</h3>
                <div className="flex ">
                <img className="w-4 h-4 " src={STAR}/>
                <div
                className="text-[0.8rem] font-semibold px-1">
                {avgRating}
                </div>
                <h4 className="text-[0.8rem] font-semibold px-1 ">{ "• " + sla.slaString}</h4>
                </div>
                <h4 className="res-cuisines  "> {cuisines.join(", ")}</h4> 
                
                <h4 className="text-sm font-serif font-normal text-gray-900 ">{costForTwo}</h4>
                </div>
        </div>
 
    )
}

export default RestaurantCard;