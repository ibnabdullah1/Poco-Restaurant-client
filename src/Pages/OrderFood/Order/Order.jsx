import { useParams } from "react-router-dom";
import orderImg from "../../../assets/shop/banner2.jpg";
import { useEffect, useMemo, useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const categories = useMemo(
    () => [
      "salad",
      "pizza",
      "coffee",
      "chicken",
      "burger",
      "dessert",
      "drinks",
    ],
    []
  );
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "Dessert");
  const burger = menu.filter((item) => item.category === "Burger");
  const coffee = menu.filter((item) => item.category === "Coffee");
  const salad = menu.filter((item) => item.category === "Salad");
  const pizza = menu.filter((item) => item.category === "Pizza");
  const drinks = menu.filter((item) => item.category === "Drinks");
  const chicken = menu.filter((item) => item.category === "Chicken");

  useEffect(() => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex !== -1 && categoryIndex !== tabIndex) {
      setTabIndex(categoryIndex);
    }
  }, [category, tabIndex, categories]);
  return (
    <div>
      <Cover location="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex cursor-pointer justify-center gap-3 text-lg  mt-20 mb-10">
          {categories.map((cat, index) => (
            <Tab
              key={index}
              className={`border border-[#ffcc00] rounded-full px-7 py-1 ${
                tabIndex === index
                  ? "bg-[#ffcc00] text-white focus:outline-[#D1A054] focus:ring-0"
                  : ""
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={coffee}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={chicken}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={burger}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
