

// import { useState, useEffect } from "react";
// import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css"; 

// function Newsell() {
//   const [customers, setCustomers] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loadingCustomers, setLoadingCustomers] = useState(true);
//   const [loadingProducts, setLoadingProducts] = useState(true);

//   const [formData, setFormData] = useState({
//     customerId: "",    
//     purchaseDate: "",  
//     products: [{ productId: "", quantity: 1, price: 0 }],
//     subtotal: 0,  
//     prevDue: 0,         
//     netTotal: 0,       
//     paidBill: 0,          
//     dueBill: 0,           
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
//   }, []);

  
//   const handleProductChange = (index, field, value) => {
//     const updatedProducts = [...formData.products];

//     if (field === "productId") {
     
//       const selectedProduct = products.find((product) => product._id === value);
      
//       if (selectedProduct) {
//         updatedProducts[index] = {
//           ...updatedProducts[index],
//           productId: value,
//           price: selectedProduct.price, 
//           quantity: 1,
//         };
//       }
//     } else {

//       updatedProducts[index] = {
//         ...updatedProducts[index],
//         [field]: field === "quantity" || field === "price" ? parseFloat(value) || 0 : value,
//       };
//     }

  
//     const subtotal = updatedProducts.reduce((sum, item) => sum + (item.quantity * item.price), 0);
//     const netTotal = subtotal + formData.prevDue;
//     const dueBill = netTotal - formData.paidBill;

//     setFormData({
//       ...formData,
//       products: updatedProducts,
//       subtotal,
//       netTotal,
//       dueBill,
//     });
//   };


//   const handlePaidChange = (e) => {
//     const paidBill = parseFloat(e.target.value) || 0;
//     setFormData((prev) => ({
//       ...prev,
//       paidBill,
//       dueBill: prev.netTotal - paidBill,
//     }));
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();

  
//     if (!formData.customerId || !formData.purchaseDate || formData.products.some((p) => !p.productId)) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     axios.post("http://localhost:5000/api/sales", formData)
//       .then(() => alert("Sale successful"))
//       .catch((err) => console.error("Error making sale", err));
//   };

//   if (loadingCustomers || loadingProducts) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="right-contentDashboard w-98">
//       <div className="container-fluid mt-4">
//         <div className="card">
//           <div className="card-header d-flex justify-content-between align-items-center">
//             <h3 className="card-title"><b>Make a Sale</b></h3>
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
//                       value={formData.customerId}
//                       onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
//                     >
//                       <option value="">Select a customer</option>
//                       {customers.map((customer) => (
//                         <option key={customer._id} value={customer._id}>{customer.name}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <label>Order Date</label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     value={formData.purchaseDate}
//                     onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
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
//                     {formData.products.map((item, index) => (
//                       <tr key={index}>
//                         <td>{index + 1}</td>
//                         <td>
//                           <select
//                             className="form-control"
//                             value={item.productId}
//                             onChange={(e) => handleProductChange(index, "productId", e.target.value)}
//                           >
//                             <option value="">Select a product</option>
//                             {products.map((product) => (
//                               <option key={product._id} value={product._id}>
//                                 {product.stock_name}
//                               </option>
//                             ))}
//                           </select>
//                         </td>
//                         <td><input type="number" className="form-control" readOnly value={item.quantity} /></td>
//                         <td><input type="number" className="form-control" value={item.price} onChange={(e) => handleProductChange(index, "price", e.target.value)} /></td>
//                         <td><input type="number" className="form-control" value={item.quantity} onChange={(e) => handleProductChange(index, "quantity", e.target.value)} /></td>
//                         <td>{(item.quantity * item.price).toFixed(2)}</td>
//                         <td>
//                           <button
//                             className="btn btn-danger btn-sm"
//                             onClick={() => setFormData({ ...formData, products: formData.products.filter((_, i) => i !== index) })}
//                             disabled={formData.products.length <= 1}
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
//                   onClick={() => setFormData({
//                     ...formData,
//                     products: [...formData.products, { productId: "", quantity: 0, price: 0 }]
//                   })}
//                 >
//                   Add Product
//                 </button>
//               </div>

//               {/* Invoice Section */}
//               <div className="card p-3 bg-light">
//                 <div className="form-group">
//                   <label>Subtotal</label>
//                   <input type="number" className="form-control" value={formData.subtotal.toFixed(2)} readOnly />
//                 </div>
//                 <div className="form-group">
//                   <label>Previous Due</label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     value={formData.prevDue}
//                     onChange={(e) => setFormData({ ...formData, prevDue: parseFloat(e.target.value) || 0 })}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Net Total</label>
//                   <input type="number" className="form-control" value={formData.netTotal.toFixed(2)} readOnly />
//                 </div>
//                 <div className="form-group">
//                   <label>Paid Bill</label>
//                   <input type="number" className="form-control" value={formData.paidBill} onChange={handlePaidChange} />
//                 </div>
//                 <div className="form-group">
//                   <label>Due Bill</label>
//                   <input type="number" className="form-control" value={formData.dueBill.toFixed(2)} readOnly />
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

function NewBuy() {
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, name: 'Cash' },
    { id: 2, name: 'Credit Card' },
    { id: 3, name: 'Bank Transfer' },
    { id: 4, name: 'PayPal' },
  ]);



  const [formData, setFormData] = useState({
    supplierId: "",
    purchaseDate: "",
    productId: "",
    stockQuantity: "",
    buyPrice: "",
    purchaseQuantity: "",
    sellPrice: "",
    subtotal: "",
    prevDue: "",
    netTotal: "",
    paidBill: "",
    dueBill: "",
    paymentMethod: "",
  });


  



  useEffect(() => {
    const fetchData = async () => {
      try {
        const suppliersResponse = await axios.get(
          "http://localhost:5000/api/customers"
        );
        setSuppliers(suppliersResponse.data);

        const productsResponse = await axios.get(
          "http://localhost:5000/api/stocks"
        );
        setProducts(productsResponse.data);

        // const paymentMethodsResponse = await axios.get(
        //   "http://localhost:5000/api/payment-methods"
        // );
        // setPaymentMethods(paymentMethodsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const handleProductChange = async (e) => {
    const selectedProductId = e.target.value;
    console.log('Selected Product ID:', selectedProductId);
    setFormData((prev) => ({
      ...prev,
      productId: selectedProductId, 
    }));
  
    if (selectedProductId) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/stocks/${selectedProductId}`
        );
        const stock = response.data;
        console.log("Product details fetched:", stock); 
  
        setFormData((prev) => ({
          ...prev,
          stockQuantity: stock.alert_quantity,
          buyPrice: stock.buy_price,
          sellPrice:stock.selling_price,
          subtotal: (stock.buy_price * (formData.purchaseQuantity || 0)).toFixed(2),
        }));
      } catch (error) {
        console.error("Error fetching product details:", error);
        alert("Failed to fetch product details.");
      }
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === 'prevDue' || name === 'netTotal' || name === 'dueBill'
      ? parseFloat(value) || 0
      : value;

    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  useEffect(() => {
    if (formData.buyPrice && formData.purchaseQuantity > 0) {
      const subtotal = parseFloat(formData.buyPrice) * parseInt(formData.purchaseQuantity);
      setFormData((prevData) => ({
        ...prevData,
        subtotal: subtotal.toFixed(2),
      }));
    }
  }, [formData.buyPrice, formData.purchaseQuantity]);

  useEffect(() => {
    const netTotal = parseFloat(formData.subtotal) + parseFloat(formData.prevDue || 0);
    setFormData((prevData) => ({
      ...prevData,
      netTotal: netTotal.toFixed(2),
    }));
  }, [formData.subtotal, formData.prevDue]);

  useEffect(() => {
    const dueBill = formData.netTotal - formData.paidBill;
    setFormData((prevData) => ({
      ...prevData,
      dueBill: dueBill.toFixed(2),
    }));
  }, [formData.netTotal, formData.paidBill]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.supplierId ||
      !formData.purchaseDate ||
      !formData.productId ||
      !formData.buyPrice ||
      !formData.purchaseQuantity ||
      !formData.paymentMethod
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    // Ensure the purchase quantity doesn't exceed available stock
    if (formData.purchaseQuantity > formData.stockQuantity) {
      alert("Cannot purchase more than the available stock!");
      return;
    }

    const payload = {
      ...formData,
      purchaseDate: new Date(formData.purchaseDate).toISOString(),
    };

    axios
      .post("http://localhost:5000/api/purchase", payload)
      .then((response) => {
        console.log("Product purchased successfully", response);
        alert("Product purchased successfully");
      })
      .catch((error) => {
        console.error("Error purchasing product:", error);
        alert("Error purchasing product");
      });
  };

return (
  <div className="right-contentDashboard w-98">
    <section>
      <div className="container-fluid mt-5">
        <div className="card mt-5">
          <div className="card-header">
            <h3 className="card-title">
              <b>Buy Product</b>
            </h3>
            <button
              type="button"
              className="btn btn-primary btn-sm float-right rounded-0"
              data-toggle="modal"
              data-target=".suppliarModal"
            >
              <i className="fas fa-plus"></i> Add new
            </button>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="card-header">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="p_supliar">Supplier Name *</label>
                    <select
                      name="supplierId"
                      id="p_supliar"
                      className="form-control select2"
                      value={formData.supplierId}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>
                        Select a Supplier
                      </option>
                      {suppliers.map((supplier) => (
                        <option key={supplier.id} value={supplier.id}>
                          {supplier.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="puchar_date">Purchase date *</label>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      name="purchaseDate"
                      id="puchar_date"
                      value={formData.purchaseDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="p_product_name">Purchase product *</label>
                    <select
name="productId"
id="p_product_name"
className="form-control form-control-sm select2"
value={formData.productId}
onChange={handleProductChange} 
>
<option value="" disabled>
  Select a product
</option>
{products.map((product) => (
  <option key={product._id} value={product._id}>
    {product.stock_name}
  </option>
))}
</select>
                  </div>
                </div>

                <div className="col-md-6">
                  <a
                    href="/addstocks"
                    target="_blank"
                    className="btn btn-success rounded-0"
                    style={{ marginTop: "30px" }}
                  >
                    Add new product
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3 col-lg-3">
                  <div className="form-group">
                    <label htmlFor="p_p_quantity">Total Quantity *</label>
                    <input
                      type="number"
                      className="form-control"
                      name="stockQuantity"
                      id="p_p_quantity"
                      placeholder="Stock quantity"
                      value={formData.stockQuantity}
                      onChange={handleInputChange}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-3 col-lg-3">
                  <div className="form-group">
                    <label htmlFor="p_p_price">Price *</label>
                    <input
                      type="number"
                      className="form-control"
                      name="buyPrice"
                      id="p_p_price"
                      placeholder="Purchase price"
                      value={formData.buyPrice}
                      onChange={handleInputChange}
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-md-3 col-lg-3">
                  <div className="form-group">
                    <label htmlFor="p_pn_quantity">Order quantity *</label>
                    <input
                      type="number"
                      className="form-control"
                      name="purchaseQuantity"
                      id="p_pn_quantity"
                      placeholder="Purchase quantity"
                      value={formData.purchaseQuantity}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="col-md-3 col-lg-3">
                  <div className="form-group">
                    <label htmlFor="p_p_sell_price">Sell price *</label>
                    <input
                      type="number"
                      className="form-control"
                      name="sellPrice"
                      id="p_p_sell_price"
                      placeholder="Sell price"
                      value={formData.sellPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="card" style={{ background: "#f1eaea40" }}>
                    <div className="card-body">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="p_subtotal">Subtotal</label>
                          </div>
                          <div className="col-md-8">
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              name="subtotal"
                              id="p_subtotal"
                              value={formData.subtotal}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="supliar_prev_total_due">
                              Previous Total Due
                            </label>
                          </div>
                          <div className="col-md-8">
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              name="prevDue"
                              id="supliar_prev_total_due"
                              value={formData.prevDue}
                              onChange={handleInputChange}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="p_netTotal">Net Total</label>
                          </div>
                          <div className="col-md-8">
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              name="netTotal"
                              id="p_netTotal"
                              value={formData.netTotal}
                              onChange={handleInputChange}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="p_paidBill">Paid Bill</label>
                          </div>
                          <div className="col-md-8">
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              name="paidBill"
                              id="p_paidBill"
                              value={formData.paidBill}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="p_dueBill">Due Bill</label>
                          </div>
                          <div className="col-md-8">
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              name="dueBill"
                              id="p_dueBill"
                              value={formData.dueBill}
                              onChange={handleInputChange}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="p_payMethode">
                              Payment Method
                            </label>
                          </div>
                          <div className="col-md-8">
                            <select
                              name="paymentMethod"
                              id="p_payMethode"
                              className="form-control form-control-sm select2"
                              value={formData.paymentMethod}
                              onChange={handleInputChange}
                            >
                              <option value="" disabled>
                                Select a payment method
                              </option>
                              {paymentMethods.map((method) => (
                                <option key={method.id} value={method.name}>
                                  {method.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mt-4 rounded-0"
                        >
                          Purchase product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
);
}

export default NewBuy;
