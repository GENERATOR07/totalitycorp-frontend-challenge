import { BsSearch } from "react-icons/bs";

export default function Searchbar() {
  return (
    <div className="flex gap-2  max-w-md ">
      <input
        className="p-2 grow sm:w-[600px] text-center "
        placeholder="search"
      />{" "}
      <button className="py-2 px-3 bg-blue-500">
        <BsSearch />
      </button>
    </div>
  );
}
