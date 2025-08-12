"use client";
import { productDefaultValues } from "@/lib/constants";
import { insertProductSchema, updateProuctSchema } from "@/lib/validators";
import { Product } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

const ProductForm = ({
  type,
  product,
  productId,
}: {
  type: "Create" | "Update";
  product?: Product;
  productId?: string;
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof insertProductSchema>>({
    resolver:
      type === "Update"
        ? zodResolver(updateProuctSchema)
        : zodResolver(insertProductSchema),
    defaultValues:
      product && type === "Update" ? product : productDefaultValues,
  });
  return <div>s</div>;
};

export default ProductForm;
