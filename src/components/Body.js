import ResCards from "./ResCards";
import resList1 from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { IsOpen } from "./ResCards";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchData, setSearchData] = useState("");
  const onlineStatus = useOnlineStatus();
  const userName = useContext(UserContext);

  const IsOpenRestaurant = IsOpen(ResCards);

  console.log("body render", resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6882399&lng=77.04997&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Condtional Rendering
  if (resList.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return <h1>Sorry Buddy you are Offline</h1>;
  }

  return (
    <div className="body">
      <div className="filter flex justify-center ">
        <div className="search m-4 p-4 flex">
          <input
            type="text"
            className="border border-solid border-black px-4 m-2 shadow-xl"
            placeholder="What's on your mind?.."
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 m-2 shadow-lg rounded-lg  bg-sky-500 hover:bg-sky-700 text-white"
            onClick={() => {
              setFilteredResList(
                resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchData.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>

          <button
            className="filter-btn px-4 py-1 m-2 shadow-lg bg-sky-500 hover:bg-sky-700 rounded-lg text-white"
            onClick={() => {
              const filteredList = resList.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredResList(filteredList);
            }}
          >
            Top Rated
          </button>
          <h2 className="px-4 py-1 m-2 shadow-lg bg-sky-500 hover:bg-sky-700 rounded-lg text-white">
            {userName.user}
          </h2>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-stretch">
        {filteredResList.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {res.info.isOpen ? (
              <IsOpenRestaurant resData={res} />
            ) : (
              <ResCards resData={res} />
            )}
          </Link>
        ))}
        {/* <ResCards resData={resList[0]} />
        <ResCards resData={resList[1]} />
        <ResCards resData={resList[2]} />
        <ResCards resData={resList[3]} />
        <ResCards resData={resList[4]} />
        <ResCards resData={resList[5]} />
        <ResCards resData={resList[6]} />
        <ResCards resData={resList[7]} />
        <ResCards resData={resList[8]} />
        <ResCards resData={resList[9]} />
        <ResCards resData={resList[10]} />
        <ResCards resData={resList[11]} />
        <ResCards resData={resList[12]} />
        <ResCards resData={resList[13]} />
        <ResCards resData={resList[14]} />
        <ResCards resData={resList[15]} /> */}
      </div>
    </div>
  );
};

export default Body;
