import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Layout/Dashboard/User/Cart";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";
import PrivateRoute from "./PrivateRoute";
// import SignUp from "../Pages/SignUp/SignUp";
import ManageBookings from "../Components/ManageBookings/ManageBookings";
import ReviewFrom from "../Components/ReviewFrom/ReviewFrom";
import AddItems from "../Layout/Dashboard/Admin/AddItems";
import AllUsers from "../Layout/Dashboard/Admin/AllUsers";
import ManageItems from "../Layout/Dashboard/Admin/ManageItems";
import UpdateItem from "../Layout/Dashboard/Admin/UpdateItem";
import Profile from "../Layout/Dashboard/Profile";
import Settings from "../Layout/Dashboard/Settings";
import Payment from "../Layout/Dashboard/User/Payment";
import PaymentHistory from "../Layout/Dashboard/User/PaymentHistory";
import DashboardLayout from "../Layout/MainLayout/DashboardLayout";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { FAQs } from "../Pages/FAQ/FAQ";
import ManageOrders from "../Pages/ManageOrders/ManageOrders";
import MyBooking from "../Pages/MyBooking/MyBooking";
import OurTeam from "../Pages/OurTeam/OurTeam";
import CategoryBasedProducts from "../Pages/Products/CategoryBasedProducts";
import Reservation from "../Pages/Reservation/Reservation";
import Register from "../Pages/SignUp/Register";
import Wishlist from "../Pages/Wishlist/Wishlist";
import AdminRoute from "./adminRoute";
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
        path: "/products/:category",
        element: <CategoryBasedProducts />,
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
        element: (
          <PrivateRoute>
            <Wishlist />,
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
      {
        path: "reservation",
        element: (
          <PrivateRoute>
            <Reservation />
          </PrivateRoute>
        ),
      },
      {
        path: "user-profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "shopping-cart",
        element: (
          <PrivateRoute>
            <Cart />,
          </PrivateRoute>
        ),
      },
      {
        path: "managebookings",
        element: (
          <AdminRoute>
            {" "}
            <ManageBookings />
          </AdminRoute>
        ),
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
          fetch(`http://localhost:5000/menu/${params.id}`),
      },

      {
        path: "checkout",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },

      {
        path: "addriview",
        element: (
          <PrivateRoute>
            <ReviewFrom />
          </PrivateRoute>
        ),
      },
      {
        path: "mybooking",
        element: (
          <PrivateRoute>
            <MyBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <PrivateRoute>
            <ManageOrders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
