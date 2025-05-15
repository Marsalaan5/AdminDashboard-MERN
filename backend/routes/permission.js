// const express = require('express');
// const Permission = require('../models/Permission');
// const router = express.Router();

// // 1. Get all permissions
// router.get('/', async (req, res) => {
//   try {
//     const permissions = await Permission.find();
//     res.status(200).json({ permissions });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to fetch permissions' });
//   }
// });

// // 2. Create a new permission
// router.post('/', async (req, res) => {
//   const { name, description } = req.body;

//   if (!name) {
//     return res.status(400).json({ message: 'Permission name is required' });
//   }

//   try {
//     const newPermission = new Permission({ name, description });
//     await newPermission.save();
//     res.status(201).json({ message: 'Permission created successfully', permission: newPermission });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to create permission' });
//   }
// });

// // 3. Update a permission
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, description } = req.body;

//   try {
//     const permission = await Permission.findById(id);
//     if (!permission) {
//       return res.status(404).json({ message: 'Permission not found' });
//     }

//     permission.name = name || permission.name;
//     permission.description = description || permission.description;

//     await permission.save();
//     res.status(200).json({ message: 'Permission updated successfully', permission });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to update permission' });
//   }
// });

// // 4. Delete a permission
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const permission = await Permission.findByIdAndDelete(id);
//     if (!permission) {
//       return res.status(404).json({ message: 'Permission not found' });
//     }

//     res.status(200).json({ message: 'Permission deleted successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to delete permission' });
//   }
// });

// module.exports = router;
