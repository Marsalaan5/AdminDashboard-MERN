


import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MyContext } from '../../context/Context';

function Category() {
  const [stockCategories, setStockCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingCategory, setLoadingCategory] = useState(false); 
  const {user} =useContext(MyContext)

  // Fetch categories from the backend
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/stock_categories');
      setStockCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setNewCategory({ name: '', description: '' }); 
  };

  // Submit new category
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newCategory.name.trim() || !newCategory.description.trim()) {
      setError('Both name and description are required!');
      return;
    }

    setLoadingCategory(true);
    try {
      await axios.post('http://localhost:5000/api/stock_categories', newCategory);
      fetchCategories();
      setShowModal(false);
      setNewCategory({ name: '', description: '' }); 
    } catch (error) {
      console.error('Error adding category:', error);
      setError('Failed to add category. Please try again.');
    } finally {
      setLoadingCategory(false);
    }
  };

  // Delete category
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this category?");
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/stock_categories/${id}`);
        fetchCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
        setError('Failed to delete category.');
      }
    }
  };

  if (loading) {
    return <div className='loading'><span>Loading...</span></div>;
  }

  if (error) {
    return <div className='error'>{error}</div>;
  }

  return (
    <div className="right-contentDashboard w-98">
      <section>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><b>Categories</b></h3>
              {user?.role === "admin" && (
                        <> 
                        <button
                type="button"
                className="btn btn-primary btn-sm float-right rounded-0"
                onClick={() => setShowModal(true)}
              >
                <i className="fas fa-plus"></i> Add Category
              </button>
            </>
              )}
            </div>

            <div className="card-body">
              <div className="table-responsive">
                {stockCategories.length === 0 ? (
                  <div>No categories available.</div>
                ) : (
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
                      {stockCategories.map((category, index) => (
                        <tr key={category._id}>
                          <td>{index + 1}</td>
                          <td>{category.name}</td>
                          <td>{category.description}</td>
                          <td>
                          {user?.role === "admin" && (
                        <>
                         <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(category._id)}
                              >
                              Delete
                            </button>
                              </>)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Category Modal */}
      {showModal && (
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} aria-modal="true" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Category</h5>
                <button type="button" className="close btn btn-blue" onClick={handleModalClose}>
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loadingCategory}
                  >
                    {loadingCategory ? 'Saving...' : 'Save Category'}
                  </button>
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
