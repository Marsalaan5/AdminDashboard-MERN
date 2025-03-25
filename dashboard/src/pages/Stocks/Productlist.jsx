import { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/stock_categories")
      .then((response) => setStocks(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="right-contentDashboard w-98">

    <section >
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <b>Total Product List</b>
            </h3>
            <a href="/addstocks" className="btn btn-primary btn-sm float-right rounded-0" style={{ margin: "8px" }}>
              <i className="fas fa-plus"></i> New Product
            </a>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Product name</th>
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
                      <tr key={stocks._id}>
                        <td>{index + 1}</td>
                        <td>{stocks.stocks_name}</td>
                        <td>{stocks.brand}</td>
                        <td>{stocks.s_catagory?.name || "N/A"}</td>
                        <td>{stocks.s_source}</td>
                        <td>{stocks.alert_quantity}</td>
                        <td>${stocks.buy_price}</td>
                        <td>${stocks.selling_price}</td>
                        <td>
                          <button className="btn btn-sm btn-warning">Edit</button>
                          <button className="btn btn-sm btn-danger ml-2">Delete</button>
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
                  </div>
  );
}

export default ProductList;
