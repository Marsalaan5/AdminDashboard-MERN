
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for handling the modal and editing
  const [showEditModal, setShowEditModal] = useState(false); // Edit modal state
  const [showAddModal, setShowAddModal] = useState(false); // Add modal state
  const [editCustomerData, setEditCustomerData] = useState({
    id: '',
    name: '',
    company: '',
    address: '',
    contact: '',
    total_buy: 0,
    total_paid: 0,
    total_due: 0,
  });

  // State for adding a new customer
  const [newCustomerData, setNewCustomerData] = useState({
    name: '',
    company: '',
    address: '',
    contact: '',
    total_buy: 0,
    total_paid: 0,
    total_due: 0,
  });

  // Fetch customer data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersResponse = await axios.get('http://localhost:5000/api/customers');
        setCustomers(customersResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it only runs once on page load

  // Handle input changes for the edit and add customer form
  const handleEditChange = (e) => {
    const { name, value } = e.target;

    // Calculate total_due automatically if total_buy or total_paid changes
    if (name === "total_buy" || name === "total_paid") {
      const newTotalBuy = name === "total_buy" ? value : editCustomerData.total_buy;
      const newTotalPaid = name === "total_paid" ? value : editCustomerData.total_paid;

      // Calculate the new total_due
      const newTotalDue = newTotalBuy - newTotalPaid;

      // Update the state with the new values
      setEditCustomerData((prevData) => ({
        ...prevData,
        [name]: value,
        total_due: newTotalDue, // Automatically update total_due
      }));
    } else {
      setEditCustomerData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;

    // Calculate total_due automatically if total_buy or total_paid changes
    if (name === "total_buy" || name === "total_paid") {
      const newTotalBuy = name === "total_buy" ? value : newCustomerData.total_buy;
      const newTotalPaid = name === "total_paid" ? value : newCustomerData.total_paid;

      // Calculate the new total_due
      const newTotalDue = newTotalBuy - newTotalPaid;

      // Update the state with the new values
      setNewCustomerData((prevData) => ({
        ...prevData,
        [name]: value,
        total_due: newTotalDue, // Automatically update total_due
      }));
    } else {
      setNewCustomerData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission for editing customer
  const handleSubmitEdit = async () => {
    if (!editCustomerData._id) {
      console.error("Customer ID is missing!");
      return; // Prevent submission if id is undefined or missing
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/customers/${editCustomerData._id}`,
        editCustomerData
      );
      console.log("Customer Updated:", response.data);

      // Update the customers list after successful update
      setCustomers((prevCustomers) =>
        prevCustomers.map((customer) =>
          customer._id === editCustomerData._id ? response.data : customer
        )
      );

      setShowEditModal(false); // Close the modal
    } catch (error) {
      console.error("There was an error updating the customer!", error);
    }
  };

  // Handle form submission for adding a new customer
  const handleSubmitAdd = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/customers', newCustomerData);
      console.log("Customer Added:", response.data);

      // Update the customers list after successful addition
      setCustomers((prevCustomers) => [...prevCustomers, response.data]);

      setShowAddModal(false); // Close the modal
    } catch (error) {
      console.error("There was an error adding the customer!", error);
    }
  };

  // Handle deleting a customer
  const handleDeleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/customers/${id}`);
      console.log("Customer Deleted:", id);

      // Remove the deleted customer from the customers list
      setCustomers((prevCustomers) =>
        prevCustomers.filter((customer) => customer._id !== id)
      );
    } catch (error) {
      console.error("There was an error deleting the customer!", error);
    }
  };

  
  const handleEditCustomer = (customer) => {
    console.log("Editing customer:", customer);
    setEditCustomerData(customer); 
    setShowEditModal(true);
  };

  
  const handleAddCustomer = () => {
    setNewCustomerData({
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
                      <span className="info-box-number"> 
                      19000                        </span>
                    </div>
  <span className="info-box-icon "><i className="material-symbols-outlined"></i></span>
                    {/* <!-- /.info-box-content --> */}
                  </div>
                  {/* <!-- /.info-box --> */}
                </div>

                 <div className="col-12 col-sm-6 col-md-4">
                  <div className="info-box bg-success mb-3">
                    <div className="info-box-content">
                      <span className="info-box-text">Total paid</span>
                      <span className="info-box-number"> 
                        19000                        </span>
                    </div>
                    <span className="info-box-icon"><i className="material-symbols-outlined"></i></span>
                    {/* <!-- /.info-box-content --> */}
                  </div>
                  {/* <!-- /.info-box --> */}
                </div>

                 <div className="col-12 col-sm-6 col-md-4">
                  <div className="info-box bg-info mb-3">
              <div className="info-box-content">
                      <span className="info-box-text">Total due</span>
                      <span className="info-box-number"> 
                        0                        </span>
                    </div>

     <span className="info-box-icon"><i className="material-symbols-outlined">
</i></span>
                    {/* <!-- /.info-box-content --> */}
                  </div>
                  {/* <!-- /.info-box --> */}
                </div>
              </div>
       </div>
     </div>





      <div className="container-fluid">
       <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
                 <div>
                   <h2 className="main-content-title fs-24 mt-4 text-dark">Customer</h2>
                   <nav aria-label="breadcrumb" className="my-0">
                     <ol className="breadcrumb mb-0">
                       <li className="breadcrumb-item"><a href="#" role="button" tabIndex="0">Customer</a></li>
                       <li className="breadcrumb-item active" aria-current="page">Customer-Details</li>
                     </ol>
                   </nav>
                 </div>
                 <div className="header_svg d-flex">
                 <div style={{ marginBottom: '20px', textAlign: 'right' }}>
        <Button variant="contained" color="primary" onClick={handleAddCustomer}>
          Add Customer
        </Button>
      </div>
                 </div>
               </div>
      </div>

    
    

      {/* Customer Table Section */}
      <Card className="mt-5">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            All Customer Info
          </Typography>
        </div>

        <div className="card-body">
          {loading ? (
            <Typography>Loading customers...</Typography>
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
                  {customers.map((customer) => (
                    <tr key={customer._id}>
                      <td>{customer._id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.company}</td>
                      <td>{customer.address}</td>
                      <td>{customer.contact}</td>
                      <td>${customer.total_buy}</td>
                      <td>${customer.total_paid}</td>
                      <td>${customer.total_due}</td>
                      <td>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => handleEditCustomer(customer)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          color="secondary"
                          size="small"
                          onClick={() => handleDeleteCustomer(customer._id)}
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

      {/* Modal for Editing Customer */}
      <Dialog open={showEditModal} onClose={handleCloseModal}>
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={editCustomerData.name}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Company"
            name="company"
            value={editCustomerData.company}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Address"
            name="address"
            value={editCustomerData.address}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Contact"
            name="contact"
            value={editCustomerData.contact}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Total Buy"
            name="total_buy"
            type="number"
            value={editCustomerData.total_buy}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Paid"
            name="total_paid"
            type="number"
            value={editCustomerData.total_paid}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Total Due"
            name="total_due"
            type="number"
            value={editCustomerData.total_due}
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

      {/* Modal for Adding New Customer */}
      <Dialog open={showAddModal} onClose={handleCloseModal}>
        <DialogTitle>Add New Customer</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={newCustomerData.name}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Company"
            name="company"
            value={newCustomerData.company}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Address"
            name="address"
            value={newCustomerData.address}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Contact"
            name="contact"
            value={newCustomerData.contact}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Buy"
            name="total_buy"
            type="number"
            value={newCustomerData.total_buy}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Total Paid"
            name="total_paid"
            type="number"
            value={newCustomerData.total_paid}
            onChange={handleAddChange}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Total Due"
            name="total_due"
            type="number"
            value={newCustomerData.total_due}
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

export default Customer;
