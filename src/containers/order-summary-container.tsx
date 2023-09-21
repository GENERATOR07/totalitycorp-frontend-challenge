import CartSummary from "@/components/cart-summary";
import ShippingDetailsSummary from "@/components/shipping-details";
import { useCartContex } from "@/context/cart-context";
import { UseShippingContext } from "@/context/shipping-details-context";

export default function OrderSummaryContainer() {
  const { shippingDetails } = UseShippingContext();
  const { cart, totalValue } = useCartContex();
  return (
    <div className="sm:flex gap-2">
      <ShippingDetailsSummary {...shippingDetails!} />
      <CartSummary cart={cart!} totalAmount={totalValue!} />
    </div>
  );
}
