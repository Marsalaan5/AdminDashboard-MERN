import { useState } from 'react';

function AddProduct() {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null,
  });

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
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the data, possibly send it to a backend API
    console.log('Product Data:', productData);
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
        <div className="d-flex">
          <div className="justify-content-center">
            <button
              type="button"
              className="btn btn-white btn-icon-text my-2 me-3 d-inline-flex align-items-center"
            >
              <i className="fe fe-download me-2 fs-14"></i> Import
            </button>
            <button
              type="button"
              className="btn btn-white btn-icon-text my-2 me-3 d-inline-flex align-items-center"
            >
              <i className="fe fe-filter me-2 fs-14"></i> Filter
            </button>
            <button
              type="button"
              className="btn btn-primary my-2 btn-icon-text d-inline-flex align-items-center"
            >
              <i className="fe fe-download-cloud me-2 fs-14"></i> Download Report
            </button>
          </div>
        </div>
      </div>

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
