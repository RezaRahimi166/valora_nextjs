import ProductCarousel from "@/common/product/product-carousel";
import ProductList from "@/common/product/product-list";
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
    </>
  );
};

export default HomePage;
