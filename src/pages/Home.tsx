import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const { products, isError, isLoading } = useProducts();

  if (isError) return <h1>something went rong</h1>;

  if (isLoading) return <h1> Loading</h1>;

  return <div>{JSON.stringify(products)}</div>;
}
