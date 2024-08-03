import { useParams } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "../OrderFood/OrderTab/OrderTab";

const CategoryBasedProducts = () => {
  const [menu, isLoading] = useMenu();
  const { category } = useParams();

  const items = menu.filter((item) => item?.category === category);

  return (
    <div>
      {" "}
      <SectionTitle
        subHeading="Don't Miss"
        heading={`Today's Offer ${category}`}
      />
      <OrderTab items={items} isLoading={isLoading}></OrderTab>
    </div>
  );
};

export default CategoryBasedProducts;
