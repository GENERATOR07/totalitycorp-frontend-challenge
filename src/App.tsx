import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import OrderSummary from "./pages/order-summary";
import OrderConfirmation from "./pages/order-confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "order-summary",
    element: <OrderSummary />,
  },
  {
    path: "order-confirmation",
    element: <OrderConfirmation />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
