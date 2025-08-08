import OrderTableDetails from "@/components/(main)/order/order-details-table";
import { getOrderById } from "@/lib/actions/order.actions";
import { ShippingAddress } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Order Details",
};

const OrderDetailsPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const order = await getOrderById(id);

  if (!order) notFound();

  return (
    <>
      <OrderTableDetails
        order={{
          ...order,
          shippingAddress: order.shippingAddress as ShippingAddress,
        }}
        paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
      />
    </>
  );
};

export default OrderDetailsPage;
