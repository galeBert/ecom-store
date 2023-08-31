"use client";

import { Product } from "@/types";
import React from "react";
import NoResults from "./ui/no-result";
import ProductCard from "./ui/product-card";

interface ProductsListProps {
  title: string;
  items: Product[];
}
export default function ProductList({ items, title }: ProductsListProps) {
  return (
    <div>
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, key) => (
          <ProductCard data={item} key={key} />
        ))}
      </div>
    </div>
  );
}
