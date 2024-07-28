import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);

  const { name, location, contact } = props;

  return (
    <div className="user-card">
      <h2>count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h3>{contact}</h3>
    </div>
  );
};

export default User;
