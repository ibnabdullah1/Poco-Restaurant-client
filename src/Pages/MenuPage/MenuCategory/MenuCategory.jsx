import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Button from "../../../Components/Button/Button";

const MenuCategory = ({ items, location, img }) => {
  return (
    <div className="pt-8">
      {location && <Cover location={location}></Cover>}

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="text-center mb-10">
        <Link to={`/order/${location ? location : "order"}`}>
          <Button
            level={"Order Now"}
            address={`/order/${location ? location : "order"}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
