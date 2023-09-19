import ProductCard from "../components/product-card";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/product";

export default function ProductContainer() {
  const { products, isError, isLoading } = useProducts();

  if (isError) return <h1>something went rong</h1>;

  if (isLoading) return <h1> Loading</h1>;
  return (
    <div className=" p-2 flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
      {products.map((data: Product) => (
        <ProductCard product={data} key={data.id} />
      ))}
    </div>
  );
}
