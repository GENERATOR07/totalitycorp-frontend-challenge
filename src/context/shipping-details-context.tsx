import { ShippingDetails } from "@/types/shipping-details";
import { createContext, useContext, useState } from "react";

interface ShippingDetailsProviderProps {
  children: React.ReactNode;
}

interface ShippingContext {
  shippingDetails: ShippingDetails;
  handelUpdate: Function;
}
const initialShippingDetails: ShippingDetails = {
  fullName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
};

const ShippingDetailsContext = createContext<ShippingContext | null>(null);

export const ShippingContextProvider = ({
  children,
}: ShippingDetailsProviderProps) => {
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>(
    initialShippingDetails
  );
  const handelUpdate = (data: ShippingDetails) => {
    setShippingDetails(data);
  };
  return (
    <ShippingDetailsContext.Provider value={{ shippingDetails, handelUpdate }}>
      {children}
    </ShippingDetailsContext.Provider>
  );
};

export const UseShippingContext = () => {
  const context = useContext(ShippingDetailsContext);
  return {
    shippingDetails: context?.shippingDetails,
    updateShippingDetails: context?.handelUpdate,
  };
};
