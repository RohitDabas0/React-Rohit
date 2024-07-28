import { useState } from "react";
import Itemlist from "./ItemList";

const RestaurantCategory = (props) => {
  const { resData, expandItem, setShowItems } = props;
  console.log(resData);
  const data = resData.itemCards;

  const itemHide = () => {
    setShowItems();
  };

  return (
    <div>
      {/*Accordian Header */}
      <div className="w-6/12 mx-auto mt-8 p-4 bg-gray-100  shadow-lg hover:bg-gray-200 ">
        <div className="flex justify-between cursor-pointer" onClick={itemHide}>
          <span className="font-bold text-lg">
            {resData.title} ({resData.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div id="items">
          {expandItem && data.map((res) => <Itemlist items={res.card.info} />)}
        </div>
      </div>
      {/** Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
