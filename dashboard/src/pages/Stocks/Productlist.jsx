
// import { useState, useEffect ,useContext} from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { MyContext } from "../../context/Context";
// import Pagination from 'react-bootstrap/Pagination';

// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Box,
// } from "@mui/material";

// function ProductList() {
//   const [stocks, setStocks] = useState([]);
//   const [stockCategories, setStockCategories] = useState([]);
//   const [openModal, setOpenModal] = useState(false); 
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const {user} = useContext(MyContext)
//   const navigate = useNavigate();

//   const [page, setPage] = useState(1);
//   const stocksPerPage = 10; // You can change this to any number
  
//   const indexOfLastStock = page * stocksPerPage;
//   const indexOfFirstStock = indexOfLastStock - stocksPerPage;
//   const currentStocks = stocks.slice(indexOfFirstStock, indexOfLastStock);
//   const totalPages = Math.ceil(stocks.length / stocksPerPage);
  
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/stocks")
//       .then((response) => {
//         console.log("stocks response.data",response.data);
//         setStocks(response.data);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   useEffect(() => {
//      axios
//       .get("http://localhost:5000/api/stock_categories")
//       .then((response) => {
//         console.log("Stock categories loaded:", response.data); 
//         setStockCategories(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

  
//   const getCategoryName = (s_category) => {
//     if (!s_category) return "N/A";
  
//     // If s_category is an object, get the id
//     const categoryId = typeof s_category === "object" ? s_category._id : s_category;
  
//     const category = stockCategories.find(
//       (category) => String(category._id) === String(categoryId)
//     );
  
//     return category ? category.name : "N/A";
//   };
  
  
  
//   const handleDelete = (productId) => {
//     axios
//       .delete(`http://localhost:5000/api/stocks/${productId}`)
//       .then(() => {
//         setStocks((prevStocks) => prevStocks.filter((product) => product._id !== productId));
//         alert("Product deleted successfully!");
//       })
//       .catch((error) => {
//         console.error("Error deleting product:", error);
//         alert("Error deleting product.");
//       });
//   };

//   const handleEdit = (productId) => {
//     const productToEdit = stocks.find((product) => product._id === productId);
//     console.log('Editing product:', productToEdit); 
//     if (productToEdit) {
//       setSelectedProduct({ ...productToEdit });
//       setOpenModal(true);
//     }
//   };
  

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedProduct(null);
//   };

//   const handleUpdate = () => {
//     if (selectedProduct) {
//       axios
//         .put(`http://localhost:5000/api/stocks/${selectedProduct._id}`, selectedProduct)
//         .then(() => {
//           setStocks((prevStocks) =>
//             prevStocks.map((product) =>
//               product._id === selectedProduct._id ? selectedProduct : product
//             )
//           );
//           alert("Product updated successfully!");
//           handleCloseModal();

//           axios.get("http://localhost:5000/api/stock_categories")
//           .then((response) => {
//             setStockCategories(response.data);
//           })
//           .catch((error) => {
//             console.error("Error fetching categories:", error);
//           });
//       })
      
//         .catch((error) => {
//           console.error("Error updating product:", error);
//           alert("Error updating product.");
//         });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="right-contentDashboard w-98">
//       <section>
//         <div className="container-fluid">
          
//           <div className="card">
//             <div className="card-header">
//               <h3 className="card-title">
//                 <b>Total Product List</b>
//               </h3>
//               {user?.role === "admin" && (
//                 <>
//                  <button
//   className="btn btn-sm btn-warning"
//   onClick={() => navigate("/addstocks")}
// >
//   Add Stock
// </button>
//   </>
//                )}
//             </div>

//             <div className="card-body">
//               <div className="table-responsive">
//                 <table className="table table-bordered text-center">
//                   <thead>
//                     <tr>
//                       <th>Id</th>
//                       <th>Product Name</th>
//                       <th>Brand</th>
//                       <th>Category</th>
//                       <th>Source</th>
//                       <th>Quantity</th>
//                       <th>Buying Price</th>
//                       <th>Selling Price</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {stocks.length > 0 ? (
//                       currentStocks.map((product, index) => (
//                         <tr key={product._id}>
//                           {/* <td>{index + 1}</td> */}
//                           <td>{indexOfFirstStock + index + 1}</td>

//                           <td>{product.stock_name}</td>
//                           <td>{product.brand}</td>
//                           {/* <td>{getCategoryName(product.s_category)}</td> */}
//                           <td>{stockCategories.length ? getCategoryName(product.s_category) : "Loading..."}</td>
                          

//                           <td>{product.s_source}</td>
//                           <td>{product.alert_quantity}</td>
//                           <td>₹ {product.buy_price}</td>
//                           <td>₹ {product.selling_price}</td>
//                          <td>
//                          {user?.role === "admin" && (
//                           <>
//                           <button
//                               className="btn btn-sm btn-warning"
//                               onClick={() => handleEdit(product._id)}
//                               >
//                               Edit
//                             </button>
//                             <button
//                               className="btn btn-sm btn-danger ml-2"
//                               onClick={() => handleDelete(product._id)}
//                               >
//                               Delete
//                             </button>
//                               </>
//                             )}
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="9">No products found.</td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modal for editing product */}
//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle>Edit Product</DialogTitle>
//         <DialogContent>
//           {selectedProduct && (
//             <Box sx={{ padding: 2 }}>
//               <TextField
//                 label="Product Name"
//                 variant="outlined"
//                 fullWidth
//                 name="stock_name"
//                 value={selectedProduct.stock_name}
//                 onChange={handleChange}
//                 margin="normal"
//               />
//               <TextField
//                 label="Brand"
//                 variant="outlined"
//                 fullWidth
//                 name="brand"
//                 value={selectedProduct.brand}
//                 onChange={handleChange}
//                 margin="normal"
//               />
//               <FormControl fullWidth variant="outlined" margin="normal">
//   <InputLabel>Category</InputLabel>
//   <Select
//     label="Category"
//     name="s_category"
//     value={selectedProduct.s_category || ''}
//     onChange={handleChange}
//   >
//     {stockCategories.map((category) => (
//       <MenuItem key={category._id} value={category._id}>
//         {category.name}
//       </MenuItem>
//     ))}
//   </Select>
// </FormControl>

//               <TextField
//                 label="Source"
//                 variant="outlined"
//                 fullWidth
//                 name="s_source"
//                 value={selectedProduct.s_source}
//                 onChange={handleChange}
//                 margin="normal"
//               />
//               <TextField
//                 label="Quantity"
//                 variant="outlined"
//                 fullWidth
//                 type="number"
//                 name="alert_quantity"
//                 value={selectedProduct.alert_quantity}
//                 onChange={handleChange}
//                 margin="normal"
//               />
//               <TextField
//                 label="Buying Price"
//                 variant="outlined"
//                 fullWidth
//                 type="number"
//                 name="buy_price"
//                 value={selectedProduct.buy_price}
//                 onChange={handleChange}
//                 margin="normal"
//               />
//               <TextField
//                 label="Selling Price"
//                 variant="outlined"
//                 fullWidth
//                 type="number"
//                 name="selling_price"
//                 value={selectedProduct.selling_price}
//                 onChange={handleChange}
//                 margin="normal"
//               />
//             </Box>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleUpdate} color="primary">
//             Update
//           </Button>
//         </DialogActions>
//       </Dialog>

      
//           <Pagination className="d-flex mt-3 justify-content-center">
//         <Pagination.Prev
//           onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//           disabled={page === 1}
//         />
      
//         {[...Array(totalPages)].map((_, idx) => (
//           <Pagination.Item
//             key={idx + 1}
//             active={idx + 1 === page}
//             onClick={() => setPage(idx + 1)}
//           >
//             {idx + 1}
//           </Pagination.Item>
//         ))}
      
//         <Pagination.Next
//           onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={page === totalPages}
//         />
//       </Pagination>
//     </div>
//   );
// }

// export default ProductList;




import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Context";
import Pagination from 'react-bootstrap/Pagination';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Breadcrumbs,
  Typography,
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";

function ProductList() {
  const [stocks, setStocks] = useState([]);
  const [stockCategories, setStockCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { user } = useContext(MyContext);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const stocksPerPage = 10;

  const indexOfLastStock = page * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = stocks.slice(indexOfFirstStock, indexOfLastStock);
  const totalPages = Math.ceil(stocks.length / stocksPerPage);

  useEffect(() => {
    axios.get("http://localhost:5000/api/stocks")
      .then((res) => setStocks(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/stock_categories")
      .then((res) => setStockCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const getCategoryName = (s_category) => {
    if (!s_category) return "N/A";
    const categoryId = typeof s_category === "object" ? s_category._id : s_category;
    const category = stockCategories.find((cat) => String(cat._id) === String(categoryId));
    return category ? category.name : "N/A";
  };

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:5000/api/stocks/${productId}`)
      .then(() => {
        setStocks((prev) => prev.filter((p) => p._id !== productId));
        alert("Product deleted successfully!");
      })
      .catch(() => alert("Error deleting product."));
  };

  const handleEdit = (productId) => {
    const product = stocks.find((p) => p._id === productId);
    if (product) {
      setSelectedProduct({ ...product });
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/api/stocks/${selectedProduct._id}`, selectedProduct)
      .then(() => {
        setStocks((prev) => prev.map((p) => (p._id === selectedProduct._id ? selectedProduct : p)));
        alert("Product updated successfully!");
        handleCloseModal();
      })
      .catch(() => alert("Error updating product."));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="right-contentDashboard w-98 p-4">
      {/* Breadcrumb */}
      <Box className="mb-3">
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">Inventory</Typography>
          <Typography color="text.primary">Product List</Typography>
        </Breadcrumbs>
      </Box>

      <section>
        <div className="container-fluid">
          <div className="card shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold">Total Product List</h5>
              {user?.role === "admin" && (
                <Button variant="contained" color="primary" startIcon={<Add />} onClick={() => navigate("/addstocks")}>
                  Add Stock
                </Button>
              )}
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered text-center table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Brand</th>
                      <th>Category</th>
                      <th>Source</th>
                      <th>Quantity</th>
                      <th>Buying Price</th>
                      <th>Selling Price</th>
                      {user?.role === "admin" && <th>Action</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {stocks.length > 0 ? (
                      currentStocks.map((product, index) => (
                        <tr key={product._id}>
                          <td>{indexOfFirstStock + index + 1}</td>
                          <td>{product.stock_name}</td>
                          <td>{product.brand}</td>
                          <td>{getCategoryName(product.s_category)}</td>
                          <td>{product.s_source}</td>
                          <td>{product.alert_quantity}</td>
                          <td>₹ {product.buy_price}</td>
                          <td>₹ {product.selling_price}</td>
                          {user?.role === "admin" && (
                            <td>
                              <Button
                                variant="outlined"
                                size="small"
                                color="warning"
                                startIcon={<Edit />}
                                onClick={() => handleEdit(product._id)}
                                className="me-2"
                              >
                                Edit
                              </Button>
                              <Button
                                variant="outlined"
                                size="small"
                                color="error"
                                startIcon={<Delete />}
                                onClick={() => handleDelete(product._id)}
                              >
                                Delete
                              </Button>
                            </td>
                          )}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9" className="text-muted">No products found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {stocks.length > stocksPerPage && (
                <Pagination className="d-flex justify-content-center mt-4">
                  <Pagination.Prev onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1} />
                  {[...Array(totalPages)].map((_, idx) => (
                    <Pagination.Item
                      key={idx + 1}
                      active={idx + 1 === page}
                      onClick={() => setPage(idx + 1)}
                    >
                      {idx + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page === totalPages} />
                </Pagination>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Edit Modal */}
      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          {selectedProduct && (
            <Box paddingY={1}>
              {[
                { label: "Product Name", name: "stock_name" },
                { label: "Brand", name: "brand" },
                { label: "Source", name: "s_source" },
                { label: "Quantity", name: "alert_quantity", type: "number" },
                { label: "Buying Price", name: "buy_price", type: "number" },
                { label: "Selling Price", name: "selling_price", type: "number" }
              ].map(({ label, name, type = "text" }) => (
                <TextField
                  key={name}
                  label={label}
                  name={name}
                  type={type}
                  value={selectedProduct[name]}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              ))}

              <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  name="s_category"
                  value={selectedProduct.s_category || ""}
                  onChange={handleChange}
                >
                  {stockCategories.map((cat) => (
                    <MenuItem key={cat._id} value={cat._id}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">Cancel</Button>
          <Button onClick={handleUpdate} variant="contained" color="primary">Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProductList;
