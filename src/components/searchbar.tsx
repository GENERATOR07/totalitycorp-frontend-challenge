import { searchProducts } from "@/helper/product-helper";
import { queryClient } from "@/main";
import { Product } from "@/types/product";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

export default function Searchbar() {
  const [search, setSearch] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const products: Product[] | undefined = queryClient.getQueryData([
      "products",
    ]);
    const matchingProducts = searchProducts(products!, search);
    console.log(matchingProducts);
    queryClient.setQueryData(["products"], matchingProducts);
  };
  const handelClearSearch = () => {
    setSearch("");
    queryClient.refetchQueries(["products"]);
  };
  return (
    <div className="flex gap-2  max-w-md ">
      <div className="relative">
        <input
          className="p-2 grow sm:w-[600px] text-center "
          placeholder="search"
          value={search}
          onChange={handleChange}
        />{" "}
        <button
          className="absolute top-3 right-2 text-red-500"
          onClick={handelClearSearch}
        >
          <MdOutlineCancel />
        </button>
      </div>
      <button className="py-2 px-3 bg-blue-500" onClick={handleSearch}>
        <BsSearch />
      </button>
    </div>
  );
}
