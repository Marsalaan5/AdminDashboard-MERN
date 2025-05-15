// const express = require('express');
// const router = express.Router();
// const Role = require('../models/Role');
// const Permission = require('../models/Permission');

// // ✅ Create a new role
// router.post('/', async (req, res) => {
//   try {
//     const { title, permissions } = req.body;

//     // Validate permissions exist
//     const existingPermissions = await Permission.find({
//       _id: { $in: permissions }
//     });

//     if (existingPermissions.length !== permissions.length) {
//       return res.status(400).json({ message: 'One or more permissions are invalid' });
//     }

//     const role = new Role({ title, permissions });
//     await role.save();

//     res.status(201).json(role);
//   } catch (err) {
//     console.error('Error creating role:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // ✅ Get all roles with populated permissions
// router.get('/', async (req, res) => {
//   try {
//     const roles = await Role.find().populate('permissions');
//     res.json(roles);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // ✅ Get a specific role by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const role = await Role.findById(req.params.id).populate('permissions');
//     if (!role) {
//       return res.status(404).json({ message: 'Role not found' });
//     }
//     res.json(role);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // ✅ Update a role (title and permissions)
// router.put('/:id', async (req, res) => {
//   try {
//     const { title, permissions } = req.body;

//     const existingPermissions = await Permission.find({
//       _id: { $in: permissions }
//     });

//     if (existingPermissions.length !== permissions.length) {
//       return res.status(400).json({ message: 'Invalid permission IDs' });
//     }

//     const updated = await Role.findByIdAndUpdate(
//       req.params.id,
//       { title, permissions },
//       { new: true, runValidators: true }
//     ).populate('permissions');

//     if (!updated) {
//       return res.status(404).json({ message: 'Role not found' });
//     }

//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // ✅ Delete a role
// router.delete('/:id', async (req, res) => {
//   try {
//     const deleted = await Role.findByIdAndDelete(req.params.id);
//     if (!deleted) {
//       return res.status(404).json({ message: 'Role not found' });
//     }
//     res.json({ message: 'Role deleted' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;
