import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Cover from "../Shared/Cover/Cover";
import { FaMinus, FaPlus } from "react-icons/fa6";

function Icon({ id, open }) {
  return id === open ? <FaMinus /> : <FaPlus />;
}

export function FAQs() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Cover location={"FAQs"} />
      <div className="max-w-4xl mx-auto py-20">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className={`${
              open === 1 ? "bg-[rgb(255,204,0,0.9)]" : "bg-[#FBF7E8] mb-2"
            } px-4 text-base rounded-md border-b-0`}
            onClick={() => handleOpen(1)}
          >
            How does this work?
          </AccordionHeader>
          <div className={open === 1 ? "p-4 border rounded-md mb-2" : ""}>
            <AccordionBody>
              Simply put, we deliver your favourite menu from fast-food
              restaurant of choice. Our platform enables you to enter your
              postcode and select a nearby restaurant of choice e.g McDonalds,
              KFC, …Wagamama e.t.c for delivery. Within each of these
              restaurants you will find their menus which you can add to basket,
              choose your payment method (PayPal or Credit / Debit Card) and
              submit. There you go, your order is sent to the selected
              restaurant or the nearby delivery driver where applicable.
            </AccordionBody>
          </div>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className={`${
              open === 2 ? "bg-[rgb(255,204,0,0.9)]" : "bg-[#FBF7E8] mb-2"
            } px-4 text-base  rounded-md border-b-0`}
            onClick={() => handleOpen(2)}
          >
            Can I order from different restaurant at the same time?
          </AccordionHeader>
          <div className={open === 2 ? "p-4 border rounded-md mb-2" : ""}>
            <AccordionBody>
              Simply put, we deliver your favourite menu from fast-food
              restaurant of choice. Our platform enables you to enter your
              postcode and select a nearby restaurant of choice e.g McDonalds,
              KFC, …Wagamama e.t.c for delivery. Within each of these
              restaurants you will find their menus which you can add to basket,
              choose your payment method (PayPal or Credit / Debit Card) and
              submit. There you go, your order is sent to the selected
              restaurant or the nearby delivery driver where applicable.
            </AccordionBody>
          </div>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            className={`${
              open === 3 ? "bg-[rgb(255,204,0,0.9)]" : "bg-[#FBF7E8] mb-2"
            } px-4 text-base  rounded-md border-b-0`}
            onClick={() => handleOpen(3)}
          >
            Are your menu prices the same as those at the restaurant?
          </AccordionHeader>
          <div className={open === 3 ? "p-4 border rounded-md mb-2" : ""}>
            <AccordionBody>
              Simply put, we deliver your favourite menu from fast-food
              restaurant of choice. Our platform enables you to enter your
              postcode and select a nearby restaurant of choice e.g McDonalds,
              KFC, …Wagamama e.t.c for delivery. Within each of these
              restaurants you will find their menus which you can add to basket,
              choose your payment method (PayPal or Credit / Debit Card) and
              submit. There you go, your order is sent to the selected
              restaurant or the nearby delivery driver where applicable.
            </AccordionBody>
          </div>
        </Accordion>

        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            className={`${
              open === 4 ? "bg-[rgb(255,204,0,0.9)]" : "bg-[#FBF7E8] mb-2"
            } px-4 text-base  rounded-md border-b-0`}
            onClick={() => handleOpen(4)}
          >
            Some menus are missing on a restaurant page?
          </AccordionHeader>
          <div className={open === 4 ? "p-4 border rounded-md mb-2" : ""}>
            <AccordionBody>
              Simply put, we deliver your favourite menu from fast-food
              restaurant of choice. Our platform enables you to enter your
              postcode and select a nearby restaurant of choice e.g McDonalds,
              KFC, …Wagamama e.t.c for delivery. Within each of these
              restaurants you will find their menus which you can add to basket,
              choose your payment method (PayPal or Credit / Debit Card) and
              submit. There you go, your order is sent to the selected
              restaurant or the nearby delivery driver where applicable.
            </AccordionBody>
          </div>
        </Accordion>

        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader
            className={`${
              open === 5 ? "bg-[rgb(255,204,0,0.9)]" : "bg-[#FBF7E8]  mb-2"
            } px-4 text-base rounded-md border-b-0`}
            onClick={() => handleOpen(5)}
          >
            Do any of your cheeses contain enzymes derived from animal sources?
          </AccordionHeader>
          <div className={open === 5 ? "p-4 border rounded-md mb-2" : ""}>
            <AccordionBody>
              Simply put, we deliver your favourite menu from fast-food
              restaurant of choice. Our platform enables you to enter your
              postcode and select a nearby restaurant of choice e.g McDonalds,
              KFC, …Wagamama e.t.c for delivery. Within each of these
              restaurants you will find their menus which you can add to basket,
              choose your payment method (PayPal or Credit / Debit Card) and
              submit. There you go, your order is sent to the selected
              restaurant or the nearby delivery driver where applicable.
            </AccordionBody>
          </div>
        </Accordion>
        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader
            className={`${
              open === 6 ? "bg-[rgb(255,204,0,0.9)]" : "bg-[#FBF7E8] mb-2"
            } px-4 text-base rounded-md border-b-0`}
            onClick={() => handleOpen(6)}
          >
            Is the sugar used in your dough refined through animal bone char?
          </AccordionHeader>
          <div className={open === 6 ? "p-4 border rounded-md mb-2" : ""}>
            <AccordionBody>
              Simply put, we deliver your favourite menu from fast-food
              restaurant of choice. Our platform enables you to enter your
              postcode and select a nearby restaurant of choice e.g McDonalds,
              KFC, …Wagamama e.t.c for delivery. Within each of these
              restaurants you will find their menus which you can add to basket,
              choose your payment method (PayPal or Credit / Debit Card) and
              submit. There you go, your order is sent to the selected
              restaurant or the nearby delivery driver where applicable.
            </AccordionBody>
          </div>
        </Accordion>
        <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
          <AccordionHeader
            className={`${
              open === 7 ? "bg-[rgb(255,204,0,0.9)]" : "bg-[#FBF7E8] mb-2"
            } px-4 text-base  rounded-md border-b-0`}
            onClick={() => handleOpen(7)}
          >
            Does your pizza contain peanuts or peanut oil?
          </AccordionHeader>
          <div className={open === 7 ? "p-4 border rounded-md mb-2" : ""}>
            <AccordionBody>
              Simply put, we deliver your favourite menu from fast-food
              restaurant of choice. Our platform enables you to enter your
              postcode and select a nearby restaurant of choice e.g McDonalds,
              KFC, …Wagamama e.t.c for delivery. Within each of these
              restaurants you will find their menus which you can add to basket,
              choose your payment method (PayPal or Credit / Debit Card) and
              submit. There you go, your order is sent to the selected
              restaurant or the nearby delivery driver where applicable.
            </AccordionBody>
          </div>
        </Accordion>
        <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
          <AccordionHeader
            className={`${
              open === 8 ? "bg-[rgb(255,204,0,0.9)]" : "bg-[#FBF7E8] mb-2"
            } px-4 text-base  rounded-md border-b-0`}
            onClick={() => handleOpen(8)}
          >
            Are your doughs vegan or vegetarian friendly?
          </AccordionHeader>
          <div className={open === 8 ? "p-4 border rounded-md mb-2" : ""}>
            <AccordionBody>
              Simply put, we deliver your favourite menu from fast-food
              restaurant of choice. Our platform enables you to enter your
              postcode and select a nearby restaurant of choice e.g McDonalds,
              KFC, …Wagamama e.t.c for delivery. Within each of these
              restaurants you will find their menus which you can add to basket,
              choose your payment method (PayPal or Credit / Debit Card) and
              submit. There you go, your order is sent to the selected
              restaurant or the nearby delivery driver where applicable.
            </AccordionBody>
          </div>
        </Accordion>

        <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
          <AccordionHeader
            className={`${
              open === 9 ? "bg-[rgb(255,204,0,0.9)]" : "bg-[#FBF7E8] mb-2"
            } px-4 text-base  rounded-md border-b-0`}
            onClick={() => handleOpen(9)}
          >
            Does your pepperoni contain gluten?
          </AccordionHeader>
          <div className={open === 9 ? "p-4 border rounded-md mb-2" : ""}>
            <AccordionBody>
              Simply put, we deliver your favourite menu from fast-food
              restaurant of choice. Our platform enables you to enter your
              postcode and select a nearby restaurant of choice e.g McDonalds,
              KFC, …Wagamama e.t.c for delivery. Within each of these
              restaurants you will find their menus which you can add to basket,
              choose your payment method (PayPal or Credit / Debit Card) and
              submit. There you go, your order is sent to the selected
              restaurant or the nearby delivery driver where applicable.
            </AccordionBody>
          </div>
        </Accordion>
      </div>
    </>
  );
}
