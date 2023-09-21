import React, { useState } from "react";
import { SheetClose } from "./ui/sheet";
import { queryClient } from "@/main";
import { Product } from "@/types/product";
import { filterproducts } from "@/helper/product-helper";
export interface filterData {
  selectedCategory: string;
  minPrice: number;
  maxPrice: number;
}

const FilterForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const handleCategoryChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCategory = event.target.value;
    await queryClient.refetchQueries({
      queryKey: ["products"],
      type: "active",
    });

    setSelectedCategory(newCategory);
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value);
    if (event.target.name === "min") setMinPrice(value);
    else setMaxPrice(value);
  };

  const handelFilter = () => {
    const filters = { selectedCategory, minPrice, maxPrice };
    const products: Product[] | undefined = queryClient.getQueryData([
      "products",
    ]);

    const filteredData: Product[] = filterproducts(products!, filters);

    queryClient.setQueryData(["products"], filteredData);
  };

  const handelClear = () => {
    setSelectedCategory("");
    setMinPrice(0);
    setMaxPrice(1000);
    queryClient.refetchQueries(["products"]);
  };
  return (
    <div className=" h-full w-full flex flex-col gap-4  p-2 rounded-xl ">
      <div className="mb-4  p-2">
        <label className="block text-gray-700">Select Category:</label>
        <select
          className="border rounded-md py-2 px-3 mt-1"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className="mb-4 p-2 flex flex-col">
        <label className="block text-gray-700">
          Price Range: ${minPrice} - ${maxPrice}
        </label>
        <input
          name="min"
          type="range"
          min={0}
          max={1000}
          step={1}
          value={minPrice}
          onChange={handlePriceRangeChange}
          className="slider"
          id="minPriceRange"
        />
        <input
          name="max"
          type="range"
          min={0}
          max={1000}
          step={1}
          value={maxPrice}
          onChange={handlePriceRangeChange}
          className="slider"
          id="maxPriceRange"
        />
      </div>
      <div className="flex gap-2 p-2">
        <SheetClose
          className="bg-blue-500 text-white rounded-md px-2 py-1 mt-2"
          onClick={handelFilter}
        >
          Apply Filters
        </SheetClose>
        <SheetClose
          className="bg-red-500 text-white rounded-md px-2 py-1 mt-2"
          onClick={handelClear}
        >
          Clear Filters
        </SheetClose>
      </div>
    </div>
  );
};

export default FilterForm;
