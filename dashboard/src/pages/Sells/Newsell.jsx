// import { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

// function Newsell() {
//   const [customers, setCustomers] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [paymentMethods, setPaymentMethods] = useState([]);
//   const [saleData, setSaleData] = useState({
//     customer: "",
//     orderDate: "",
//     products: [{ product: "", quantity: 1, price: 0 }], // Initial product field
//     subtotal: 0,
//     prev_due: 0,
//     netTotal: 0,
//     paidBill: 0,
//     dueBill: 0,
//     paymentMethod: "",
//   });
  

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/customers")
//       .then((res) => setCustomers(res.data))
//       .catch((err) => console.error("Error fetching customers", err));

//     axios.get("http://localhost:5000/api/stocks")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error("Error fetching products", err));

//     axios.get("http://localhost:5000/api/payment-methods")
//       .then((res) => setPaymentMethods(res.data))
//       .catch((err) => console.error("Error fetching payment methods", err));
//   }, []);

//   const handleProductChange = (index, field, value) => {
//     const updatedProducts = [...saleData.products];
//     updatedProducts[index] = {
//       ...updatedProducts[index],
//       [field]: field === "quantity" || field === "price" ? parseFloat(value) || 0 : value,
//     };
  
//     // Calculate totals
//     // const subtotal = updatedProducts.reduce((sum, item) => sum + (item.quantity * item.price || 0), 0);
//     // const netTotal = subtotal + saleData.prev_due;



//     const subtotal = updatedProducts.reduce((sum, item) => sum + (item.quantity * item.price || 0), 0);
// const netTotal = subtotal + saleData.prev_due;
// const dueBill = netTotal - saleData.paidBill;

  
//     setSaleData({
//       ...saleData,
//       products: updatedProducts,
//       subtotal,
//       netTotal,
//       dueBill: netTotal - saleData.paidBill,
//     });
//   };
  

//   const handlePaidChange = (e) => {
//     const paidBill = parseFloat(e.target.value) || 0;
//     setSaleData((prev) => ({
//       ...prev,
//       paidBill,
//       dueBill: prev.netTotal - paidBill,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     // Basic validation
//     if (!saleData.customer || !saleData.orderDate || !saleData.products.length) {
//       alert("Please fill in all fields.");
//       return;
//     }
  
//     axios.post("http://localhost:5000/api/sales", saleData)
//       .then(() => alert("Sale successful"))
//       .catch((err) => console.error("Error making sale", err));
//   };
  

//   return (
 

//     <div className="right-contentDashboard w-98">

//     <div className="container-fluid mt-4">
//       <div className="card">
//         <div className="card-header d-flex justify-content-between align-items-center">
//           <h3 className="card-title"><b>Make a Sell</b></h3>
//           <button className="btn btn-primary btn-sm rounded-0" data-toggle="modal" data-target=".myModal">
//             <i className="fas fa-plus"></i> Add Customer
//           </button>
//         </div>

//         <div className="card-body">
//           <form onSubmit={handleSubmit}>
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="form-group">
//                   <label>Customer Name</label>
//                   <select
//                     className="form-control"
//                     value={saleData.customer}
//                     onChange={(e) => setSaleData({ ...saleData, customer: e.target.value })}
//                     >
//                     <option value="">Select a customer</option>
//                     {customers.map((c) => (
//                       <option key={c._id} value={c._id}>{c.name}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <label>Order Date</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   value={saleData.orderDate}
//                   onChange={(e) => setSaleData({ ...saleData, orderDate: e.target.value })}
//                 />
//               </div>
//             </div>

//             {/* Product Table */}
//             <div className="card p-4 bg-light">
//               <table className="table table-bordered">
//                 <thead className="thead-dark">
//                   <tr>
//                     <th>#</th>
//                     <th>Product</th>
//                     <th>Total Quantity</th>
//                     <th>Price</th>
//                     <th>Order Quantity</th>
//                     <th>Total Price</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {saleData.products.map((item, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         <select
//                           className="form-control"
//                           value={item.product}
//                           onChange={(e) => handleProductChange(index, "product", e.target.value)}
//                         >
//                           <option value="">Select a product</option>
//                           {products.map((p) => (
//                             <option key={p._id} value={p._id}>{p.product_name}</option>
//                         ))}
//                         </select>
//                       </td>
//                       <td><input type="number" className="form-control" readOnly value={item.quantity || 0} /></td>
//                       <td><input type="number" className="form-control" value={item.price || 0} onChange={(e) => handleProductChange(index, "price", e.target.value)} /></td>
//                       <td><input type="number" className="form-control" value={item.quantity || 1} onChange={(e) => handleProductChange(index, "quantity", e.target.value)} /></td>
//                       <td>{(item.quantity * item.price).toFixed(2)}</td>
//                       <td>
//                         <button className="btn btn-danger btn-sm" onClick={() => setSaleData({ ...saleData, products: saleData.products.filter((_, i) => i !== index) })}>Remove</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button type="button" className="btn btn-success" onClick={() => setSaleData({
//   ...saleData, 
//   products: [...saleData.products, { product: "", quantity: 1, price: 0 }]
// })}>
//   Add Product
// </button>

//             </div>

//             {/* Invoice Section */}
//             <div className="card p-3 bg-light">
//               <div className="form-group">
//                 <label>Subtotal</label>
//                 <input type="number" className="form-control" value={saleData.subtotal.toFixed(2)} readOnly />
//               </div>
//               <div className="form-group">
//                 <label>Previous Due</label>
//                 <input type="number" className="form-control" value={saleData.prev_due} onChange={(e) => setSaleData({ ...saleData, prev_due: parseFloat(e.target.value) || 0 })} />
//               </div>
//               <div className="form-group">
//                 <label>Net Total</label>
//                 <input type="number" className="form-control" value={saleData.netTotal.toFixed(2)} readOnly />
//               </div>
//               <div className="form-group">
//                 <label>Paid Bill</label>
//                 <input type="number" className="form-control" value={saleData.paidBill} onChange={handlePaidChange} />
//               </div>
//               <div className="form-group">
//                 <label>Due Bill</label>
//                 <input type="number" className="form-control" value={saleData.dueBill.toFixed(2)} readOnly />
//               </div>
//             </div>

//             <button type="submit" className="btn btn-success btn-block">Make Sale</button>
//           </form>
//         </div>
//       </div>
//     </div>
//                         </div>
//   );
// }

// export default Newsell;



// import { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

// function Newsell() {
//   const [customers, setCustomers] = useState([]);
//   const [products, setProducts] = useState([]);
//   // const [paymentMethods, setPaymentMethods] = useState([]);
//   const [loadingCustomers, setLoadingCustomers] = useState(true);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [loadingPaymentMethods, setLoadingPaymentMethods] = useState(true);

//   const [formData, setFormData] = useState({
//     supplierId: "",
//     purchaseDate: "",
//     productId: "",
//     stockQuantity: "",
//     buyPrice: "",
//     purchaseQuantity: "",
//     sellPrice: "",
//     subtotal: "",
//     prevDue: "",
//     netTotal: "",
//     paidBill: "",
//     dueBill: "",
//     paymentMethod: "",
//   });

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/customers")
//       .then((res) => {
//         setCustomers(res.data);
//         setLoadingCustomers(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching customers", err);
//         setLoadingCustomers(false);
//       });

//     axios.get("http://localhost:5000/api/stocks")
//       .then((res) => {
//         setProducts(res.data);
//         setLoadingProducts(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products", err);
//         setLoadingProducts(false);
//       });

//     // axios.get("http://localhost:5000/api/payment-methods")
//     //   .then((res) => {
//     //     setPaymentMethods(res.data);
//     //     setLoadingPaymentMethods(false);
//     //   })
//     //   .catch((err) => {
//     //     console.error("Error fetching payment methods", err);
//     //     setLoadingPaymentMethods(false);
//     //   });
//   }, []);

//   const handleProductChange = (index, field, value) => {
//     const updatedProducts = [...saleData.products];
//     updatedProducts[index] = {
//       ...updatedProducts[index],
//       [field]: field === "quantity" || field === "price" ? parseFloat(value) || 0 : value,
//     };

//     const subtotal = updatedProducts.reduce(
//       (sum, item) => sum + (item.quantity || 0) * (item.price || 0),
//       0
//     );
//     const netTotal = subtotal + saleData.prev_due;
//     const dueBill = netTotal - saleData.paidBill;

//     setSaleData({
//       ...saleData,
//       products: updatedProducts,
//       subtotal,
//       netTotal,
//       dueBill,
//     });
//   };

//   const handlePaidChange = (e) => {
//     const paidBill = parseFloat(e.target.value) || 0;
//     setSaleData((prev) => ({
//       ...prev,
//       paidBill,
//       dueBill: prev.netTotal - paidBill,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!saleData.customer || !saleData.orderDate || !saleData.products.some((p) => p.product)) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     axios.post("http://localhost:5000/api/sales", saleData)
//       .then(() => alert("Sale successful"))
//       .catch((err) => console.error("Error making sale", err));
//   };

//   if (loadingCustomers || loadingProducts || loadingPaymentMethods) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="right-contentDashboard w-98">
//       <div className="container-fluid mt-4">
//         <div className="card">
//           <div className="card-header d-flex justify-content-between align-items-center">
//             <h3 className="card-title"><b>Make a Sell</b></h3>
//             <button className="btn btn-primary btn-sm rounded-0" data-toggle="modal" data-target=".myModal">
//               <i className="fas fa-plus"></i> Add Customer
//             </button>
//           </div>

//           <div className="card-body">
//             <form onSubmit={handleSubmit}>
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="form-group">
//                     <label>Customer Name</label>
//                     <select
//                       className="form-control"
//                       value={saleData.customer}
//                       onChange={(e) => setSaleData({ ...saleData, customer: e.target.value })}
//                     >
//                       <option value="">Select a customer</option>
//                       {customers.map((c) => (
//                         <option key={c._id} value={c._id}>{c.name}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <label>Order Date</label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     value={saleData.orderDate}
//                     onChange={(e) => setSaleData({ ...saleData, orderDate: e.target.value })}
//                   />
//                 </div>
//               </div>

//               {/* Product Table */}
//               <div className="card p-4 bg-light">
//                 <table className="table table-bordered">
//                   <thead className="thead-dark">
//                     <tr>
//                       <th>#</th>
//                       <th>Product</th>
//                       <th>Total Quantity</th>
//                       <th>Price</th>
//                       <th>Order Quantity</th>
//                       <th>Total Price</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {saleData.products.map((item, index) => (
//                       <tr key={index}>
//                         <td>{index + 1}</td>
//                         <td>
//                         <select
// name="productId"
// id="p_product_name"
// className="form-control form-control-sm select2"
// value={formData.productId}
// onChange={handleProductChange} // Updated here
// >
// <option value="" disabled>
//   Select a product
// </option>
// {products.map((product) => (
//   <option key={product._id} value={product._id}>
//     {product.stock_name}
//   </option>
// ))}
// </select>
//                         </td>
//                         <td><input type="number" className="form-control" readOnly value={item.quantity || 0} /></td>
//                         <td><input type="number" className="form-control" value={item.price || 0} onChange={(e) => handleProductChange(index, "price", e.target.value)} /></td>
//                         <td><input type="number" className="form-control" value={item.quantity || 1} onChange={(e) => handleProductChange(index, "quantity", e.target.value)} /></td>
//                         <td>{(item.quantity * item.price).toFixed(2)}</td>
//                         <td>
//                           <button
//                             className="btn btn-danger btn-sm"
//                             onClick={() => setSaleData({ ...saleData, products: saleData.products.filter((_, i) => i !== index) })}
//                             disabled={saleData.products.length <= 1}
//                           >
//                             Remove
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 <button
//                   type="button"
//                   className="btn btn-success"
//                   onClick={() => setSaleData({
//                     ...saleData,
//                     products: [...saleData.products, { product: "", quantity: 1, price: 0 }]
//                   })}
//                 >
//                   Add Product
//                 </button>
//               </div>

//               {/* Invoice Section */}
//               <div className="card p-3 bg-light">
//                 <div className="form-group">
//                   <label>Subtotal</label>
//                   <input type="number" className="form-control" value={saleData.subtotal.toFixed(2)} readOnly />
//                 </div>
//                 <div className="form-group">
//                   <label>Previous Due</label>
//                   <input type="number" className="form-control" value={saleData.prev_due} onChange={(e) => setSaleData({ ...saleData, prev_due: parseFloat(e.target.value) || 0 })} />
//                 </div>
//                 <div className="form-group">
//                   <label>Net Total</label>
//                   <input type="number" className="form-control" value={saleData.netTotal.toFixed(2)} readOnly />
//                 </div>
//                 <div className="form-group">
//                   <label>Paid Bill</label>
//                   <input type="number" className="form-control" value={saleData.paidBill} onChange={handlePaidChange} />
//                 </div>
//                 <div className="form-group">
//                   <label>Due Bill</label>
//                   <input type="number" className="form-control" value={saleData.dueBill.toFixed(2)} readOnly />
//                 </div>
//               </div>

//               <button type="submit" className="btn btn-success btn-block">Make Sale</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Newsell;




import { useState, useEffect } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css"; 

function Newsell() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingCustomers, setLoadingCustomers] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const [formData, setFormData] = useState({
    customerId: "",    
    purchaseDate: "",  
    products: [{ productId: "", quantity: 1, price: 0 }],
    subtotal: 0,  
    prevDue: 0,         
    netTotal: 0,       
    paidBill: 0,          
    dueBill: 0,           
  });

  useEffect(() => {

    axios.get("http://localhost:5000/api/customers")
      .then((res) => {
        setCustomers(res.data);
        setLoadingCustomers(false);
      })
      .catch((err) => {
        console.error("Error fetching customers", err);
        setLoadingCustomers(false);
      });

    axios.get("http://localhost:5000/api/stocks")
      .then((res) => {
        setProducts(res.data);
        setLoadingProducts(false);
      })
      .catch((err) => {
        console.error("Error fetching products", err);
        setLoadingProducts(false);
      });
  }, []);

  
  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...formData.products];

    if (field === "productId") {
     
      const selectedProduct = products.find((product) => product._id === value);
      
      if (selectedProduct) {
        updatedProducts[index] = {
          ...updatedProducts[index],
          productId: value,
          price: selectedProduct.price, 
          quantity: 1,
        };
      }
    } else {

      updatedProducts[index] = {
        ...updatedProducts[index],
        [field]: field === "quantity" || field === "price" ? parseFloat(value) || 0 : value,
      };
    }

  
    const subtotal = updatedProducts.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const netTotal = subtotal + formData.prevDue;
    const dueBill = netTotal - formData.paidBill;

    setFormData({
      ...formData,
      products: updatedProducts,
      subtotal,
      netTotal,
      dueBill,
    });
  };


  const handlePaidChange = (e) => {
    const paidBill = parseFloat(e.target.value) || 0;
    setFormData((prev) => ({
      ...prev,
      paidBill,
      dueBill: prev.netTotal - paidBill,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!formData.customerId || !formData.purchaseDate || formData.products.some((p) => !p.productId)) {
      alert("Please fill in all fields.");
      return;
    }

    axios.post("http://localhost:5000/api/sales", formData)
      .then(() => alert("Sale successful"))
      .catch((err) => console.error("Error making sale", err));
  };

  if (loadingCustomers || loadingProducts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="right-contentDashboard w-98">
      <div className="container-fluid mt-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3 className="card-title"><b>Make a Sale</b></h3>
            <button className="btn btn-primary btn-sm rounded-0" data-toggle="modal" data-target=".myModal">
              <i className="fas fa-plus"></i> Add Customer
            </button>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit}>
            
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Customer Name</label>
                    <select
                      className="form-control"
                      value={formData.customerId}
                      onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
                    >
                      <option value="">Select a customer</option>
                      {customers.map((customer) => (
                        <option key={customer._id} value={customer._id}>{customer.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label>Order Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={formData.purchaseDate}
                    onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                  />
                </div>
              </div>

              {/* Product Table */}
              <div className="card p-4 bg-light">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Total Quantity</th>
                      <th>Price</th>
                      <th>Order Quantity</th>
                      <th>Total Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.products.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <select
                            className="form-control"
                            value={item.productId}
                            onChange={(e) => handleProductChange(index, "productId", e.target.value)}
                          >
                            <option value="">Select a product</option>
                            {products.map((product) => (
                              <option key={product._id} value={product._id}>
                                {product.stock_name}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td><input type="number" className="form-control" readOnly value={item.quantity} /></td>
                        <td><input type="number" className="form-control" value={item.price} onChange={(e) => handleProductChange(index, "price", e.target.value)} /></td>
                        <td><input type="number" className="form-control" value={item.quantity} onChange={(e) => handleProductChange(index, "quantity", e.target.value)} /></td>
                        <td>{(item.quantity * item.price).toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => setFormData({ ...formData, products: formData.products.filter((_, i) => i !== index) })}
                            disabled={formData.products.length <= 1}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => setFormData({
                    ...formData,
                    products: [...formData.products, { productId: "", quantity: 0, price: 0 }]
                  })}
                >
                  Add Product
                </button>
              </div>

              {/* Invoice Section */}
              <div className="card p-3 bg-light">
                <div className="form-group">
                  <label>Subtotal</label>
                  <input type="number" className="form-control" value={formData.subtotal.toFixed(2)} readOnly />
                </div>
                <div className="form-group">
                  <label>Previous Due</label>
                  <input
                    type="number"
                    className="form-control"
                    value={formData.prevDue}
                    onChange={(e) => setFormData({ ...formData, prevDue: parseFloat(e.target.value) || 0 })}
                  />
                </div>
                <div className="form-group">
                  <label>Net Total</label>
                  <input type="number" className="form-control" value={formData.netTotal.toFixed(2)} readOnly />
                </div>
                <div className="form-group">
                  <label>Paid Bill</label>
                  <input type="number" className="form-control" value={formData.paidBill} onChange={handlePaidChange} />
                </div>
                <div className="form-group">
                  <label>Due Bill</label>
                  <input type="number" className="form-control" value={formData.dueBill.toFixed(2)} readOnly />
                </div>
              </div>

              <button type="submit" className="btn btn-success btn-block">Make Sale</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsell;
