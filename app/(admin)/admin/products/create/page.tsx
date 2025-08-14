import ProductForm from "@/components/(admin)/products/product-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Product",
};

const CreateProductPage = () => {
  return (
    <>
      <div className="space-y-6 max-w-5xl mx-auto">
        <h2 className="h2-bold">Create Product</h2>
        <ProductForm type="Create" />
      </div>
    </>
  );
};

export default CreateProductPage;
