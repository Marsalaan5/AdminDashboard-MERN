// components/Routes/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin");
  return isLogin ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


export default PrivateRoute;
