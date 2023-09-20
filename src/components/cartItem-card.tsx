import { useCartContex } from "@/context/cart-context";
import { CartItem } from "@/reducer/cart-reducer";
import {
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineMinusCircle,
} from "react-icons/ai";
interface cartItemCardProps {
  item: CartItem;
}

export default function CartItemCard({ item }: cartItemCardProps) {
  const { dispatch } = useCartContex();
  return (
    <div className="flex justify-between items-center gap-1 w-full">
      <img
        className="w-12 h-16 sm:w-24 sm:h-32 "
        src={item.image}
        alt={item.title}
      />
      <span className="text-xs w-1/3 sm:text-sm">{item.title}</span>

      <div className="flex justify-center items-center gap-1">
        <button
          onClick={() => dispatch?.({ type: "Decrement", payload: item })}
        >
          <AiOutlineMinusCircle />
        </button>
        <span className="text-sm sm:text-base">{item.count}</span>
        <button
          onClick={() => dispatch?.({ type: "Increment", payload: item })}
        >
          <AiOutlinePlus />
        </button>
        <button onClick={() => dispatch?.({ type: "Remove", payload: item })}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}
