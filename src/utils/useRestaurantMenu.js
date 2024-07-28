import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6882399&lng=77.04997&restaurantId=" +
        resId
    );
    const json = await data.json();
    setInfo(json.data);
  };
  return info;
};

export default useRestaurantMenu;
