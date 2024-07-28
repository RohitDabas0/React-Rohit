import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const ResCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData.info;

  return (
    <div>
      <div className="cards p-3 m-3 w-[220px] hover:text-sm bg-gray-200 h-[470px] font-serif text-md rounded-lg  hover:bg-gray-300 shadow-xl  hover:h-[450px]">
        <img
          className="res-logo w-48 h-48 rounded-2xl"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-xl text-balance">{name}</h3>
        <h4 className="pb-2 my-1">
          ⭐ {avgRating} ● {sla.slaString}
        </h4>
        <h4 className="text-gray-500">{cuisines.join(", ")}</h4>

        <h4 className="text-gray-500 pt-1">{costForTwo}</h4>
        <h4 className="px-4 text-xl text-orange-500 font-bold"></h4>
      </div>
    </div>
  );
};

export const IsOpen = (ResCards) => {
  return (props) => {
    const { resData } = props;
    return (
      <div>
        {resData.info.isOpen ? (
          <label className="absolute bg-green-400 w-16 rounded-lg text-center hover:bg-green-500 shadow-xl py-1 m-1">
            Open
          </label>
        ) : (
          <label className="absolute bg-red-400 w-16 rounded-lg text-center hover:bg-red-500 shadow-xl py-1 m-1">
            Close
          </label>
        )}

        <ResCards {...props} />
      </div>
    );
  };
};

export default ResCards;
