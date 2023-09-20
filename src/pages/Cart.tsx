import Bottombar from "@/components/bottombar";
import Navbar from "@/components/navbar";
import CartItemsContainer from "@/containers/cart-items-container";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="p-4 flex flex-col  w-full">
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <CartItemsContainer />
      </div>
      <Link
        className="bg-orange-600 w-full p-2 flex justify-center items-center"
        to="/checkout"
      >
        Proceed to checkout
      </Link>
      <Bottombar />
    </div>
  );
}
