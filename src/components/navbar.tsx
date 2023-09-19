import Searchbar from "./searchbar";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="flex justify-center  items-center  sticky top-0  bg-white py-2">
      <Searchbar />
      <div className=" gap-10 hidden  items-center justify-center  sm:flex relative sm:left-10 md:left-32">
        <AiOutlineHome size={24} />
        <BsCartCheck size={24} />
      </div>
    </div>
  );
}
