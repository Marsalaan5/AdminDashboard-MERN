import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Card, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
// import User from '../../../../backend/models/User';
import { MyContext } from '../../context/Context';

function Staff() {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);


  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); 
  const [editStaffData, setEditStaffData] = useState({
    id: '',
    name: '',
    designation: '',
    address: '',
    contact: '',
    email: '',
  });

 
  const [newStaffData, setNewStaffData] = useState({
    name: '',
    designation: '',
    address: '',
    contact: '',
    email: '',
  });

  const {user} = useContext(MyContext) 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const staffsResponse = await axios.get('http://localhost:5000/api/staffs');
        setStaffs(staffsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const handleChange = (e, setData) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

 
  const handleSubmitEdit = async () => {
    if (!editStaffData._id) {
      console.error("staff ID is missing!");
      return; 
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/staffs/${editStaffData._id}`,
        editStaffData
      );
      console.log("staff Updated:", response.data);

 
      setStaffs((prevStaffs) =>
        prevStaffs.map((staff) =>
          staff._id === editStaffData._id ? response.data : staff
        )
      );

      setShowEditModal(false); 
    } catch (error) {
      console.error("There was an error updating the staff!", error);
    }
  };


  const handleSubmitAdd = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/staffs', newStaffData);
      console.log("staff Added:", response.data);

    
      setStaffs((prevStaffs) => [...prevStaffs, response.data]);

      setShowAddModal(false); 
    } catch (error) {
      console.error("There was an error adding the staff!", error);
    }
  };


  const handleDeletestaff = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/staffs/${id}`);
      console.log("staff Deleted:", id);

      setStaffs((prevStaffs) =>
        prevStaffs.filter((staff) => staff._id !== id)
      );
    } catch (error) {
      console.error("There was an error deleting the staff!", error);
    }
  };

  const handleEditstaff = (staff) => {
    setEditStaffData(staff); 
    setShowEditModal(true);
  };

  const handleAddstaff = () => {
    setNewStaffData({
        name: '',
        designation: '',
        address: '',
        contact: '',
        email: '',
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
            <h2 className="main-content-title fs-24 mt-4 text-dark">Staff</h2>
            <nav aria-label="breadcrumb" className="my-0">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="/" role="button">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Staff-Details</li>
              </ol>
            </nav>
          </div>
          <div className="header_svg d-flex">
            <div style={{ marginBottom: '20px', textAlign: 'right' }}>
              <Button variant="contained" color="primary"  startIcon={<Add />} onClick={handleAddstaff}>
                Add staff
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Card className="mt-5">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            All staff Info
          </Typography>
        </div>

        <div className="card-body">
          {loading ? (
            <Typography>Loading staffs...</Typography>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Email</th>
                   
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {staffs.map((staff) => (
                    <tr key={staff._id}>
                      <td>{staff._id}</td>
                      <td>{staff.name}</td>
                      <td>{staff.designation}</td>
                      <td>{staff.address}</td>
                      <td>{staff.contact}</td>
                      <td>{staff.email}</td>
                      
                      <td>
                       {user?.role === "admin" && (
                        <>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => handleEditstaff(staff)}
                          >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          color="secondary"
                          size="small"
                          onClick={() => handleDeletestaff(staff._id)}
                          style={{ marginLeft: '10px' }}
                          >
                          Delete
                        </Button>
                          </>)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Card>

      {/* Modals (Edit and Add staff) */}
      {/* Edit Modal */}
      <Dialog open={showEditModal} onClose={handleCloseModal}>
        <DialogTitle>Edit staff</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={editStaffData.name}
            onChange={(e) => handleChange(e, setEditStaffData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Designation"
            name="designation"
            value={editStaffData.designation}
            onChange={(e) => handleChange(e, setEditStaffData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={editStaffData.address}
            onChange={(e) => handleChange(e, setEditStaffData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact"
            name="contact"
            value={editStaffData.contact}
            onChange={(e) => handleChange(e, setEditStaffData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            // type="number"
            value={editStaffData.email}
            onChange={(e) => handleChange(e, setEditStaffData)}
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

      {/* Add Modal */}
      <Dialog open={showAddModal} onClose={handleCloseModal}>
        <DialogTitle>Add New staff</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={newStaffData.name}
            onChange={(e) => handleChange(e, setNewStaffData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Designation"
            name="designation"
            value={newStaffData.designation}
            onChange={(e) => handleChange(e, setNewStaffData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={newStaffData.address}
            onChange={(e) => handleChange(e, setNewStaffData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact"
            name="contact"
            value={newStaffData.contact}
            onChange={(e) => handleChange(e, setNewStaffData)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            // type="number"
            value={newStaffData.email}
            onChange={(e) => handleChange(e, setNewStaffData)}
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

  )
}

export default Staff

