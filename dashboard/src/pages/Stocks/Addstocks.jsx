import { useState, useEffect } from "react";
import axios from "axios";

function Addstocks() {
  const [stockCategories, setStockCategories] = useState([]);
  const [stockData, setStockData] = useState({
    stock_name: "",
    brand: "",
    s_category: "",
    s_source: "factory",
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
      .get("http://localhost:5000/api/stock_categories")
      .then((response) => {
        if (response.data.length > 0) {
          setStockCategories(response.data);
        } else {
          setStockCategories([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setStockCategories([]); 
      });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setStockData({ ...stockData, [e.target.name]: e.target.value });
  };

 // Frontend (React)
const handleSubmit = async (e) => {
  e.preventDefault();

  // Form validation
  if (!stockData.stock_name || !stockData.brand || !stockData.s_category || !stockData.alert_quantity) {
    setErrorMessage("Please fill in all required fields.");
    return;
  }

  try {
    const response = await axios.post("http://localhost:5000/api/stocks", stockData); // Ensure this URL matches the backend route
    console.log("Stock Added:", response.data);

    setSuccessMessage("Stock added successfully!");
    setErrorMessage("");

    // Clear form after successful submission
    setStockData({
      stock_name: "",
      brand: "",
      s_category: "",
      s_source: "factory",
      sku: "",
      alert_quantity: "",
      buy_price: "",
      selling_price: "",
    });


    setTimeout(() => setSuccessMessage(""), 3000);
  } catch (error) {
    setErrorMessage("Error adding stock, please try again.");
    console.error("Error:", error);
  }
};


  return (
    <div className="right-contentDashboard w-98">
      <section>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center">
              <h3 className="card-title">
                <b>Add a new Stock</b>
              </h3>
            </div>

            <div className="card-body">
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              {successMessage && <div className="alert alert-success">{successMessage}</div>}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="stock_name">Stock Name *:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="stock_name"
                        name="stock_name"
                        placeholder="Enter stock name"
                        value={stockData.stock_name}
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
                        value={stockData.brand}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="s_category">Stock Category *:</label>
                      <select
                        name="s_category"  // Corrected to 's_category'
                        id="s_category"  // Corrected to 's_category'
                        className="form-control"
                        value={stockData.s_category}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {stockCategories.length > 0 ? (
                          stockCategories.map((category) => (
                            <option key={category._id} value={category._id}>
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
                      <label htmlFor="s_source">Stock Source *:</label>
                      <select
                        name="s_source"  // Corrected to 's_source'
                        id="s_source"  // Corrected to 's_source'
                        className="form-control"
                        value={stockData.s_source}
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
                        placeholder="Stock SKU"
                        value={stockData.sku}
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
                        value={stockData.alert_quantity}
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
                        value={stockData.buy_price}
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
                        value={stockData.selling_price}
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
