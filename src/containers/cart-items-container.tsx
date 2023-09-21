import CartItemCard from "@/components/cartItem-card";
import { useCartContex } from "@/context/cart-context";

export default function CartItemsContainer() {
  const { cart, totalValue } = useCartContex();
  if (!cart || cart?.length === 0) return <h1>No items in the Cart</h1>;
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        {cart?.map((item) => (
          <CartItemCard item={item} key={item.id} />
        ))}
      </div>
      <div className="my-4 flex justify-end items-center p-2 text-lg">
        <span className="p-2 font-bold">Total:</span> ${totalValue}
      </div>
    </div>
  );
}
