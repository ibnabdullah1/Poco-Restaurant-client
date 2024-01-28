import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuPage/Menu/Menu";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Order from "../Pages/OrderFood/Order/Order";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Layout/Dashboard/Cart";
// import SignUp from "../Pages/SignUp/SignUp";
import AllUsers from "../Layout/Dashboard/AllUsers";
import AddItems from "../Layout/Dashboard/AddItems";
import AdminRoute from "./adminRoute";
import ManageItems from "../Layout/Dashboard/ManageItems";
import UpdateItem from "../Layout/Dashboard/UpdateItem";
import Payment from "../Layout/Dashboard/Payment";
import PaymentHistory from "../Layout/Dashboard/PaymentHistory";
import AdminHome from "../Layout/Dashboard/AdminHome";
import UserHome from "../Layout/Dashboard/userHome";
import Register from "../Pages/SignUp/Register";
import DashboardLayout from "../Layout/MainLayout/DashboardLayout";
import Profile from "../Layout/Dashboard/Profile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Settings from "../Layout/Dashboard/Settings";
import ManageBookings from "../Components/ManageBookings/ManageBookings";
import ReviewFrom from "../Components/ReviewFrom/ReviewFrom";
import Contact from "../Pages/Contact/Contact";
import OurTeam from "../Pages/OurTeam/OurTeam";
import { FAQs } from "../Pages/FAQ/FAQ";
import ManageOrders from "../Pages/ManageOrders/ManageOrders";
import Wishlist from "../Pages/Wishlist/Wishlist";
// import SignUp from "../Pages/Home/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: (
          <PrivateRoute>
            <Menu />
          </PrivateRoute>
        ),
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "our-team",
        element: <OurTeam />,
      },
      {
        path: "faqs",
        element: <FAQs />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
    ],
  },

  // {
  //   path: "/signup",
  //   element: <SignUp />,
  // },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "user-profile",
        element: <Profile />,
      },
      {
        path: "shopping-cart",
        element: <Cart />,
      },
      {
        path: "managebookings",
        element: <ManageBookings />,
      },

      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://poco-restaurant-server.vercel.app/menu/${params.id}`),
      },
      {
        path: "adminhome",
        element: <AdminHome />,
      },
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "checkout",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },

      {
        path: "addriview",
        element: <ReviewFrom />,
      },
      {
        path: "manage-orders",
        element: <ManageOrders />,
      },
    ],
  },
]);

export default router;
