// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Card, CardContent, Grid, Typography, Container } from '@mui/material';

// function EditCustomer({ match }) {
//   const [customerData, setCustomerData] = useState({
//     name: '',
//     company: '',
//     address: '',
//     contact: '',
//     email: ''
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Fetch customer data on component mount
//   useEffect(() => {
//     const fetchCustomerData = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:5000/api/customers/${match.params.id}`);
//         setCustomerData(data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch customer data');
//         setLoading(false);
//       }
//     };

//     fetchCustomerData();
//   }, [match.params.id]);

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/api/customers/${match.params.id}`, customerData);
//       alert('Customer updated successfully!');
//     } catch (err) {
//       setError('Failed to update customer');
//     }
//   };

//   // Handle input change
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setCustomerData({ ...customerData, [name]: value });
//   };

//   return (
//     <Container maxWidth="sm">
//       <Card>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             Update Customer Information
//           </Typography>
          
//           {loading ? (
//             <Typography>Loading...</Typography>
//           ) : error ? (
//             <Typography color="error">{error}</Typography>
//           ) : (
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                   <TextField
//                     label="Name"
//                     fullWidth
//                     required
//                     name="name"
//                     value={customerData.name}
//                     onChange={handleInputChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     label="Company"
//                     fullWidth
//                     required
//                     name="company"
//                     value={customerData.company}
//                     onChange={handleInputChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     label="Address"
//                     fullWidth
//                     multiline
//                     rows={3}
//                     name="address"
//                     value={customerData.address}
//                     onChange={handleInputChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     label="Contact Number"
//                     fullWidth
//                     required
//                     name="contact"
//                     value={customerData.contact}
//                     onChange={handleInputChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     label="Email"
//                     fullWidth
//                     name="email"
//                     value={customerData.email}
//                     onChange={handleInputChange}
//                   />
//                 </Grid>
//               </Grid>

//               <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
//                 Update Customer
//               </Button>
//             </form>
//           )}
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }

// export default EditCustomer;
