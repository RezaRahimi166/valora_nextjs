import CartTable from "@/components/(main)/cart/cart-table";
import { getMyCart } from "@/lib/actions/cart.actions";
import React from "react";

export const metadata = {
  title: "Shopping Cart",
};

const CartPage = async () => {
  const cart = await getMyCart();

  return (
    <>
      <CartTable cart={cart} />
    </>
  );
};

export default CartPage;
