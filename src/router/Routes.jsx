import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Error from "../pages/Error"
import About from "../pages/About"
import Contact from "../pages/Contact"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Products from "../pages/Dashboard/Seller/Products"
import DashboardLayout from "../layouts/DashboardLayout"
import AdminRoute from "./AdminRoute"
import SellerReq from "../pages/Dashboard/Admin/SellerReq"
import AllSellers from "../pages/Dashboard/Admin/AllSellers"
import AllBuyers from "../pages/Dashboard/Admin/AllBuyers"
import SellerRoute from "./SellerRoute"
import AddProducts from "../pages/Dashboard/Seller/AddProducts"
import Orders from "../pages/Dashboard/Seller/Orders"
import BuyerRoute from "./BuyerRoute"
import Cart from "../pages/Dashboard/Buyer/Cart"
import WishList from "../pages/Dashboard/Buyer/WishList"
import BlockedUsers from "../pages/Dashboard/Admin/BlockedUsers"
import Dashboard from "../pages/Dashboard/Dashboard"

const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "sign-in",
          element: <SignIn />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "seller-request",
          element: (
            <AdminRoute>
              <SellerReq />
            </AdminRoute>
          ),
        },
        {
          path: "sellers",
          element: (
            <AdminRoute>
              <AllSellers />
            </AdminRoute>
          ),
        },
        {
          path: "buyers",
          element: (
            <AdminRoute>
              <AllBuyers />
            </AdminRoute>
          ),
        },
        {
          path: "blocked-users",
          element: (
            <AdminRoute>
              <BlockedUsers />
            </AdminRoute>
          ),
        },
        {
          path: "products",
          element: (
            <SellerRoute>
              <Products />
            </SellerRoute>
          ),
        },
        {
          path: "add-product",
          element: (
            <SellerRoute>
              <AddProducts />
            </SellerRoute>
          ),
        },
        {
          path: "orders",
          element: (
            <SellerRoute>
              <Orders />
            </SellerRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <BuyerRoute>
              <Cart />
            </BuyerRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <BuyerRoute>
              <WishList />
            </BuyerRoute>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
    },
  }
)

export default route
