import { auth } from "@/auth";
import CheckoutSteps from "@/common/checkout/checkout-steps";
import PaymentMethodForm from "@/components/(main)/paymentMethod/payment-method-form";
import { getUserById } from "@/lib/actions/user.actions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Select Payment Method",
};

const PaymentMethode = async () => {
  const seesion = await auth();
  const userId = seesion?.user?.id;

  if (!userId) throw new Error("User not found");

  const user = await getUserById(userId);

  return (
    <>
      <CheckoutSteps current={2} />
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </>
  );
};

export default PaymentMethode;
