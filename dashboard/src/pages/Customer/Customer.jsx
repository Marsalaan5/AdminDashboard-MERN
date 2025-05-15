import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { MyContext } from "../../context/Context";

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(MyContext);
  // State for handling the modal and editing
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editCustomerData, setEditCustomerData] = useState({
    id: "",
    name: "",
    company: "",
    address: "",
    contact: "",
    total_buy: 0,
    total_paid: 0,
    total_due: 0,
  });

  // State for adding a new customer
  const [newCustomerData, setNewCustomerData] = useState({
    name: "",
    company: "",
    address: "",
    contact: "",
    total_buy: 0,
    total_paid: 0,
    total_due: 0,
  });

  // States for total calculations
  const [totalTransaction, setTotalTransaction] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalDue, setTotalDue] = useState(0);

  // Fetch customer data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersResponse = await axios.get(
          "http://localhost:5000/api/customers"
        );
        setCustomers(customersResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const calculateTotals = () => {
      let transaction = 0;
      let paid = 0;
      let due = 0;

      customers.forEach((customer) => {
        transaction += customer.total_buy;
        paid += customer.total_paid;
        due += customer.total_due;
      });

      setTotalTransaction(transaction);
      setTotalPaid(paid);
      setTotalDue(due);
    };

    calculateTotals();
  }, [customers]);

  const handleChange = (e, setData) => {
    const { name, value } = e.target;
    setData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      if (name === "total_buy" || name === "total_paid") {
        updatedData.total_due =
          parseFloat(updatedData.total_buy) -
          parseFloat(updatedData.total_paid);
      }

      return updatedData;
    });
  };

  const handleSubmitEdit = async () => {
    if (!editCustomerData._id) {
      console.error("Customer ID is missing!");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/customers/${editCustomerData._id}`,
        editCustomerData
      );
      console.log("Customer Updated:", response.data);

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

  const handleSubmitAdd = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/customers",
        newCustomerData
      );
      console.log("Customer Added:", response.data);

      setCustomers((prevCustomers) => [...prevCustomers, response.data]);

      setShowAddModal(false);
    } catch (error) {
      console.error("There was an error adding the customer!", error);
    }
  };

  const handleDeleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/customers/${id}`);
      console.log("Customer Deleted:", id);

      setCustomers((prevCustomers) =>
        prevCustomers.filter((customer) => customer._id !== id)
      );
    } catch (error) {
      console.error("There was an error deleting the customer!", error);
    }
  };

  const handleEditCustomer = (customer) => {
    setEditCustomerData(customer);
    setShowEditModal(true);
  };

  const handleAddCustomer = () => {
    setNewCustomerData({
      name: "",
      company: "",
      address: "",
      contact: "",
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
            <h2 className="main-content-title fs-24 mt-4 text-dark">
              Customer
            </h2>
            <nav aria-label="breadcrumb" className="my-0">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#" role="button">
                    Customer
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Customer-Details
                </li>
              </ol>
            </nav>
          </div>
          <div className="header_svg d-flex">
            <div style={{ marginBottom: "20px", textAlign: "right" }}>
              {user?.role === "admin" && (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                     startIcon={<Add />}
                    onClick={handleAddCustomer}
                  >
                    Add Customer
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="info-box bg-danger mb-3">
                <div className="info-box-content">
                  <span className="info-box-text">Total transaction</span>
                  <span className="info-box-number">${totalTransaction}</span>
                </div>
                <span className="info-box-icon">
                  <i className="material-symbols-outlined"></i>
                </span>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="info-box bg-success mb-3">
                <div className="info-box-content">
                  <span className="info-box-text">Total paid</span>
                  <span className="info-box-number">${totalPaid}</span>
                </div>
                <span className="info-box-icon">
                  <i className="material-symbols-outlined"></i>
                </span>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="info-box bg-info mb-3">
                <div className="info-box-content">
                  <span className="info-box-text">Total due</span>
                  <span className="info-box-number">${totalDue}</span>
                </div>
                <span className="info-box-icon">
                  <i className="material-symbols-outlined"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="mt-5">
        <div
          className="card-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h6" component="div">
            All Customer Info
          </Typography>
        </div>

        <div className="card-body">
          {loading ? (
            <Typography>Loading customers...</Typography>
          ) : (
            <div className="table-responsive">
              <table
                className="table table-striped table-bordered"
                style={{ width: "100%" }}
              >
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
                        {user?.role === "admin" && (
                          <>
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
                              style={{ marginLeft: "10px" }}
                            >
                              Delete
                            </Button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Card>

      {/* Modals (Edit and Add Customer) */}
      {/* Edit Modal */}
      <Dialog open={showEditModal} onClose={handleCloseModal}>
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={editCustomerData.name}
            onChange={(e) => handleChange(e, setEditCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company"
            name="company"
            value={editCustomerData.company}
            onChange={(e) => handleChange(e, setEditCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={editCustomerData.address}
            onChange={(e) => handleChange(e, setEditCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact"
            name="contact"
            value={editCustomerData.contact}
            onChange={(e) => handleChange(e, setEditCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Buy"
            name="total_buy"
            type="number"
            value={editCustomerData.total_buy}
            onChange={(e) => handleChange(e, setEditCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Paid"
            name="total_paid"
            type="number"
            value={editCustomerData.total_paid}
            onChange={(e) => handleChange(e, setEditCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Due"
            name="total_due"
            type="number"
            value={editCustomerData.total_due}
            onChange={(e) => handleChange(e, setEditCustomerData)}
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

      {/* Add Modal */}
      <Dialog open={showAddModal} onClose={handleCloseModal}>
        <DialogTitle>Add New Customer</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={newCustomerData.name}
            onChange={(e) => handleChange(e, setNewCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company"
            name="company"
            value={newCustomerData.company}
            onChange={(e) => handleChange(e, setNewCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={newCustomerData.address}
            onChange={(e) => handleChange(e, setNewCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact"
            name="contact"
            value={newCustomerData.contact}
            onChange={(e) => handleChange(e, setNewCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Buy"
            name="total_buy"
            type="number"
            value={newCustomerData.total_buy}
            onChange={(e) => handleChange(e, setNewCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Paid"
            name="total_paid"
            type="number"
            value={newCustomerData.total_paid}
            onChange={(e) => handleChange(e, setNewCustomerData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Due"
            name="total_due"
            type="number"
            value={newCustomerData.total_due}
            onChange={(e) => handleChange(e, setNewCustomerData)}
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
