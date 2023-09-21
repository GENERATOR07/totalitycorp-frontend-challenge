import { Product } from "@/types/product";

export interface CartItem extends Product {
  count: number;
}

export type Cart = CartItem[];

export interface Actions {
  type: "Increment" | "Decrement" | "Remove";
  payload: Product;
}
const incrementItemCount = (cart: Cart, payload: Product) => {
  let item = cart.find((item: Product) => item.id === payload.id);

  let updatedCart;
  if (!item) {
    updatedCart = [...cart, { ...payload, count: 1 }];
  } else {
    updatedCart = cart.map((item) => {
      if (item.id === payload.id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
  }

  return updatedCart;
};
// const incrementItemCount = (Icart: Cart, payload: Product) => {
//   console.log({ Icart });
//   let cart = [...Icart];
//   let item = cart.find((item: Product) => item.id === payload.id);
//   if (item) {
//     console.log(item.count, item);
//     item.count += 1;
//     console.log(item.count, item);
//     return [...cart];
//   } else {
//     return [...cart, { ...payload, count: 1 }];
//   }
// };

const decrementItemCount = (cart: Cart, payload: Product) => {
  let item = cart.find((item: Product) => item.id === payload.id);
  console.log(item);
  let updatedCart;
  if (item) {
    if (item.count === 1) {
      console.log(cart.filter((item) => item.id != payload.id));
      return cart.filter((item) => item.id != payload.id);
    } else {
      updatedCart = cart.map((item) => {
        if (item.id === payload.id) return { ...item, count: item.count - 1 };
        return item;
      });
      console.log("else", updatedCart);
    }
  }

  return updatedCart;
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
