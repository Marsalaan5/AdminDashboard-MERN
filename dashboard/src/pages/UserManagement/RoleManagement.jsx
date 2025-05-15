
// // import React, { useState, useEffect } from 'react';
// // import { Table, Button, Modal, Form, Pagination, InputGroup, FormControl } from 'react-bootstrap';

// // const ManageRoles = () => {
// //   const [roles, setRoles] = useState([]);
// //   const [showModal, setShowModal] = useState(false);
// //   const [selectedRole, setSelectedRole] = useState(null);
// //   const [filter, setFilter] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);

// //   // Mock role data
// //   const mockRoles = [
// //     { _id: '1', title: 'Super', permissions: ['page_dashboard', 'page_devices', 'page_control'] },
// //     { _id: '2', title: 'Client', permissions: ['page_complaint', 'devices', 'reports'] },
// //     { _id: '3', title: 'Admin', permissions: ['manage_users', 'manage_roles', 'page_wards'] },
// //     { _id: '4', title: 'Viewer', permissions: ['page_complaint', 'trends'] },
// //     { _id: '5', title: 'Editor', permissions: ['page_complaint', 'devices', 'trends'] },
// //     { _id: '6', title: 'Manager', permissions: ['manage_users', 'page_devices', 'page_roles'] },
// //     { _id: '7', title: 'Guest', permissions: ['page_dashboard', 'trends'] },
// //     // Add more roles here
// //   ];

// //   // List of all possible permissions
// //   const allPermissions = [
// //     'page_dashboard', 'page_devices', 'page_control', 'page_complaint', 
// //     'devices', 'reports', 'manage_users', 'manage_roles', 'page_wards', 
// //     'trends', 'manage_zones', 'schedule', 'ulb_reports', 'device_reports'
// //   ];

// //   useEffect(() => {
// //     fetchRoles();
// //   }, [currentPage, filter]);

// //   const fetchRoles = () => {
// //     // Simulating an API call with setTimeout
// //     setTimeout(() => {
// //       const filteredRoles = mockRoles.filter((role) => 
// //         role.title.toLowerCase().includes(filter.toLowerCase())
// //       );

// //       // Paginate the filtered roles
// //       const rolesPerPage = 5; // Number of roles per page
// //       const totalFilteredRoles = filteredRoles.length;
// //       const totalPages = Math.ceil(totalFilteredRoles / rolesPerPage);

// //       const paginatedRoles = filteredRoles.slice(
// //         (currentPage - 1) * rolesPerPage, 
// //         currentPage * rolesPerPage
// //       );

// //       setRoles(paginatedRoles);
// //       setTotalPages(totalPages);
// //     }, 500); // Simulate network delay
// //   };

// //   const handleFilterChange = (e) => {
// //     setFilter(e.target.value);
// //   };

// //   const openModal = (role) => {
// //     setSelectedRole(role);
// //     setShowModal(true);
// //   };

// //   const closeModal = () => {
// //     setShowModal(false);
// //     setSelectedRole(null);
// //   };

// //   const handleUpdateRole = () => {
// //     // Simulating updating the role locally
// //     const updatedRoles = roles.map((role) => 
// //       role._id === selectedRole._id ? selectedRole : role
// //     );
// //     setRoles(updatedRoles);
// //     closeModal();
// //   };

// //   const handlePermissionChange = (permission) => {

// //     const updatedPermissions = selectedRole.permissions.includes(permission)
// //       ? selectedRole.permissions.filter(p => p !== permission)
// //       : [...selectedRole.permissions, permission];

// //     setSelectedRole({ ...selectedRole, permissions: updatedPermissions });
// //   };

// //   const handlePaginationChange = (page) => {
// //     setCurrentPage(page);
// //   };

// //   return (
    
// //      <div className="right-contentDashboard w-98">
// //       <h2>Manage User Roles</h2>

   
// //       <Table striped bordered hover responsive>
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Title</th>
// //             <th>Permissions</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {roles.map((role) => (
// //             <tr key={role._id}>
// //               <td>{role._id}</td>
// //               <td>{role.title}</td>
// //               <td>{JSON.stringify(role.permissions)}</td>
// //               <td>
// //                 <Button variant="info" onClick={() => openModal(role)}>
// //                   View/Edit
// //                 </Button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </Table>

// //       <Pagination>
// //         <Pagination.Prev onClick={() => handlePaginationChange(currentPage - 1)} disabled={currentPage === 1} />
// //         {[...Array(totalPages)].map((_, index) => (
// //           <Pagination.Item 
// //             key={index + 1} 
// //             active={index + 1 === currentPage} 
// //             onClick={() => handlePaginationChange(index + 1)}>
// //             {index + 1}
// //           </Pagination.Item>
// //         ))}
// //         <Pagination.Next onClick={() => handlePaginationChange(currentPage + 1)} disabled={currentPage === totalPages} />
// //       </Pagination>

// //       {/* Modal for View/Edit Role */}
// //       <Modal show={showModal} onHide={closeModal}>
// //         <Modal.Header closeButton>
// //           <Modal.Title>Edit Role: {selectedRole?.title}</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //           <Form>
// //             <Form.Group controlId="formRoleTitle">
// //               <Form.Label>Role Title</Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 placeholder="Enter role title"
// //                 value={selectedRole?.title || ''}
// //                 onChange={(e) => setSelectedRole({ ...selectedRole, title: e.target.value })}
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="formRolePermissions">
// //               <Form.Label>Permissions</Form.Label>
// //               <div>
// //                 {allPermissions.map((permission) => (
// //                   <Form.Check
// //                     key={permission}
// //                     type="checkbox"
// //                     label={permission}
// //                     checked={selectedRole?.permissions.includes(permission)}
// //                     onChange={() => handlePermissionChange(permission)}
// //                   />
// //                 ))}
// //               </div>
// //             </Form.Group>
// //           </Form>
// //         </Modal.Body>
// //         <Modal.Footer>
// //           <Button variant="secondary" onClick={closeModal}>
// //             Close
// //           </Button>
// //           <Button variant="primary" onClick={handleUpdateRole}>
// //             Save Changes
// //           </Button>
// //         </Modal.Footer>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default ManageRoles;




// import React, { useState, useEffect } from 'react';
// import { Table, Button, Modal, Form, Pagination } from 'react-bootstrap';
// import axios from 'axios';

// const ManageRoles = () => {
//   const [roles, setRoles] = useState([]);
//   const [allPermissions, setAllPermissions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedRole, setSelectedRole] = useState(null);
//   const [filter, setFilter] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const rolesPerPage = 5;

//   useEffect(() => {
//     fetchRoles();
//     fetchAllPermissions();
//   }, [currentPage, filter]);

//   // Fetch roles using Axios
//   const fetchRoles = async () => {
//     try {
//       const response = await axios.get('/api/roles');
//       const data = response.data;
      
//       // Log the response data to debug its structure
//       console.log('Roles response:', data);

//       if (Array.isArray(data)) {
//         // Filter roles by title
//         const filteredRoles = data.filter((role) =>
//           role.title.toLowerCase().includes(filter.toLowerCase())
//         );

//         const totalFiltered = filteredRoles.length;
//         const pages = Math.ceil(totalFiltered / rolesPerPage);
//         const paginated = filteredRoles.slice(
//           (currentPage - 1) * rolesPerPage,
//           currentPage * rolesPerPage
//         );

//         setRoles(paginated);
//         setTotalPages(pages);
//       } else {
//         console.error('Roles data is not an array');
//       }
//     } catch (err) {
//       console.error('Failed to fetch roles:', err);
//     }
//   };

//   // Fetch all permissions using Axios
//   const fetchAllPermissions = async () => {
//     try {
//       const response = await axios.get('/api/permissions');
//       const data = response.data;

//       // Log the response data to debug its structure
//       console.log('Permissions response:', data);

//       if (Array.isArray(data)) {
//         setAllPermissions(data);
//       } else {
//         console.error('Permissions data is not an array');
//       }
//     } catch (err) {
//       console.error('Failed to fetch permissions:', err);
//     }
//   };

//   // Open modal to edit role
//   const openModal = (role) => {
//     // Extract permission names from populated permissions
//     const permissionNames = role.permissions.map((p) =>
//       typeof p === 'string' ? p : p.name
//     );
//     setSelectedRole({ ...role, permissions: permissionNames });
//     setShowModal(true);
//   };

//   // Close the modal
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedRole(null);
//   };

//   // Handle filter change (search by role title)
//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//     setCurrentPage(1); // reset to first page
//   };

//   // Update role using Axios
//   const handleUpdateRole = async () => {
//     try {
//       // Convert permission names to their corresponding ObjectIds
//       const permissionIds = allPermissions
//         .filter((perm) => selectedRole.permissions.includes(perm.name))
//         .map((perm) => perm._id);

//       const response = await axios.put(`/api/roles/${selectedRole._id}`, {
//         title: selectedRole.title,
//         permissions: permissionIds, // Send ObjectIds for permissions
//       });

//       if (response.status === 200) {
//         fetchRoles();
//         closeModal();
//       } else {
//         throw new Error('Failed to update role');
//       }
//     } catch (err) {
//       console.error('Error updating role:', err);
//     }
//   };

//   // Handle permission change in the modal
//   const handlePermissionChange = (permissionName) => {
//     const updatedPermissions = selectedRole.permissions.includes(permissionName)
//       ? selectedRole.permissions.filter((p) => p !== permissionName)
//       : [...selectedRole.permissions, permissionName];

//     setSelectedRole({ ...selectedRole, permissions: updatedPermissions });
//   };

//   // Handle pagination change
//   const handlePaginationChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="right-contentDashboard w-98">
//       <h2>Manage User Roles</h2>

//       <Form.Control
//         type="text"
//         placeholder="Search by title..."
//         value={filter}
//         onChange={handleFilterChange}
//         className="mb-3"
//       />

//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Permissions</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {roles.map((role) => (
//             <tr key={role._id}>
//               <td>{role._id}</td>
//               <td>{role.title}</td>
//               <td>{role.permissions.join(', ')}</td>
//               <td>
//                 <Button variant="info" onClick={() => openModal(role)}>
//                   View/Edit
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Pagination>
//         <Pagination.Prev
//           onClick={() => handlePaginationChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         />
//         {[...Array(totalPages)].map((_, index) => (
//           <Pagination.Item
//             key={index + 1}
//             active={index + 1 === currentPage}
//             onClick={() => handlePaginationChange(index + 1)}
//           >
//             {index + 1}
//           </Pagination.Item>
//         ))}
//         <Pagination.Next
//           onClick={() => handlePaginationChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         />
//       </Pagination>

//       {/* Modal for View/Edit Role */}
//       <Modal show={showModal} onHide={closeModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Role: {selectedRole?.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formRoleTitle">
//               <Form.Label>Role Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter role title"
//                 value={selectedRole?.title || ''}
//                 onChange={(e) =>
//                   setSelectedRole({ ...selectedRole, title: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group controlId="formRolePermissions" className="mt-3">
//               <Form.Label>Permissions</Form.Label>
//               <div>
//                 {allPermissions.map((permission) => (
//                   <Form.Check
//                     key={permission._id}
//                     type="checkbox"
//                     label={permission.name}
//                     checked={selectedRole?.permissions.includes(permission.name)}
//                     onChange={() => handlePermissionChange(permission.name)}
//                   />
//                 ))}
//               </div>
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={closeModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleUpdateRole}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ManageRoles;

