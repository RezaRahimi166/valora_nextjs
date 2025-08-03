import ProductList from "@/common/product/product-list";
import sampleData from "@/db/sample-data";
import React from "react";

const HomePage = () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default HomePage;
