

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
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
//   const [loadingCategory, setLoadingCategory] = useState([]);
//   const [openModal, setOpenModal] = useState(false); // State to handle modal visibility
//   const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product for editing
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch products
//     axios
//       .get("http://localhost:5000/api/stocks")
//       .then((response) => {
//         setStocks(response.data);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   useEffect(() => {
//     // Fetch categories
//     axios
//       .get("http://localhost:5000/api/stock_categories")
//       .then((response) => {
//         setStockCategories(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

//   useEffect(() => {
//     setLoadingCategory(true);
//     axios
//       .get("http://localhost:5000/api/stock_categories")
//       .then((response) => {
//         console.log("Fetched Categories:", response.data); // Add this line for debugging
//         setStockCategories(response.data);
//         setLoadingCategory(false);
//       })
//       .catch((error) => {
//         setError("Error fetching categories.");
//         setLoadingCategory(false);
//         console.error("Error fetching categories:", error);
//       });
//   }, []);
  

//   const getCategoryName = (categoryId) => {
//     // Check if categoryId is valid
//     if (!categoryId) return "N/A"; // If there's no categoryId, return N/A
  
//     // Find the category with the given ID
//     const category = stockCategories.find((cat) => cat._id === categoryId);
  
//     // If no category is found, return "N/A"
//     if (!category) {
//       console.warn(`Category not found for ID: ${categoryId}`);
//       return "N/A";
//     }
  
//     // Return the category name if found
//     return category.name;
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
//     setSelectedProduct(productToEdit); // Set the selected product for editing
//     setOpenModal(true); // Open the modal
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedProduct(null); // Clear the selected product
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
//           handleCloseModal(); // Close the modal after successful update
//         })
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
//               <a
//                 href="/addstocks"
//                 className="btn btn-primary btn-sm float-right rounded-0"
//                 style={{ margin: "8px" }}
//               >
//                 <i className="fas fa-plus"></i> New Product
//               </a>
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
//                       stocks.map((product, index) => (
//                         <tr key={product._id}>
//                           <td>{index + 1}</td>
//                           <td>{product.stock_name}</td>
//                           <td>{product.brand}</td>
//                           {/* <td>{getCategoryName(product.s_category)}</td> */}
//                           <td>{getCategoryName(product.s_category)}</td>
//                           <td>{product.s_source}</td>
//                           <td>{product.alert_quantity}</td>
//                           <td>${product.buy_price}</td>
//                           <td>${product.selling_price}</td>
//                           <td>
//                             <button
//                               className="btn btn-sm btn-warning"
//                               onClick={() => handleEdit(product._id)}
//                             >
//                               Edit
//                             </button>
//                             <button
//                               className="btn btn-sm btn-danger ml-2"
//                               onClick={() => handleDelete(product._id)}
//                             >
//                               Delete
//                             </button>
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
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   label="Category"
//                   name="s_category"
//                   value={selectedProduct.s_category}
//                   onChange={handleChange}
//                 >
//                   {stockCategories.map((category) => (
//                     <MenuItem key={category._id} value={category._id}>
//                       {category.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
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
//     </div>
//   );
// }

// export default ProductList;



import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";

function ProductList() {
  const [stocks, setStocks] = useState([]);
  const [stockCategories, setStockCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false); // State to handle modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product for editing
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products
    axios
      .get("http://localhost:5000/api/stocks")
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    // Fetch categories
    axios
      .get("http://localhost:5000/api/stock_categories")
      .then((response) => {
        setStockCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);


  const getCategoryName = (categoryId) => {
    if (!categoryId) return "N/A"; 

    const category = stockCategories.find((category) => category._id === categoryId);

    // If no category is found, return N/A
    if (!category) {
      console.warn(`Category not found for ID: ${categoryId}`);
      return "N/A";
    }

    return category.name; // Return the category name if found
  };

  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:5000/api/stocks/${productId}`)
      .then(() => {
        setStocks((prevStocks) => prevStocks.filter((product) => product._id !== productId));
        alert("Product deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        alert("Error deleting product.");
      });
  };

  const handleEdit = (productId) => {
    const productToEdit = stocks.find((product) => product._id === productId);
    setSelectedProduct(productToEdit); // Set the selected product for editing
    setOpenModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null); // Clear the selected product
  };

  const handleUpdate = () => {
    if (selectedProduct) {
      axios
        .put(`http://localhost:5000/api/stocks/${selectedProduct._id}`, selectedProduct)
        .then(() => {
          setStocks((prevStocks) =>
            prevStocks.map((product) =>
              product._id === selectedProduct._id ? selectedProduct : product
            )
          );
          alert("Product updated successfully!");
          handleCloseModal(); // Close the modal after successful update
        })
        .catch((error) => {
          console.error("Error updating product:", error);
          alert("Error updating product.");
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="right-contentDashboard w-98">
      <section>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <b>Total Product List</b>
              </h3>
              <a
                href="/addstocks"
                className="btn btn-primary btn-sm float-right rounded-0"
                style={{ margin: "8px" }}
              >
                <i className="fas fa-plus"></i> New Product
              </a>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Product Name</th>
                      <th>Brand</th>
                      <th>Category</th>
                      <th>Source</th>
                      <th>Quantity</th>
                      <th>Buying Price</th>
                      <th>Selling Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stocks.length > 0 ? (
                      stocks.map((product, index) => (
                        <tr key={product._id}>
                          <td>{index + 1}</td>
                          <td>{product.stock_name}</td>
                          <td>{product.brand}</td>
                          <td>{getCategoryName(product.s_category)}</td>
                          <td>{product.s_source}</td>
                          <td>{product.alert_quantity}</td>
                          <td>${product.buy_price}</td>
                          <td>${product.selling_price}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-warning"
                              onClick={() => handleEdit(product._id)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-danger ml-2"
                              onClick={() => handleDelete(product._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9">No products found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for editing product */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          {selectedProduct && (
            <Box sx={{ padding: 2 }}>
              <TextField
                label="Product Name"
                variant="outlined"
                fullWidth
                name="stock_name"
                value={selectedProduct.stock_name}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                label="Brand"
                variant="outlined"
                fullWidth
                name="brand"
                value={selectedProduct.brand}
                onChange={handleChange}
                margin="normal"
              />
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  name="s_category"
                  value={selectedProduct.s_category || ''}
                  onChange={handleChange}
                >
                  {stockCategories.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Source"
                variant="outlined"
                fullWidth
                name="s_source"
                value={selectedProduct.s_source}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                label="Quantity"
                variant="outlined"
                fullWidth
                type="number"
                name="alert_quantity"
                value={selectedProduct.alert_quantity}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                label="Buying Price"
                variant="outlined"
                fullWidth
                type="number"
                name="buy_price"
                value={selectedProduct.buy_price}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                label="Selling Price"
                variant="outlined"
                fullWidth
                type="number"
                name="selling_price"
                value={selectedProduct.selling_price}
                onChange={handleChange}
                margin="normal"
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProductList;
