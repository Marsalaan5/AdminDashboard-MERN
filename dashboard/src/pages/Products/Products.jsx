

import { useState, useEffect } from 'react';
import axios from 'axios';
import { LuImport } from "react-icons/lu";
import { FaFilter } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Products() {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    rating: 0,
    searchQuery: '', // New state for search query
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate();

  // Fetch products from backend on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const filteredProducts = products;

  // const filteredProducts = products.filter((product) => {
  //   const searchMatch =
  //     product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
  //     product.description.toLowerCase().includes(filters.searchQuery.toLowerCase());

  //   return (
  //     searchMatch &&
  //     (filters.category === '' || product.category === filters.category) &&
  //     product.price >= filters.minPrice &&
  //     product.price <= filters.maxPrice &&
  //     product.rating >= filters.rating
  //   );
  // });

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
      setError('');
      setLoading(false);
    } catch (err) {
      setError('Error deleting product');
    }
  };

  const handleEdit = (productId) => {

    navigate(`/edit-product/${productId}`);
    console.log('Edit product with ID:', productId);

    setSuccessMessage('Product has been successfully edited!');
    setTimeout(() => setSuccessMessage(''), 3000); // Hide the success message after 3 seconds
  };

  return (
    <div className="right-contentDashboard w-98">
      <div className="container-fluid">
        <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
          <div>
            <h2 className="main-content-title fs-24 mb-1 text-dark">Product-List</h2>
            <nav aria-label="breadcrumb" className="my-0">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#" role="button" tabIndex="0">
                    Products
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Product-List
                </li>
              </ol>
            </nav>
          </div>
          <div className="header_svg d-flex ">
            <div className="justify-content-center">
              <button
                type="button"
                className="btn btn-white btn-icon-text my-2 d-inline-flex align-items-center"
              >
                <LuImport /> Import
              </button>
              <button
                type="button"
                className="btn btn-white btn-icon-text m-2 my-2 d-inline-flex align-items-center"
              >
                <FaFilter /> Filter
              </button>
              <button
                type="button"
                className="btn btn-primary m-4 my-2 btn-icon-text d-inline-flex align-items-center"
              >
                <MdDownloadForOffline /> Download Report
              </button>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}

        {/* Search Section */}
        <div className="search-bar mt-4 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products by name or description..."
            onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
            value={filters.searchQuery}
          />
        </div>

        {/* Filter Section */}
        <div className="filters mt-4 mb-4">
          <div className="row">
            <div className="col-md-3">
              <select
                className="form-control"
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                value={filters.category}
              >
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Furniture">Furniture</option>
              </select>
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder="Min Price"
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                value={filters.minPrice}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder="Max Price"
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                value={filters.maxPrice}
              />
            </div>
            <div className="col-md-3">
              <select
                className="form-control"
                onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                value={filters.rating}
              >
                <option value="0">All Ratings</option>
                <option value="1">1 Star & Up</option>
                <option value="2">2 Stars & Up</option>
                <option value="3">3 Stars & Up</option>
                <option value="4">4 Stars & Up</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="row">
          {loading && <div>Loading products...</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          {filteredProducts.map((product) => {
  console.log('Rating for product:', product.name, '-', product.rating, '| Type:', typeof product.rating);
  
  return (
    <div key={product._id} className="col-md-3 mb-4">
      <div className="card">
        <img
          src={`http://localhost:5000/uploads/${product.image}`}
          className="card-img-top"
          alt={product.name}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h5 className="card-title">{product.category}</h5>
          <p className="card-text">{product.description}</p>
          <div className="d-flex justify-content-between">
            <span>₹ {product.price}</span>
            <span>
              {''.repeat(Number(product.rating) || 0)}
              {'★'.repeat(5 - (Number(product.rating) || 0))}
            </span>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button 
              className="btn btn-warning btn-sm"
              onClick={() => handleEdit(product._id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
})}

        </div>
      </div>
    </div>
  );
}

export default Products;
