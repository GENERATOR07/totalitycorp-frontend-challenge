import { CartItem } from "@/reducer/cart-reducer";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CartSummaryProps {
  cart: CartItem[];
  totalAmount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart, totalAmount }) => {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/order-confirmation");
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      <div className="bg-white rounded-lg shadow-md p-2 sm:p-4">
        {cart.length === 0 ? (
          <p className="text-lg text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold px-1 sm:px-2 py-1 sm:py-2">
                      Product
                    </th>
                    <th className="text-left font-semibold px-1 sm:px-2 py-1 sm:py-2">
                      Count
                    </th>
                    <th className="text-left font-semibold px-1 sm:px-2 py-1 sm:py-2">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr className="text-xs sm:text-sm" key={item.id}>
                      <td className="text-gray-800   px-1 sm:px-2 py-1 sm:py-2 ">
                        {item.title}
                      </td>
                      <td className="text-gray-800 px-1 sm:px-2 py-1 sm:py-2">
                        {item.count}
                      </td>
                      <td className="text-gray-800 px-1 sm:px-2 py-1 sm:py-2">
                        ${item.price.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-2 sm:mt-4">
              <p className="text-lg font-semibold">
                Total Amount:{" "}
                <span className="text-blue-500">${totalAmount.toFixed(2)}</span>
              </p>
            </div>
            <button
              onClick={handleOrder}
              className="w-full mt-4 sm:mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
