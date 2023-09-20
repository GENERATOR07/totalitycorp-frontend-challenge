import { Actions, Cart, CartReducer } from "@/reducer/cart-reducer";
import { createContext, useReducer, useContext } from "react";
interface CartContextProviderProps {
  children: React.ReactNode;
}
interface CartContext {
  state: Cart;
  dispatch: React.Dispatch<Actions>;
}
export const CartContext = createContext<CartContext | null>(null);

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [state, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContex = () => {
  const context = useContext(CartContext);
  const totalItems = context?.state.reduce((acc, cv) => cv.count + acc, 0);
  const totalValue = context?.state.reduce(
    (acc, cv) => cv.price * cv.count + acc,
    0
  );
  return {
    cart: context?.state,
    dispatch: context?.dispatch,
    totalItems,
    totalValue,
  };
};
