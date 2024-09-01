import arrow from "../utils/arrow.svg";
import ItemList from "./ItemList";
const RestaurantCategory = ({data}) => {
    console.log(data)
    return (
        <div className="py-auto">
        <div className="flex justify-between my-4 ">
            <span className="text-sm font-bold ml-2  my-auto">{data.title} ({data.itemCards.length})</span>
            <img className ="w-4 my-auto" src={arrow} alt="arrow"/>
        </div>
        
            <ItemList items= {data.itemCards}/>
    
        <hr className=" border-4 shadow-lg"></hr>
        </div>
    )
};
export default RestaurantCategory