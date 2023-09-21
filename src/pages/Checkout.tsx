import Bottombar from "@/components/bottombar";
import Navbar from "@/components/navbar";
import ShippingPaymentForm from "@/components/shipping-payment-form";

export default function Checkout() {
  return (
    <div>
      <Navbar />
      <ShippingPaymentForm />
      <Bottombar />
    </div>
  );
}
