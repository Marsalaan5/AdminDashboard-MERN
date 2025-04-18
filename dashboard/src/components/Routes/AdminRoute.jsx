// components/Routes/AdminRoute.jsx
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin";

  return isAdmin ? children : <Navigate to="/" />;
};


AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

export default AdminRoute;
