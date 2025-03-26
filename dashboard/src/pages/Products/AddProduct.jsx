
import { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [productData, setProductData] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    description: '',
    image: null,
  });
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setProductData({
      ...productData,
      image: e.target.files[0], // Save the file object to state
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    

    // Append form data values
    formData.append('name', productData.name);
    formData.append('category', productData.category);
    formData.append('price', productData.price);
    formData.append('description', productData.description);
    if (productData.image) {
      formData.append('image', productData.image); // Add image file
    }

    try {
      // Send POST request to backend with FormData
      const response = await axios.post('http://localhost:5000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the header to handle file uploads
        },
      });

      console.log('Product added successfully:', response.data);

      
      setSuccessMessage('Product added successfully!');
      
     
      setProductData({
        name: '',
        category: '',
        price: '',
        description: '',
        image: null,
      });

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error adding product:', error);
      // Show error message
      setErrorMessage('Error adding product. Please try again!');
      
   
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <div className="right-contentDashboard w-98">
      <div className="container-fluid">
        <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
          <div>
            <h2 className="main-content-title fs-24 mb-1 text-dark">Add Product</h2>
            <nav aria-label="breadcrumb" className="my-0">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#" role="button" tabIndex="0">
                    Products
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Product
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Display Success Message */}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        {/* Display Error Message */}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="custom-card card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      name="name"
                      value={productData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      name="category"
                      value={productData.category}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Price (USD)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={productData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={productData.description}
                      onChange={handleChange}
                      rows="4"
                      required
                    ></textarea>
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
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
