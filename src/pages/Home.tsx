import Bottombar from "../components/bottombar";
import Navbar from "@/components/navbar";

import ProductContainer from "../containers/product-container";

export default function Home() {
  return (
    <div className="p-4 flex flex-col">
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <ProductContainer />
      </div>
      <Bottombar />
    </div>
  );
}
