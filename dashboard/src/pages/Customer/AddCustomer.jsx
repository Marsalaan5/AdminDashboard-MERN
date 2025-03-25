// // import { useState, useEffect } from "react";
// // import axios from "axios";

// // function AddCustomer() {
// //   const [customerData, setCustomerData] = useState({
// //     name: "",
// //     company: "",
// //     address: "",
// //     contact: "",
// //     total_buy: "",
// //     total_paid: "",
// //     total_due: "",
// //   });

// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [successMessage, setSuccessMessage] = useState("");

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     setCustomerData({ ...customerData, [e.target.name]: e.target.value });
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Form validation
// //     if (!customerData.name || !customerData.company || !customerData.address || !customerData.contact) {
// //       setErrorMessage("Please fill in all required fields.");
// //       return;
// //     }

// //     try {
// //       const response = await axios.post("http://localhost:5000/api/customers", customerData);
// //       console.log("Customer Added:", response.data);

// //       setSuccessMessage("Customer added successfully!");
// //       setErrorMessage("");

// //       // Clear form after successful submission
// //       setCustomerData({
// //         name: "",
// //         company: "",
// //         address: "",
// //         contact: "",
// //         total_buy: "",
// //         total_paid: "",
// //         total_due: "",
// //       });

// //       // Remove success message after 3 seconds
// //       setTimeout(() => setSuccessMessage(""), 3000);
// //     } catch (error) {
// //       setErrorMessage("Error adding customer, please try again.");
// //       console.error("Error:", error);
// //     }
// //   };

// //   return (
// //     <div className="right-contentDashboard w-98">
// //       <section>
// //         <div className="container-fluid">
// //           <div className="card">
// //             <div className="card-header d-flex justify-content-center align-items-center">
// //               <h3 className="card-title">
// //                 <b>Add a New Customer</b>
// //               </h3>
// //             </div>

// //             <div className="card-body">
// //               {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
// //               {successMessage && <div className="alert alert-success">{successMessage}</div>}

// //               <form onSubmit={handleSubmit}>
// //                 <div className="row">
// //                   <div className="col-md-6">
// //                     <div className="form-group">
// //                       <label htmlFor="name">Customer Name *:</label>
// //                       <input
// //                         type="text"
// //                         className="form-control"
// //                         id="name"
// //                         name="name"
// //                         placeholder="Enter customer name"
// //                         value={customerData.name}
// //                         onChange={handleChange}
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="col-md-6">
// //                     <div className="form-group">
// //                       <label htmlFor="company">Company *:</label>
// //                       <input
// //                         type="text"
// //                         className="form-control"
// //                         id="company"
// //                         name="company"
// //                         placeholder="Enter company name"
// //                         value={customerData.company}
// //                         onChange={handleChange}
// //                         required
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="row">
// //                   <div className="col-md-6">
// //                     <div className="form-group">
// //                       <label htmlFor="address">Address *:</label>
// //                       <input
// //                         type="text"
// //                         className="form-control"
// //                         id="address"
// //                         name="address"
// //                         placeholder="Enter address"
// //                         value={customerData.address}
// //                         onChange={handleChange}
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="col-md-6">
// //                     <div className="form-group">
// //                       <label htmlFor="contact">Contact *:</label>
// //                       <input
// //                         type="text"
// //                         className="form-control"
// //                         id="contact"
// //                         name="contact"
// //                         placeholder="Enter contact"
// //                         value={customerData.contact}
// //                         onChange={handleChange}
// //                         required
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="row">
// //                   <div className="col-md-4">
// //                     <div className="form-group">
// //                       <label htmlFor="total_buy">Total Buy:</label>
// //                       <input
// //                         type="number"
// //                         className="form-control"
// //                         id="total_buy"
// //                         name="total_buy"
// //                         placeholder="Enter total buy"
// //                         value={customerData.total_buy}
// //                         onChange={handleChange}
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="col-md-4">
// //                     <div className="form-group">
// //                       <label htmlFor="total_paid">Total Paid:</label>
// //                       <input
// //                         type="number"
// //                         className="form-control"
// //                         id="total_paid"
// //                         name="total_paid"
// //                         placeholder="Enter total paid"
// //                         value={customerData.total_paid}
// //                         onChange={handleChange}
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="col-md-4">
// //                     <div className="form-group">
// //                       <label htmlFor="total_due">Total Due:</label>
// //                       <input
// //                         type="number"
// //                         className="form-control"
// //                         id="total_due"
// //                         name="total_due"
// //                         placeholder="Enter total due"
// //                         value={customerData.total_due}
// //                         onChange={handleChange}
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="text-center mt-4">
// //                   <input type="reset" className="btn btn-danger mx-2" value="Reset" />
// //                   <button type="submit" className="btn btn-primary mx-2">
// //                     Submit
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default AddCustomer;



// import { useState, useEffect } from "react";
// import axios from "axios";

// function AddCustomer() {
//   const [customerData, setCustomerData] = useState({
//     name: "",
//     company: "",
//     address: "",
//     contact: "",
//     total_buy: "",
//     total_paid: "",
//     total_due: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerData(prevData => {
//       const updatedData = { ...prevData, [name]: value };

//       // Automatically calculate total_due if total_buy or total_paid changes
//       if (name === "total_buy" || name === "total_paid") {
//         updatedData.total_due = updatedData.total_buy - updatedData.total_paid;
//       }

//       return updatedData;
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Form validation
//     if (!customerData.name || !customerData.company || !customerData.address || !customerData.contact) {
//       setErrorMessage("Please fill in all required fields.");
//       return;
//     }

//     // Validate that the numeric fields are numbers and non-negative
//     if (
//       isNaN(customerData.total_buy) ||
//       isNaN(customerData.total_paid) ||
//       isNaN(customerData.total_due) ||
//       customerData.total_buy < 0 ||
//       customerData.total_paid < 0 ||
//       customerData.total_due < 0
//     ) {
//       setErrorMessage("Please enter valid non-negative numbers for Total Buy, Total Paid, and Total Due.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/customers", customerData);
//       console.log("Customer Added:", response.data);

//       setSuccessMessage("Customer added successfully!");
//       setErrorMessage("");

//       // Clear form after successful submission
//       setCustomerData({
//         name: "",
//         company: "",
//         address: "",
//         contact: "",
//         total_buy: "",
//         total_paid: "",
//         total_due: "",
//       });

//       // Remove success message after 3 seconds
//       setTimeout(() => setSuccessMessage(""), 3000);
//     } catch (error) {
//       setErrorMessage("Error adding customer, please try again.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="right-contentDashboard w-98">
//       <section>
//         <div className="container-fluid">
//           <div className="card">
//             <div className="card-header d-flex justify-content-center align-items-center">
//               <h3 className="card-title">
//                 <b>Add a New Customer</b>
//               </h3>
//             </div>

//             <div className="card-body">
//               {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//               {successMessage && <div className="alert alert-success">{successMessage}</div>}

//               <form onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="name">Customer Name *:</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         name="name"
//                         placeholder="Enter customer name"
//                         value={customerData.name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="company">Company *:</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="company"
//                         name="company"
//                         placeholder="Enter company name"
//                         value={customerData.company}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="address">Address *:</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="address"
//                         name="address"
//                         placeholder="Enter address"
//                         value={customerData.address}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="contact">Contact *:</label>
//                       <input
//                         type="tel"
//                         className="form-control"
//                         id="contact"
//                         name="contact"
//                         placeholder="Enter contact"
//                         value={customerData.contact}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-4">
//                     <div className="form-group">
//                       <label htmlFor="total_buy">Total Buy:</label>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="total_buy"
//                         name="total_buy"
//                         placeholder="Enter total buy"
//                         value={customerData.total_buy}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-4">
//                     <div className="form-group">
//                       <label htmlFor="total_paid">Total Paid:</label>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="total_paid"
//                         name="total_paid"
//                         placeholder="Enter total paid"
//                         value={customerData.total_paid}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-4">
//                     <div className="form-group">
//                       <label htmlFor="total_due">Total Due:</label>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="total_due"
//                         name="total_due"
//                         placeholder="Enter total due"
//                         value={customerData.total_due}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="text-center mt-4">
//                   <input type="reset" className="btn btn-danger mx-2" value="Reset" />
//                   <button type="submit" className="btn btn-primary mx-2">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default AddCustomer; 