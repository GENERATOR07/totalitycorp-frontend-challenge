import { filterData } from "@/components/filter-form";
import { Product } from "@/types/product";

export const filterproducts = (
  products: Product[],
  filterData: filterData
): Product[] => {
  let filteredData: Product[] = products;
  if (filterData.selectedCategory !== "")
    filteredData = filteredData.filter(
      (item: Product) => item.category === filterData.selectedCategory
    );
  filteredData = filteredData.filter(
    (item: Product) =>
      item.price >= filterData.minPrice && item.price <= filterData.maxPrice
  );

  return filteredData;
};

export const searchProducts = (
  products: Product[],
  search: string
): Product[] => {
  let matchingProducts: Product[];
  matchingProducts = products.filter(
    (product: Product) =>
      product.description.includes(search) ||
      product.category.includes(search) ||
      product.title.includes(search)
  );
  return matchingProducts;
};
