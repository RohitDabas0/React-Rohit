import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuCards from "./MenuCards";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(null);

  {
    console.log(resMenu);
  }

  if (resMenu.length === 0) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
    sla,
  } = resMenu?.cards[2]?.card?.card?.info;
  console.log(resMenu?.cards[2]?.card?.card?.info);

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log(resMenu?.cards[4]?.groupedCard.cardGroupMap.REGULAR);

  const categories =
    resMenu?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="menu text-center">
      <div className="menu-head w-6/12 mx-auto p-3 m-3 mt-8 bg-gray-200 text-center font-serif text-xl rounded-lg  hover:bg-gray-300 shadow-xl">
        <h1 className="font-bold text-3xl font-sans">{name}</h1>
        <h3>
          ⭐
          {avgRating +
            "(" +
            totalRatingsString +
            ")" +
            " ● " +
            costForTwoMessage}
        </h3>
        <h3 className="text-orange-600">{cuisines.join(", ")}</h3>
        <span className="flex text-center justify-center">
          <h3 className="font-bold text-center mx-2">Outlet ●</h3>
          <h2 className="text-gray-500 text-md">{areaName}</h2>
        </span>
        <h3 className="text-[17px] text-gray-500">{sla.slaString}</h3>
      </div>
      <h2 className="text-center text-lg font-serif">～ M E N U ～</h2>

      {categories.map((cat, index) => (
        //CONTROLLED COMPONENT
        <RestaurantCategory
          resData={cat.card.card}
          expandItem={index === showItems ? true : false}
          setShowItems={() => setShowItems(index)}
        />
      ))}

      {/* <li>{itemCards[4].card.info.name}</li> */}
      {/* <li>{itemCards[5].card.info.name}</li> */}
    </div>
  );
};

export default RestaurantMenu;
