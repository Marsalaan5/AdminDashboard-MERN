
// const express = require('express');
// const router = express.Router();
// const PaymentMethod = require('../models/PaymentMethod');


// // GET all payment methods
// router.get('/', async (req, res) => {
//     try {
//       const paymentMethods = await PaymentMethod.find();
//       res.status(200).json(paymentMethods);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching payment methods', error });
//     }
//   });
  
//   // POST a new payment method
//   router.post('/', async (req, res) => {
//     const { name, description } = req.body;
  
//     try {
//       const newPaymentMethod = new PaymentMethod({ name, description });
//       await newPaymentMethod.save();
//       res.status(201).json(newPaymentMethod);
//     } catch (error) {
//       res.status(400).json({ message: 'Error creating payment method', error });
//     }
//   });
  
//   // PUT (update) a payment method
//   router.put('/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, description, status } = req.body;
  
//     try {
//       const paymentMethod = await PaymentMethod.findByIdAndUpdate(id, { name, description, status }, { new: true });
//       if (!paymentMethod) {
//         return res.status(404).json({ message: 'Payment method not found' });
//       }
//       res.status(200).json(paymentMethod);
//     } catch (error) {
//       res.status(400).json({ message: 'Error updating payment method', error });
//     }
//   });
  
//   // DELETE a payment method
//   router.delete('/:id', async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       const deletedPaymentMethod = await PaymentMethod.findByIdAndDelete(id);
//       if (!deletedPaymentMethod) {
//         return res.status(404).json({ message: 'Payment method not found' });
//       }
//       res.status(200).json({ message: 'Payment method deleted' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error deleting payment method', error });
//     }
//   });
  
//   module.exports = router;