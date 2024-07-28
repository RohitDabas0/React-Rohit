const Itemlist = (props) => {
  const { items } = props;
  return (
    <div className="text-md border-gray-400 border-b-2">
      <span className="flex justify-between p-3 m-3">
        <span className="text-left w-9/12 pr-2 mr-2">
          <h3 className="font-bold pb-1 mb-1">{items.name}</h3>
          <h2 className="py-1 my-1">
            ₹ {items.price ? items.price / 100 : items.defaultPrice / 100}
          </h2>
          <p className="text-xs">{items.description}</p>
        </span>
        <span className="w-3/12 ml-6 mb-3 pl-6 justify-center">
          <span className="justify-center mr-20">
            <button className="absolute bg-green-600 text-white w-20 h-9 rounded-lg mt-32">
              Add+
            </button>
          </span>
          <img
            className="w-44 h-32 rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
              items.imageId
            }
          />
        </span>
      </span>
    </div>
  );
};

export default Itemlist;
