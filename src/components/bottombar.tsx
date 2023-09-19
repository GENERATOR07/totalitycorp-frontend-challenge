import { BsCartCheck } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

export default function Bottombar() {
  return (
    <div className="flex p-2 justify-around sticky bottom-0 bg-white border-t-2 border-gray-200 sm:hidden">
      <AiOutlineHome />
      <BsCartCheck />
    </div>
  );
}
