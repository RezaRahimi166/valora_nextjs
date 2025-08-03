import ProductList from "@/common/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import React from "react";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
