// const Role = require('../models/Role.js')
// const User = require('../models/User.js')


// const assignRoleToUser = async (req, res) => {
//   const { userId, roleName } = req.body;  

//   try {
//     // Get the role based on the role name
//     const role = await Role.findOne({ title: roleName }).exec();
//     if (!role) {
//       return res.status(404).json({ message: 'Role not found' });
//     }


//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
    
//     user.role = role._id;
//     user.permissions = role.permissions; 
//     await user.save();

//     res.status(200).json({ message: `Role ${roleName} and permissions have been assigned to user ${userId}` });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error assigning role to user' });
//   }
// };

// module.exports = { assignRoleToUser };
