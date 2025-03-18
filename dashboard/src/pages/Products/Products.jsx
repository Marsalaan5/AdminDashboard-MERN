// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Fetch products from API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/products");
//         setProducts(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         setErrorMessage("Failed to fetch products. Please try again later.");
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Handle delete product
//   const handleDelete = async (productId) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${productId}`);
//         setProducts(products.filter((product) => product._id !== productId)); // Remove deleted product from state
//       } catch (error) {
//         alert("Failed to delete product.");
//       }
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Product Management</h2>
      
//       {/* Error message */}
//       {errorMessage && (
//         <div className="alert alert-danger text-center" role="alert">
//           {errorMessage}
//         </div>
//       )}

//       {/* Add new product button */}
//       <div className="mb-3 text-center">
//         <Link to="/admin/products/add" className="btn btn-success">
//           Add New Product
//         </Link>
//       </div>

//       {/* Product List */}
//       {isLoading ? (
//         <div className="text-center">
//           <p>Loading products...</p>
//         </div>
//       ) : (
//         <div className="table-responsive">
//           <table className="table table-bordered table-hover">
//             <thead>
//               <tr>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Category</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length > 0 ? (
//                 products.map((product) => (
//                   <tr key={product._id}>
//                     <td>
//                       <img
//                         src={product.imageUrl}
//                         alt={product.name}
//                         width="50"
//                         height="50"
//                         style={{ objectFit: "cover" }}
//                       />
//                     </td>
//                     <td>{product.name}</td>
//                     <td>${product.price}</td>
//                     <td>{product.category}</td>
//                     <td>
//                       <Link to={`/admin/products/edit/${product._id}`} className="btn btn-warning btn-sm mx-1">
//                         <FaEdit /> Edit
//                       </Link>
//                       <button
//                         className="btn btn-danger btn-sm mx-1"
//                         onClick={() => handleDelete(product._id)}
//                       >
//                         <FaTrashAlt /> Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center">
//                     No products found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;
