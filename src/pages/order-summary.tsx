import Bottombar from "@/components/bottombar";
import Navbar from "@/components/navbar";
import OrderSummaryContainer from "@/containers/order-summary-container";

export default function OrderSummary() {
  return (
    <div>
      <Navbar />
      <OrderSummaryContainer />
      <Bottombar />
    </div>
  );
}
