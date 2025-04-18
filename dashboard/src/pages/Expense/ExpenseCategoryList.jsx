import { useState, useEffect } from 'react';
import axios from 'axios';

function ExpenseCategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  // Fetch categories from the backend
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/expense-categories');
      setCategories(response.data);
    } catch (err) {
      setError('Failed to load categories');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/expense-categories/${categoryId}`);
        fetchCategories(); // Refetch categories after deletion
      } catch (err) {
        setError('Failed to delete category');
        console.error(err);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newCategory.name || !newCategory.description) {
      setError('Both name and description are required');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/expense-categories', newCategory);
      setShowModal(false);  // Close the modal
      fetchCategories();  // Refetch categories after adding a new one
      setNewCategory({ name: '', description: '' });  // Reset the form
    } catch (err) {
      setError('Failed to add category');
      console.error(err);
    }
  };

  if (loading) {
    return <div className="loading">Loading categories...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    //   <div className="right-contentDashboard w-98">
    //     <section >
    //     <div className="container-fluid">
    //   <div className="content-header">
      

    //     <div>
    //     <div className="row mb-2">
    //         <div className="col-sm-6">
    //           <h1 className="m-0 text-dark">Expense Categories</h1>
    //         </div>
    //         <div className="col-sm-6">
    //           <ol className="breadcrumb float-sm-right">
    //             <li className="breadcrumb-item"><a href="#">Home</a></li>
    //             <li className="breadcrumb-item active">Expense Categories</li>
    //           </ol>
    //         </div>
    //       </div>
    //       <div className="card">
    //         <div className="card-header">
    //           <h3 className="card-title"><b>All Expense Categories</b></h3>
    //           <button
    //             type="button"
    //             className="btn btn-primary btn-sm float-right rounded-0"
    //             onClick={() => setShowModal(true)}  // Show the modal
    //           >
    //             <i className="fas fa-plus"></i> Add Expense Category
    //           </button>
                
    //         </div>
    //     </div>
    //   </div>

    //         <div className="card-body">
    //           <div className="table-responsive">
    //             <table className="table table-bordered table-hover text-center">
    //               <thead>
    //                 <tr>
    //                   <th>SI</th>
    //                   <th>Category Name</th>
    //                   <th>Description</th>
    //                   <th>Action</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 {categories.length === 0 ? (
    //                   <tr>
    //                     <td colSpan="4">No categories available.</td>
    //                   </tr>
    //                 ) : (
    //                   categories.map((category, index) => (
    //                     <tr key={category._id}>
    //                       <td>{index + 1}</td>
    //                       <td>{category.name}</td>
    //                       <td>{category.description || 'No description'}</td>
    //                       <td>
    //                         <button
    //                           className="btn btn-danger btn-sm"
    //                           onClick={() => handleDelete(category._id)}  // Handle delete
    //                         >
    //                           Delete
    //                         </button>
    //                       </td>
    //                     </tr>
    //                   ))
    //                 )}
    //               </tbody>
    //             </table>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    <div className="right-contentDashboard w-98">
    <section>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title"><b>Expense Categories</b></h3>
            <button
              type="button"
              className="btn btn-primary btn-sm float-right rounded-0"
              onClick={() => setShowModal(true)}
            >
              <i className="fas fa-plus"></i> Add Expense Category
            </button>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              {categories.length === 0 ? (
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
                    {categories.map((category, index) => (
                      <tr key={category._id}>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(category._id)}
                          >
                            Delete
                          </button>
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Add Category
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

export default ExpenseCategoryList;
