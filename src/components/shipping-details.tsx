import { ShippingDetails } from "@/types/shipping-details";
import React from "react";

const ShippingDetailsSummary: React.FC<ShippingDetails> = ({
  fullName,
  address,
  city,
  state,
  zip,
  cardNumber,
  expiryDate,
  cvv,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Shipping & Payment Details Summary
      </h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
        <p>
          <strong>Full Name:</strong> {fullName}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <p>
          <strong>State:</strong> {state}
        </p>
        <p>
          <strong>ZIP Code:</strong> {zip}
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Payment Information</h3>
        <p>
          <strong>Card Number:</strong> {cardNumber}
        </p>
        <p>
          <strong>Expiry Date:</strong> {expiryDate}
        </p>
        <p>
          <strong>CVV:</strong> {cvv}
        </p>
      </div>
    </div>
  );
};

export default ShippingDetailsSummary;
