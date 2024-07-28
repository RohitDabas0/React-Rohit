import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops.... Something Went Wrong!!</h1>
      <h2>
        Error {err.status}: {err.statusText}
      </h2>
      <h2>{err.data}</h2>
    </div>
  );
};

export default Error;
