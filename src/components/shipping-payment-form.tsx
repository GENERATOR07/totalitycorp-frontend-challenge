import { UseShippingContext } from "@/context/shipping-details-context";
import { useEffect, useState } from "react";

const ShippingPaymentForm = () => {
  const { shippingDetails, updateShippingDetails } = UseShippingContext();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  useEffect(() => {
    setFormData(shippingDetails!);
  }, []);
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvvError, setCvvError] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const cardNumberRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3}$/;
    if (!cardNumberRegex.test(formData.cardNumber)) {
      setCardNumberError("Invalid card number (must be 16 digits)");
      return;
    }
    if (!cvvRegex.test(formData.cvv)) {
      setCvvError("Invalid CVV (must be 3 digits)");
      return;
    }
    updateShippingDetails ? updateShippingDetails(formData) : null;
  };

  return (
    <div className="p-4 sm:w-1/2">
      <h1 className="text-2xl font-bold mb-4">Shipping and Payment Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-lg font-semibold">Shipping Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="border rounded-md px-2 py-1 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border rounded-md px-2 py-1 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="border rounded-md px-2 py-1 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="border rounded-md px-2 py-1 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="zip">ZIP Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              className="border rounded-md px-2 py-1 w-full"
              required
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold">Payment Information</h2>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="border rounded-md px-2 py-1 w-full"
            required
          />
          {cardNumberError && (
            <p className="text-red-500 text-sm">{cardNumberError}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              className="border rounded-md px-2 py-1 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              className="border rounded-md px-2 py-1 w-full"
              required
            />
            {cvvError && <p className="text-red-500 text-sm">{cvvError}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
        >
          Save details
        </button>
      </form>
    </div>
  );
};

export default ShippingPaymentForm;
