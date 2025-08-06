import { auth } from "@/auth";
import CheckoutSteps from "@/common/checkout/checkout-steps";
import ShippingAddressForm from "@/components/(main)/shippingAddress/shipping-address-form";
import { getMyCart } from "@/lib/actions/cart.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { type ShippingAddress } from "@/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Shipping Address",
};

const ShippingAddress = async () => {
  const cart = await getMyCart();
  if (!cart || cart.items.length === 0) redirect("/cart");

  const session = await auth();
  const userid = session?.user?.id;
  if (!userid) throw new Error("No User Id");

  const user = await getUserById(userid);

  return (
    <>
      <CheckoutSteps current={1} />
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </>
  );
};

export default ShippingAddress;
