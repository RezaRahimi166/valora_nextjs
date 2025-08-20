import DealCountdown from "@/common/home/deal-countdown";
import IconBoxes from "@/common/home/icon-boxes";
import ProductCarousel from "@/common/product/product-carousel";
import ProductList from "@/common/product/product-list";
import ViewAllProducts from "@/common/product/view-all-product-button";
import {
  getFeaturedProducts,
  getLatestProducts,
} from "@/lib/actions/product.actions";
import React from "react";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      <ViewAllProducts />
      <DealCountdown />
      <IconBoxes />
    </>
  );
};

export default HomePage;
