import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center ">
        <Spinner color="green" />
      </div>
    );
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
