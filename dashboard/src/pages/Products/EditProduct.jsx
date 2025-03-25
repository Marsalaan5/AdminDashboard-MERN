import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditProduct() {
  const { productId } = useParams(); // Get product ID from URL
  const navigate = useNavigate();


  const [productData, setProductData] = useState()
  const [product, setProduct] = useState({
 
    name: '',
    description: '',
    category: '',
    price: 0,
    rating: 0,
    image: '',
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const handleFileChange = (e) => {
    setProductData({
      ...productData,
      image: e.target.files[0], // Save the file object to state
    });
  };

  // Fetch the product details on component mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle form submission to update the product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${productId}`, product);
      navigate('/productlist'); // Redirect back to the product list after successful edit
    } catch (err) {
      setError('Error updating product');
    }
  };

  return (
    <div className="right-contentDashboard w-98">


    <div className="container-fluid">
      <h2>Edit Product</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-control"
              name="category"
              value={product.category}
              onChange={handleChange}
            >
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select
              className="form-control"
              name="rating"
              value={product.rating}
              onChange={handleChange}
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
          <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                      Product Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                Edit Product
                  </button>
        </form>
      )}
    </div>
    </div>
  );
}

export default EditProduct;
