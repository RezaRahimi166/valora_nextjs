import CheckoutSteps from "@/common/checkout/checkout-steps";
import React from "react";

const PaymentMethode = () => {
  return (
    <>
      <CheckoutSteps current={2} />
      Payment
    </>
  );
};

export default PaymentMethode;
