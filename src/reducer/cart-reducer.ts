import { Product } from "@/types/product";

interface CartItem extends Product {
  count: number;
}

export type Cart = CartItem[];

export interface Actions {
  type: "Increment" | "Decrement" | "Remove";
  payload?: Product;
}

const incrementItemCount = (cart: Cart, payload: Product) => {
  let item = cart.find((item: Product) => item.id === payload.id);
  if (item) {
    item.count += 1;
    return [...cart];
  } else {
    return [...cart, { ...payload, count: 1 }];
  }
};

const decrementItemCount = (cart: Cart, payload: Product) => {
  let item = cart.find((item: Product) => item.id === payload.id);
  if (item) {
    if (item.count === 1) return cart.filter((item) => item.id != payload.id);
    else {
      item.count -= 1;
    }
  }

  return [...cart];
};
const removeItem = (cart: Cart, payload: Product) => {
  return cart.filter((item) => item.id != payload.id);
};
export const CartReducer = (cart: Cart, action: Actions) => {
  switch (action.type) {
    case "Increment":
      return incrementItemCount(cart, action.payload!);
    case "Decrement":
      return decrementItemCount(cart, action.payload!);
    case "Remove":
      return removeItem(cart, action.payload!);
    default:
      return cart;
  }
};
