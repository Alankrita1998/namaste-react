import { CDN_URL, STAR} from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla,aggregatedDiscountInfoV3} = resData?.info
    return(
        <div className = "leading-relaxed w-[18vw] h-[42vh] bg-[#edf5f4] m-4 rounded-xl p-1 shadow-lg border-2 shadow-gray-500 transition-transform duration-100 ease-in-out hover:cursor-pointer hover:scale-90 text-black overflow-hidden" >
            <div class="relative border-transparent">
            <img  className="w-72 h-32 object-cover rounded-xl pb-1" loading="lazy" src={CDN_URL + cloudinaryImageId}  alt = {name}/>
            <div class="absolute bottom-0 rounded-xl left-0 right-0 h-1/3   bg-gradient-to-t from-black to-transparent "><span className="pl-2 text-start font-serif font-extrabold  text-[#edf5f4]  text-sm">{aggregatedDiscountInfoV3 ? aggregatedDiscountInfoV3.header + (" ") + aggregatedDiscountInfoV3.subHeader : ""}</span></div>
            </div>
                <div className="mx-2 my-1 overflow-hidden  ">
                <h3 className="res-name font-bold text-[0.92rem] pb-1 ">{name}</h3>
                <div className="flex ">
                <img className="w-4 h-4 " src={STAR}/>
                <div
                className="text-[0.8rem] font-semibold px-1">
                {avgRating}
                </div>
                <h4 className="text-[0.8rem] font-semibold px-1 ">{ "• " +  ("  ") + sla.slaString}</h4>
                </div>
                <h4 className="res-cuisines  "> {cuisines.join(", ")}</h4> 
                
                <h4 className="text-sm font-serif  font-bold text-gray-900 ">{costForTwo}</h4>
                </div>
        </div>
 
    )
}

export default RestaurantCard;