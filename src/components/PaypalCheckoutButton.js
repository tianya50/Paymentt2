import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const PaypalCheckoutButton = (props) => {
  const { product } = props;
  const { paidFor, setPaidFor } = useState(false);
  const { err, setErr } = useState(false);

  const handleApprove = (orderId) => {
    console.log("approved..");
    setPaidFor(true);
  };

  if (paidFor) {
    console.log("success");
    alert("thank you");
  }

  if (err) {
    alert("error");
  }
  return (
    <PayPalButtons
      oncClick={() => {
        //validate
        console.log("validate...");
        return actions.resolve();
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order ", order);
        handleApprove(data.orderID);
      }}
      onCancel={() => {
        console.log("cancel---");
      }}
      onError={(err) => {
        setErr(err);
        console.log("error ", err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
