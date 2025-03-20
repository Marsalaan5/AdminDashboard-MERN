import { useState, useEffect } from "react";
import axios from "axios";

function Addstocks() {
  const [categories, setCategories] = useState([]);
  const [productData, setProductData] = useState({
    product_name: "",
    brand: "",
    p_catagory: "",
    product_source: "factory",
    sku: "",
    alert_quantity: "",
    buy_price: "",
    selling_price: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch categories from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        if (response.data.length > 0) {
          setCategories(response.data);
        } else {
          setCategories([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setCategories([]); // Ensure categories array is always available
      });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!productData.product_name || !productData.brand || !productData.p_catagory) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/add-product", productData);
      console.log("Product Added:", response.data);

      setSuccessMessage("Product added successfully!");
      setErrorMessage("");

      // Clear form after successful submission
      setProductData({
        product_name: "",
        brand: "",
        p_catagory: "",
        product_source: "factory",
        sku: "",
        alert_quantity: "",
        buy_price: "",
        selling_price: "",
      });

      // Remove success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage("Error adding product, please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="right-contentDashboard w-98">
      <section >
        <div className="container-fluid">
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center">
              <h3 className="card-title">
                <b>Add a new product</b>
              </h3>
              <button className="btn btn-primary btn-sm rounded-0">
                <i className="fas fa-plus"></i> Category
              </button>
            </div>

            <div className="card-body">
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              {successMessage && <div className="alert alert-success">{successMessage}</div>}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="product_name">Product Name *:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="product_name"
                        name="product_name"
                        placeholder="Enter product name"
                        value={productData.product_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="brand">Brand Name *:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="brand"
                        name="brand"
                        placeholder="Enter brand name"
                        value={productData.brand}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="p_catagory">Product Category *:</label>
                      <select
                        name="p_catagory"
                        id="p_catagory"
                        className="form-control"
                        value={productData.p_catagory}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {categories.length > 0 ? (
                          categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))
                        ) : (
                          <option value="" disabled>No categories available</option>
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="product_source">Product Source *:</label>
                      <select
                        name="product_source"
                        id="product_source"
                        className="form-control"
                        value={productData.product_source}
                        onChange={handleChange}
                        required
                      >
                        <option value="factory">Factory</option>
                        <option value="buy">Buying</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="sku">SKU:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sku"
                        name="sku"
                        placeholder="Product SKU"
                        value={productData.sku}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="alert_quantity">Alert Quantity *:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="alert_quantity"
                        name="alert_quantity"
                        placeholder="Alert quantity"
                        value={productData.alert_quantity}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="buy_price">Buying Price:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="buy_price"
                        name="buy_price"
                        placeholder="Enter buying price"
                        value={productData.buy_price}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="selling_price">Selling Price:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="selling_price"
                        name="selling_price"
                        placeholder="Enter selling price"
                        value={productData.selling_price}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <input type="reset" className="btn btn-danger mx-2" value="Reset" />
                  <button type="submit" className="btn btn-primary mx-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Addstocks;
