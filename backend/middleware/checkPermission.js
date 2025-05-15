// const User = require('../models/User');

// const checkPermissions = (pageName, requiredPermission) => {
//   return async (req, res, next) => {
//     try {
//       const user = await User.findById(req.user._id).populate('role');
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }

//       const pagePermissions = user.permissions.find(
//         (perm) => perm.page_name === pageName
//       );

//       if (!pagePermissions) {
//         return res.status(403).json({ message: 'No permissions for this page' });
//       }

//       if (pagePermissions.permissions.includes(requiredPermission)) {
//         return next();
//       } else {
//         return res.status(403).json({ message: 'Permission denied' });
//       }

//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Server error' });
//     }
//   };
// };

// module.exports = checkPermissions;
