import { BsCartCheck } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { useCartContex } from "@/context/cart-context";
import { Link } from "react-router-dom";

export default function Bottombar() {
  const { totalItems } = useCartContex();
  return (
    <div className="flex p-2 justify-around items-center sticky bottom-0 bg-white border-t-2 border-gray-200 sm:hidden">
      <AiOutlineHome />
      <Link to="cart" className="flex gap-2 justify-center items-center">
        <BsCartCheck />
        <span className=" rounded-full bg-yellow-500 w-8 h-8 flex  justify-center items-center">
          {totalItems}
        </span>
      </Link>
    </div>
  );
}
