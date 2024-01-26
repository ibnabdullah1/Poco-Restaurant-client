const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-3  space-x-2 px-3 md:px-10 py-4">
      <img
        className="max-w-[70px] h-auto object-cover mt-2 rounded "
        src={image}
        alt=""
      />
      <div>
        <div className="flex justify-between ">
          <h3 className="font-semibold text-base">{name}</h3>

          <p className="text-[#FFCC00] font-semibold">${price}</p>
        </div>
        <hr className=" md:w-[70vw] lg:w-full my-1 h-[1.5px] bg-[#d8d7d7]" />
        <p className="text-xs">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
