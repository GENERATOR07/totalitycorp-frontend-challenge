import React, { useState } from "react";
import { SheetClose } from "./ui/sheet";
export interface filterData {
  selectedCategory: string;
  minPrice: number;
  maxPrice: number;
}

interface FilterFormProps {
  applyFilter: (filterData: filterData) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ applyFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCategory = event.target.value;

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
    applyFilter({ selectedCategory, minPrice, maxPrice });
  };
  return (
    <div className="bg-white h-full w-full flex flex-col gap-4  p-2 rounded-xl">
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
      <SheetClose
        className="bg-blue-500 text-white rounded-md px-2 py-1 mt-2"
        onClick={handelFilter}
      >
        Apply
      </SheetClose>
    </div>
  );
};

export default FilterForm;
