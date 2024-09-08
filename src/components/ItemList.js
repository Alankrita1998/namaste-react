import { CDN_URL, STAR} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  const itemsArray = Object.values(items);

  return (
    <div>
      {itemsArray.map((item) => {
        const id = item.card.info.id;
        const itemCount = cartItems[id]?.quantity || 0;

        return (
          <div key={id} className="border-b-2 shadow-sm">
            <div className="flex justify-between">
              <div className="flex">
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-20 h-20 object-cover mt-7 mx-2"
                />
                <div className="flex flex-col my-6">
                  <span className="text-sm font-bold">
                    {item.card.info.name}
                  </span>
                  <span className="text-xs font-bold text-gray-500 pt-2">
                    ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                  <div className="flex">
                    <img
                      className="w-4 h-3 my-auto shadow-2xl pr-1"
                      src={STAR}
                    />
                    <span className="text-[0.64rem] font-extrabold text-gray-500">
                      {item.card.info.ratings?.aggregatedRating?.rating &&
                      item.card.info.ratings.aggregatedRating
                        ? `${item.card.info.ratings.aggregatedRating.rating} (${item.card.info.ratings.aggregatedRating.ratingCount.replace(
                            "ratings",
                            ""
                          )})`
                        : "---"}
                    </span>
                  </div>
                  <span className="font-medium pt-3 text-wrap text-xs text-gray-400 mr-8">
                    {item.card.info.description}
                  </span>
                </div>
              </div>
              <div>
                {itemCount === 0 ? (
                  <button
                    className="hover:bg-green-600 bg-slate-700 text-xs text-white font-bold w-12 h-5 mt-7 shadow-md border-2"
                    onClick={() => handleAdd(item)}
                  >
                    Add
                  </button>
                ) : (
                  <div className="flex items-center">
                    <button
                      className="hover:bg-red-600 bg-slate-700 text-xs text-white font-bold w-6 h-5 mt-7 shadow-md border-2"
                      onClick={() => handleRemove(item)}
                    >
                      -
                    </button>
                    <span className="text-xs text-black mx-2 mt-7">
                      {itemCount}
                    </span>
                    <button
                      className="hover:bg-green-600 bg-slate-700 text-xs text-white font-bold w-6 h-5 mt-7 shadow-md border-2"
                      onClick={() => handleAdd(item)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
