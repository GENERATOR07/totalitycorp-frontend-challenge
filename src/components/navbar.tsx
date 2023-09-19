import Searchbar from "./searchbar";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { BiFilterAlt } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="flex justify-evenly  items-center  sticky top-0  bg-white py-2">
      <Sheet>
        <SheetTrigger>
          <BiFilterAlt />
        </SheetTrigger>
        <SheetContent side="left" className=" w-[250px] "></SheetContent>
      </Sheet>
      <Searchbar />
      <div className=" gap-10 hidden  items-center justify-center  sm:flex relative sm:left-10 md:left-32">
        <AiOutlineHome size={24} />
        <BsCartCheck size={24} />
      </div>
    </div>
  );
}
