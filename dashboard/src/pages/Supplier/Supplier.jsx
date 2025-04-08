

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function Supplier() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editSupplierData, setEditSupplierData] = useState({
    id: '',
    name: '',
    company: '',
    address: '',
    contact: '',
    total_buy: 0,
    total_paid: 0,
    total_due: 0,
  });
  
  const [newSupplierData, setNewSupplierData] = useState({
    name: '',
    company: '',
    address: '',
    contact: '',
    total_buy: 0,
    total_paid: 0,
    total_due: 0,
  });
  
  const [totalTransaction, setTotalTransaction] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalDue, setTotalDue] = useState(0);

  // Fetch suppliers data and calculate totals
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/suppliers');
        setSuppliers(response.data);

        const totalTransaction = response.data.reduce((acc, supplier) => acc + supplier.total_buy, 0);
        const totalPaid = response.data.reduce((acc, supplier) => acc + supplier.total_paid, 0);
        const totalDue = totalTransaction - totalPaid;

        setTotalTransaction(totalTransaction);
        setTotalPaid(totalPaid);
        setTotalDue(totalDue);

        setLoading(false);
      } catch (error) {
        setError("Failed to load suppliers. Please try again later.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e, isEdit = false) => {
    const { name, value } = e.target;
    const data = isEdit ? editSupplierData : newSupplierData;

    // Recalculate total due based on changes in total_buy or total_paid
    if (name === "total_buy" || name === "total_paid") {
      const newTotalBuy = name === "total_buy" ? value : data.total_buy;
      const newTotalPaid = name === "total_paid" ? value : data.total_paid;
      const newTotalDue = newTotalBuy - newTotalPaid;

      const updatedData = {
        ...data,
        [name]: value,
        total_due: newTotalDue,
      };

      isEdit ? setEditSupplierData(updatedData) : setNewSupplierData(updatedData);
    } else {
      const updatedData = {
        ...data,
        [name]: value,
      };

      isEdit ? setEditSupplierData(updatedData) : setNewSupplierData(updatedData);
    }
  };

  const handleSubmitEdit = async () => {
    if (!editSupplierData._id) {
      console.error("Supplier ID is missing!");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/suppliers/${editSupplierData._id}`,
        editSupplierData
      );
      setSuppliers((prevSuppliers) =>
        prevSuppliers.map((supplier) =>
          supplier._id === editSupplierData._id ? response.data : supplier
        )
      );
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating supplier!", error);
    }
  };

  const handleSubmitAdd = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/suppliers', newSupplierData);
      setSuppliers((prevSupplier) => [...prevSupplier, response.data]);
      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding supplier!", error);
    }
  };

  const handleDeleteSupplier = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/suppliers/${id}`);
      setSuppliers((prevSuppliers) => prevSuppliers.filter((supplier) => supplier._id !== id));
    } catch (error) {
      console.error("Error deleting supplier!", error);
    }
  };

  const handleEditSupplier = (supplier) => {
    setEditSupplierData(supplier);
    setShowEditModal(true);
  };

  const handleAddSupplier = () => {
    setNewSupplierData({
      name: '',
      company: '',
      address: '',
      contact: '',
      total_buy: 0,
      total_paid: 0,
      total_due: 0,
    });
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setShowAddModal(false);
  };

  return (
    <div className="right-contentDashboard w-98">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="info-box bg-danger mb-3">
                <div className="info-box-content">
                  <span className="info-box-text">Total transaction</span>
                  <span className="info-box-number">${totalTransaction}</span>
                </div>
                <span className="info-box-icon"><i className="material-symbols-outlined"></i></span>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="info-box bg-success mb-3">
                <div className="info-box-content">
                  <span className="info-box-text">Total paid</span>
                  <span className="info-box-number">${totalPaid}</span>
                </div>
                <span className="info-box-icon"><i className="material-symbols-outlined"></i></span>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="info-box bg-info mb-3">
                <div className="info-box-content">
                  <span className="info-box-text">Total due</span>
                  <span className="info-box-number">${totalDue}</span>
                </div>
                <span className="info-box-icon"><i className="material-symbols-outlined"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
          <div>
            <h2 className="main-content-title fs-24 mt-4 text-dark">Supplier</h2>
            <nav aria-label="breadcrumb" className="my-0">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#" role="button" tabIndex="0">Supplier</a></li>
                <li className="breadcrumb-item active" aria-current="page">Supplier-Details</li>
              </ol>
            </nav>
          </div>
          <div className="header_svg d-flex">
            <Button variant="contained" color="primary" onClick={handleAddSupplier}>
              Add Supplier
            </Button>
          </div>
        </div>
      </div>

      {/* Supplier Table Section */}
      <Card className="mt-5">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            All supplier Info
          </Typography>
        </div>

        <div className="card-body">
          {loading ? (
            <Typography>Loading suppliers...</Typography>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Total Buy</th>
                    <th>Total Paid</th>
                    <th>Total Due</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {suppliers.map((supplier) => (
                    <tr key={supplier._id}>
                      <td>{supplier._id}</td>
                      <td>{supplier.name}</td>
                      <td>{supplier.company}</td>
                      <td>{supplier.address}</td>
                      <td>{supplier.contact}</td>
                      <td>${supplier.total_buy}</td>
                      <td>${supplier.total_paid}</td>
                      <td>${supplier.total_due}</td>
                      <td>
                        <Button variant="outlined" color="primary" size="small" onClick={() => handleEditSupplier(supplier)}>
                          Edit
                        </Button>
                        <Button variant="outlined" color="secondary" size="small" onClick={() => handleDeleteSupplier(supplier._id)} style={{ marginLeft: '10px' }}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Card>

      {/* Modal for Editing supplier */}
      <Dialog open={showEditModal} onClose={handleCloseModal}>
        <DialogTitle>Edit Supplier</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={editSupplierData.name}
            onChange={(e) => handleChange(e, true)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company"
            name="company"
            value={editSupplierData.company}
            onChange={(e) => handleChange(e, true)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={editSupplierData.address}
            onChange={(e) => handleChange(e, true)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact"
            name="contact"
            value={editSupplierData.contact}
            onChange={(e) => handleChange(e, true)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Buy"
            name="total_buy"
            type="number"
            value={editSupplierData.total_buy}
            onChange={(e) => handleChange(e, true)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Paid"
            name="total_paid"
            type="number"
            value={editSupplierData.total_paid}
            onChange={(e) => handleChange(e, true)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Due"
            name="total_due"
            type="number"
            value={editSupplierData.total_due}
            disabled
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmitEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal for Adding New Supplier */}
      <Dialog open={showAddModal} onClose={handleCloseModal}>
        <DialogTitle>Add New Supplier</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={newSupplierData.name}
            onChange={(e) => handleChange(e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company"
            name="company"
            value={newSupplierData.company}
            onChange={(e) => handleChange(e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={newSupplierData.address}
            onChange={(e) => handleChange(e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact"
            name="contact"
            value={newSupplierData.contact}
            onChange={(e) => handleChange(e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Buy"
            name="total_buy"
            type="number"
            value={newSupplierData.total_buy}
            onChange={(e) => handleChange(e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Paid"
            name="total_paid"
            type="number"
            value={newSupplierData.total_paid}
            onChange={(e) => handleChange(e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Due"
            name="total_due"
            type="number"
            value={newSupplierData.total_due}
            disabled
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmitAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Supplier;
