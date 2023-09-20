import React from "react";
import { Product } from "../types/product";
import { useCartContex } from "@/context/cart-context";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { dispatch } = useCartContex();
  const handleAddToCart = () => {
    dispatch?.({ type: "Increment", payload: product });
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-44 md:h-72 lg:h-80 object-cover"
      />
      <div className="px-4 py-2">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-2">Category: {product.category}</p>
        <p className="text-gray-800 font-semibold text-lg md:text-xl">
          Price: ${product.price}
        </p>
      </div>
      <button
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
