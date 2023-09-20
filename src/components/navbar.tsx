import Searchbar from "./searchbar";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { BiFilterAlt } from "react-icons/bi";
import FilterForm from "./filter-form";
import { useCartContex } from "@/context/cart-context";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { totalItems } = useCartContex();
  return (
    <div className="flex gap-2  items-center justify-center sticky top-0  bg-white py-2 ">
      <Sheet>
        <SheetTrigger>
          <BiFilterAlt size={20} />
        </SheetTrigger>
        <SheetContent side="left" className=" w-[250px] bg-black sm:w-[350px] ">
          <FilterForm />
        </SheetContent>
      </Sheet>
      <Searchbar />
      <div className="hidden gap-10  items-center justify-center sm:flex absolute right-3 top-3">
        <Link to="/">
          {" "}
          <AiOutlineHome size={24} />
        </Link>
        <div className="flex gap-2 justify-center items-center">
          <Link to="/cart">
            <BsCartCheck size={24} />
          </Link>
          <span className=" rounded-full bg-yellow-500 w-8 h-8 flex  justify-center items-center">
            {totalItems}
          </span>
        </div>
      </div>
    </div>
  );
}
