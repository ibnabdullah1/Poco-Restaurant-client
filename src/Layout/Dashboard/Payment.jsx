import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Add Publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_pk);

const Payment = () => {
  return (
    <div>
      <SectionTitle subHeading="Proceed to Checkout" heading="Checkout" />

      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
