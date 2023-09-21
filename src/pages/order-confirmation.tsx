import { useCartContex } from "@/context/cart-context";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation: React.FC = () => {
  const { dispatch } = useCartContex();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch!({ type: "ClearCart" });
    setTimeout(() => navigate("/"), 10000);
  }, []);
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Order Placed Successfully</h2>
      <p className="text-lg text-green-500 mb-4">
        Thank you for your purchase!
      </p>
      <p className="text-gray-700">
        You will be redirected to home page after 10 seconds
      </p>
    </div>
  );
};

export default OrderConfirmation;
