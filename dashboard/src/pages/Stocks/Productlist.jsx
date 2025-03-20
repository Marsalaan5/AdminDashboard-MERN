import { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
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
            <a href="/add-product" className="btn btn-primary btn-sm float-right rounded-0" style={{ margin: "8px" }}>
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
                  {products.length > 0 ? (
                      products.map((product, index) => (
                      <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td>{product.product_name}</td>
                        <td>{product.brand}</td>
                        <td>{product.p_catagory?.name || "N/A"}</td>
                        <td>{product.product_source}</td>
                        <td>{product.alert_quantity}</td>
                        <td>${product.buy_price}</td>
                        <td>${product.selling_price}</td>
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
