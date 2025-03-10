import PropTypes from "prop-types";
import { FaChartLine } from "react-icons/fa"; // Default icon

function DashboardBox({ title, orders, completed, icon: Icon, color }) {
  return (
    <div
      className="dashboardBox d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${color[0]}, ${color[1]})`,
        width: "376px",
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
      <p className="mb-0">Completed: <strong>{completed}</strong></p>
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
  completed: "0",
  icon: FaChartLine,
  color: ["#ddd", "#bbb"],
};

export default DashboardBox;



// import { FaShoppingCart } from "react-icons/fa";

// function DashboardBox({ title, orders, completed }) {
//   return (
//     <div className="col-md-6 col-lg-4 mb-4">
//       <div className="order-card bg-c-blue card">
//         <div className="card-body">
//           <h6 className="text-white">{title}</h6>
//           <h2 className="text-end text-white">
//             <FaShoppingCart className="feather float-start" />
//             <span>{orders}</span>
//           </h2>
//           <p className="mb-0">
//             Completed Orders<span className="float-end">{completed}</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// DashboardBox.propTypes ={
//      title:PropTypes.string.isRequired, 
//      orders:PropTypes.string.isRequired, 
//      completed:PropTypes.string.isRequired, 
//   }

// export default DashboardBox;



// function DashboardBox({ color }) {
//   return (
//     <div
//       className="dashboardBox"
//       style={{
//         background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`,
//         color: "#fff",
//         padding: "20px",
//         borderRadius: "8px",
//         flex: "1",
//         margin: "10px",
//         textAlign: "center",
//         fontWeight: "bold",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       Dashboard Box
//     </div>
//   );
// }

// DashboardBox.propTypes ={
//      color: PropTypes.arrayOf(PropTypes.string).isRequired, 
//   }

// export default DashboardBox;
