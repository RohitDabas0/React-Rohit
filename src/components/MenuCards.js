import { MENU_LOGO } from "../utils/constants";

const MenuCards = (props) => {
  const { menuData } = props;
  const { name, price, defaultPrice, ratings, imageId } = menuData.card.info;

  return (
    <div className="menuCards p-3 m-3 w-[220px] bg-gray-200 h-[350px] font-serif text-md rounded-lg  hover:bg-gray-300 shadow-xl">
      <img
        className="menu-logo w-48 h-48 rounded-2xl"
        src={MENU_LOGO + imageId}
      />

      <h2>{name}</h2>
      <h3>Rs.{price / 100 || defaultPrice / 100}</h3>
      <h3>{ratings.aggregatedRating.rating} stars</h3>
    </div>
  );
};

export default MenuCards;
