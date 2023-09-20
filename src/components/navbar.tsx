import Searchbar from "./searchbar";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { BiFilterAlt } from "react-icons/bi";
import FilterForm from "./filter-form";
import { useCartContex } from "@/context/cart-context";

export default function Navbar() {
  const { totalItems } = useCartContex();
  return (
    <div className="flex justify-evenly  items-center  sticky top-0  bg-white py-2">
      <Sheet>
        <SheetTrigger>
          <BiFilterAlt size={20} />
        </SheetTrigger>
        <SheetContent side="left" className=" w-[250px] bg-black sm:w-[350px] ">
          <FilterForm />
        </SheetContent>
      </Sheet>
      <Searchbar />
      <div className=" gap-10 hidden  items-center justify-center  sm:flex relative sm:left-10 md:left-32">
        <AiOutlineHome size={24} />
        <div className="flex gap-2 justify-center items-center">
          <BsCartCheck size={24} />
          <span className=" rounded-full bg-yellow-500 w-8 h-8 flex  justify-center items-center">
            {totalItems}
          </span>
        </div>
      </div>
    </div>
  );
}
