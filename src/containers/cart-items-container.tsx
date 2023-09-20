import CartItemCard from "@/components/cartItem-card";
import { useCartContex } from "@/context/cart-context";

export default function CartItemsContainer() {
  const { cart, totalValue } = useCartContex();
  if (!cart || cart?.length === 0) return <h1>No Cart Items</h1>;
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        {cart?.map((item) => (
          <CartItemCard item={item} key={item.id} />
        ))}
      </div>
      <div>total: ${totalValue}</div>
    </div>
  );
}
