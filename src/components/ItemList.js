// import { CDN_URL , STAR} from "../utils/constants";

const ItemList = ({items}) => {
    console.log(items)
    return (
        <div>
            {items.map((item) => (
                <div key= {item.card.info.id} className="border-b-2 shadow-sm">
                    {/* <div className="flex">
                        <img src={CDN_URL + imageId} className="w-64"/>
                    </div> */}
                    <div className="flex flex-col my-6">
                        <span className= " text-sm font-bold"> {item.card.info.name}</span>
                        <span className="text-xs font-bold text-gray-500 pt-2"> ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }  </span>
                        <div className=" flex">
                        {/* <img className="w-4 h-4 " src={STAR}/> */}
                        <span className="text-[0.64rem] font-extrabold  text-gray-500" >
                        {item.card.info.ratings?.aggregatedRating?.rating  && item.card.info.ratings.aggregatedRating 
                            ? `${item.card.info.ratings.aggregatedRating.rating} (${item.card.info.ratings.aggregatedRating.ratingCount.replace("ratings","")})` 
                            : ""}
                        </span>
                        </div>
                        <span className="font-medium pt-3 text-wrap text-xs text-gray-400 mr-8"> {item.card.info.description}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemList;