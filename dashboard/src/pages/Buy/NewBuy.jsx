import React, { useState, useEffect } from 'react';

function NewBuy() {
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  
  const [formData, setFormData] = useState({
    supplierId: '',
    purchaseDate: '',
    productId: '',
    stockQuantity: '',
    buyPrice: '',
    purchaseQuantity: '',
    sellPrice: '',
    subtotal: '',
    prevDue: '',
    netTotal: '',
    paidBill: '',
    dueBill: '',
    paymentMethod: '',
  });

  // Fetch data when the component mounts
  useEffect(() => {
    // Fetch suppliers
    fetch('/api/suppliers')
      .then(response => response.json())
      .then(data => setSuppliers(data))
      .catch(error => console.error('Error fetching suppliers:', error));

    // Fetch products
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

    // Fetch payment methods
    fetch('/api/payment-methods')
      .then(response => response.json())
      .then(data => setPaymentMethods(data))
      .catch(error => console.error('Error fetching payment methods:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., POST request to backend)
    console.log('Form Data:', formData);
    // Add the API call to submit the data
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
                        <option selected disabled>Select a Supplier</option>
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
                        type="text"
                        className="form-control datepicker"
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
                        onChange={handleInputChange}
                      >
                        <option selected disabled>Select a product</option>
                        {products.map((product) => (
                          <option key={product.id} value={product.id}>
                            {product.product_name} ({product.brand_name})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <a
                      href="index.php?page=add_product"
                      target="_blank"
                      className="btn btn-success rounded-0"
                      style={{ marginTop: '30px' }}
                    >
                      Add new product
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 col-lg-3">
                    <div className="form-group">
                      <label htmlFor="p_p_quantity">Stock Quantity *</label>
                      <input
                        type="number"
                        className="form-control"
                        name="stockQuantity"
                        id="p_p_quantity"
                        placeholder="stock quantity"
                        value={formData.stockQuantity}
                        onChange={handleInputChange}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3">
                    <div className="form-group">
                      <label htmlFor="p_p_price">Buy price *</label>
                      <input
                        type="number"
                        className="form-control"
                        name="buyPrice"
                        id="p_p_price"
                        placeholder="Purchase price"
                        value={formData.buyPrice}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-3 col-lg-3">
                    <div className="form-group">
                      <label htmlFor="p_pn_quantity">Purchase quantity *</label>
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

              {/* Additional Form Fields */}
              <div className="card-body">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="card" style={{ background: '#f1eaea40' }}>
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
                              <label htmlFor="supliar_prev_total_due">Previous Total Due</label>
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
                              <label htmlFor="p_payMethode">Payment Method</label>
                            </div>
                            <div className="col-md-8">
                              <select
                                name="paymentMethod"
                                id="p_payMethode"
                                className="form-control form-control-sm select2"
                                value={formData.paymentMethod}
                                onChange={handleInputChange}
                              >
                                <option selected disabled>Select a payment method</option>
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
