import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/layouts/Navbar";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Products from "../pages/Products";
import DetailProduct from "../pages/DetailProduct";
import Cart from "../pages/Cart";
import MyOrder from "../pages/MyOrder";
import RegisterUser from "../pages/RegisterUser";
import Payment from "../pages/Payment";
import AdminHome from "../pages/AdminHome";
import NavbarAdmin from "../components/layouts/NavbarAdmin";
import AdminOrder from "../pages/AdminOrder";
import AdminProducts from "../pages/AdminProducts";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <>
        <NavbarAdmin />
        <Outlet />
      </>
    ),
    children: [
      { path: "home", element: <AdminHome /> },
      { path: "order", element: <AdminOrder /> },
      { path: "products", element: <AdminProducts /> },
    ],
  },

  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "products", element: <Products /> },
      {
        path: "products/detail/:id",
        element: <DetailProduct />,
      },
      { path: "cart", element: <Cart /> },
      { path: "cart/myOrder", element: <MyOrder /> },
      { path: "register", element: <RegisterUser /> },
      { path: "cart/myOrder/payment", element: <Payment /> },

      // { path: '/logout' , element: <div className="text-xl">Logout</div> },
      {
        path: "*",
        element: (
          <h1 className="text-xl text-red-500 flex justify-center">
            Page not found
          </h1>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
