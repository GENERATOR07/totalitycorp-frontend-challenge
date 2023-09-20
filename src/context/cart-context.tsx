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
  const totalItems = context?.state.length;
  return { cart: context?.state, dispatch: context?.dispatch, totalItems };
};
