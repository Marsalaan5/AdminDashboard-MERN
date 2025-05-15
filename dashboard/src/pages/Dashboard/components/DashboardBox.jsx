import PropTypes from "prop-types";
// import { FaChartLine } from "react-icons/fa"; // Default icon

function DashboardBox({ title, orders, icon: Icon, color }) {
  return (
    <div
      className="dashboardBox d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${color[0]}, ${color[1]})`,
        width: "355px",
        margin:"10px 0px",
        height: "150px",
        // gap:"1px",
        borderRadius: "10px",
        // color: "#fff",
        // padding: "20PX",
        // textAlign: "center",
        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        // transition: "transform 0.3s ease-in-out",
      }}
    >
      {Icon && <Icon size={32} className="mb-2" />}
      <h5 className="mb-1">{title}</h5>
      <h3 className="fw-bold">{orders}</h3>
      {/* <p className="mb-0"><strong>{completed}</strong></p> */}
    </div>
  );
}

DashboardBox.propTypes = {
  title: PropTypes.string.isRequired,
  orders: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DashboardBox.defaultProps = {
  title: "Default Title",
  orders: "0",
  // completed: "0",
  // icon: FaChartLine,
  color: ["#ddd", "#bbb"],
};

export default DashboardBox;

