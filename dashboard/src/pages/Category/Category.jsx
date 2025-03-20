import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Category() {
  const [categories, setCategories] = useState([]); // To store categories
  const [newCategory, setNewCategory] = useState({ name: '', description: '' }); // For new category
  const [showModal, setShowModal] = useState(false); // To control modal visibility

  // Fetch categories from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  // Handle form inputs for new category
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  // Submit new category
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/categories', newCategory)
      .then((response) => {
        setCategories([...categories, response.data]);
        setShowModal(false);
        setNewCategory({ name: '', description: '' });
      })
      .catch((error) => {
        console.error('Error adding category:', error);
      });
  };

  return (
    <div className="right-contentDashboard w-98">
      <section>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><b>Categories</b></h3>
              <button
                type="button"
                className="btn btn-primary btn-sm float-right rounded-0"
                onClick={() => setShowModal(true)}
              >
                <i className="fas fa-plus"></i> Add Category
              </button>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table id="categoryTable" className="display dataTable text-center">
                  <thead>
                    <tr>
                      <th>SI</th>
                      <th>Category Name</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                      <tr key={category._id}>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Category Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} aria-modal="true" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Category</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Category Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={newCategory.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={newCategory.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Save Category</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
