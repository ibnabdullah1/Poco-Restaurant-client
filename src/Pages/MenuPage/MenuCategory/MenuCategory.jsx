import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, location }) => {
  return (
    <div className="pt-8">
      {location && <Cover location={location}></Cover>}

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mt-20">
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
