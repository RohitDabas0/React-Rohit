import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  return (
    <div className="flex justify-between bg-green-200 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-40 rounded-3xl p-2" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-4">
          <li className="px-4 text-xl hover:text-orange-500">
            Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-xl hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xl hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-xl hover:text-orange-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-xl hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-xl hover:text-orange-500">Cart</li>
          <button
            className="login text-xl border border-solid border-blue-600 bg-sky-500 hover:bg-sky-700 text-white rounded-md px-4 py-[2px] shadow-lg text-justify"
            onClick={() => {
              if (btnName == "Login") {
                setBtnName("Logout");
              } else {
                setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
          <li className="px-4 text-xl hover:text-orange-500 font-bold">
            {data.user}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
