
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function Supplier() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

 
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

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const suppliersResponse = await axios.get('http://localhost:5000/api/suppliers');
        setSuppliers(suppliersResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 


  const handleEditChange = (e) => {
    const { name, value } = e.target;

  
    if (name === "total_buy" || name === "total_paid") {
      const newTotalBuy = name === "total_buy" ? value : editSupplierData.total_buy;
      const newTotalPaid = name === "total_paid" ? value : editSupplierData.total_paid;


      const newTotalDue = newTotalBuy - newTotalPaid;


      setEditSupplierData((prevData) => ({
        ...prevData,
        [name]: value,
        total_due: newTotalDue, 
      }));
    } else {
      setEditSupplierData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;

  
    if (name === "total_buy" || name === "total_paid") {
      const newTotalBuy = name === "total_buy" ? value : newSupplierData.total_buy;
      const newTotalPaid = name === "total_paid" ? value : newSupplierData.total_paid;

     
      const newTotalDue = newTotalBuy - newTotalPaid;


      setNewSupplierData((prevData) => ({
        ...prevData,
        [name]: value,
        total_due: newTotalDue, 
      }));
    } else {
      setNewSupplierData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

 
  const handleSubmitEdit = async () => {
    if (!editSupplierData._id) {
      console.error("supplier ID is missing!");
      return; 
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/suppliers/${editSupplierData._id}`,
        editSupplierData
      );
      console.log("supplier Updated:", response.data);

     
      setSuppliers((prevSuppliers) =>
        prevSuppliers.map((supplier) =>
          supplier._id === editSupplierData._id ? response.data : supplier
        )
      );

      setShowEditModal(false);
    } catch (error) {
      console.error("There was an error updating the supplier!", error);
    }
  };

 
  const handleSubmitAdd = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/suppliers', newSupplierData);
      console.log("supplier Added:", response.data);

    
      setSuppliers((prevSupplier) => [...prevSupplier, response.data]);

      setShowAddModal(false); 
    } catch (error) {
      console.error("There was an error adding the supplier!", error);
    }
  };

 
  const handleDeletesupplier = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/suppliers/${id}`);
      console.log("supplier Deleted:", id);

      // Remove the deleted supplier from the suppliers list
      setSuppliers((prevsuppliers) =>
        prevsuppliers.filter((supplier) => supplier._id !== id)
      );
    } catch (error) {
      console.error("There was an error deleting the supplier!", error);
    }
  };

  
  const handleEditsupplier = (supplier) => {
    console.log("Editing supplier:", supplier);
    setEditSupplierData(supplier); 
    setShowEditModal(true);
  };

  
  const handleAddsupplier = () => {
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
                 <div style={{ marginBottom: '20px', textAlign: 'right' }}>
        <Button variant="contained" color="primary" onClick={handleAddsupplier}>
          Add Supplier
        </Button>
      </div>
                 </div>
               </div>
      </div>

    
    

      {/* supplier Table Section */}
      <Card className="mt-5">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            All supplier Info
          </Typography>
        </div>

        <div className="card-body">
          {loading ? (
            <Typography>Loading suppliers...</Typography>
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
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => handleEditsupplier(supplier)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          color="secondary"
                          size="small"
                          onClick={() => handleDeletesupplier(supplier._id)}
                          style={{ marginLeft: '10px' }}
                          >
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
        <DialogTitle>Edit supplier</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={editSupplierData.name}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Company"
            name="company"
            value={editSupplierData.company}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Address"
            name="address"
            value={editSupplierData.address}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Contact"
            name="contact"
            value={editSupplierData.contact}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Total Buy"
            name="total_buy"
            type="number"
            value={editSupplierData.total_buy}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Paid"
            name="total_paid"
            type="number"
            value={editSupplierData.total_paid}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Total Due"
            name="total_due"
            type="number"
            value={editSupplierData.total_due}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            disabled
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

      {/* Modal for Adding New supplier */}
      <Dialog open={showAddModal} onClose={handleCloseModal}>
        <DialogTitle>Add New supplier</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={newSupplierData.name}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Company"
            name="company"
            value={newSupplierData.company}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Address"
            name="address"
            value={newSupplierData.address}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Contact"
            name="contact"
            value={newSupplierData.contact}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Buy"
            name="total_buy"
            type="number"
            value={newSupplierData.total_buy}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Total Paid"
            name="total_paid"
            type="number"
            value={newSupplierData.total_paid}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Total Due"
            name="total_due"
            type="number"
            value={newSupplierData.total_due}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            disabled
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
