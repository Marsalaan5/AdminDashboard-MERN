// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function ExpenseList() {

//   const [expenses, setExpenses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [totalExpense, setTotalExpense] = useState(0);

  
//   useEffect(() => {
//     const fetchExpenses = async () => {
//       try {
     
//         const response = await axios.get('http://localhost:5000/api/expense');
//         setExpenses(response.data);
        
      
//         const total = response.data.reduce((acc, expense) => acc + expense.expense_amount, 0);
//         setTotalExpense(total);
//       } catch (err) {
//         setError('Failed to fetch expenses');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchExpenses();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="right-contentDashboard w-98">
//       <div className="content-header">
//         <div className="container-fluid">
//           <div className="row mb-2">
//             <div className="col-sm-6">
//               <h1 className="m-0 text-dark">Expense Categories</h1>
//             </div>
//             <div className="col-sm-6">
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item"><a href="#">Home</a></li>
//                 <li className="breadcrumb-item active">Expense Category</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section className="content">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-12 col-sm-6 col-md-4">
//               <div className="info-box bg-success">
//                 <div className="info-box-content">
//                   <span className="info-box-text">Total Expense</span>
//                   <span className="info-box-number">
//                     {totalExpense.toFixed(2)}
//                   </span>
//                 </div>
//                 <span className="info-box-icon"><i className="material-symbols-outlined">local_atm</i></span>
//               </div>
//             </div>
//           </div>

//           <div className="card">
//             <div className="card-body">
//               <div className="card-header">
//                 <h3 className="card-title"><b>All Expense Categories</b></h3>
//                 <a href="add-expense" className="btn btn-primary btn-sm float-right rounded-0">Add Expense</a>
//               </div>

//               <div className="card-body">
//                 <div className="table-responsive">
//                   <table id="expenseList" className="display dataTable text-center">
//                     <thead>
//                       <tr>
//                         <th>SI</th>
//                         <th>Expense Date</th>
//                         <th>Expense For</th>
//                         <th>Expense Amount</th>
//                         <th>Expense Category</th>
//                         <th>Expense Description</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
                   
//                       {expenses.map((expense, index) => (
//                         <tr key={expense._id}>
//                           <td>{index + 1}</td>
//                           <td>{new Date(expense.expense_date).toLocaleDateString()}</td>
//                           <td>{expense.expense_for}</td>
//                           <td>{expense.expense_amount}</td>
//                           <td>{expense.expense_catagory.name}</td> 
//                           <td>{expense.exp_descrip}</td>
//                           <td>
                          
//                             <button className="btn btn-warning btn-sm">Edit</button>
//                             <button className="btn btn-danger btn-sm">Delete</button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ExpenseList;



import { useState, useEffect } from "react";
import axios from "axios";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false); // State to handle modal visibility
  const [selectedExpense, setSelectedExpense] = useState(null); // State for selected expense for editing

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/expense");
        setExpenses(response.data);

        const total = response.data.reduce((acc, expense) => acc + expense.expense_amount, 0);
        setTotalExpense(total);
      } catch (err) {
        setError("Failed to fetch expenses");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  // Format totalExpense as a currency string
  const formattedTotalExpense = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalExpense);

  const handleDelete = (expenseId) => {
    axios
      .delete(`http://localhost:5000/api/expense/${expenseId}`)
      .then(() => {
        setExpenses((prevExpenses) =>
          prevExpenses.filter((expense) => expense._id !== expenseId)
        );
        alert("Expense deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting expense:", error);
        alert("Error deleting expense.");
      });
  };

  const handleEdit = (expenseId) => {
    const expenseToEdit = expenses.find((expense) => expense._id === expenseId);
    setSelectedExpense(expenseToEdit); // Set the selected expense for editing
    setOpenModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedExpense(null); // Clear the selected expense
  };

  const handleUpdate = () => {
    if (selectedExpense) {
      axios
        .put(`http://localhost:5000/api/expense/${selectedExpense._id}`, selectedExpense)
        .then(() => {
          setExpenses((prevExpenses) =>
            prevExpenses.map((expense) =>
              expense._id === selectedExpense._id ? selectedExpense : expense
            )
          );
          alert("Expense updated successfully!");
          handleCloseModal(); // Close the modal after successful update
        })
        .catch((error) => {
          console.error("Error updating expense:", error);
          alert("Error updating expense.");
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="right-contentDashboard w-98">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Expense Categories</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Expense Category</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="info-box bg-success">
                <div className="info-box-content">
                  <span className="info-box-text">Total Expense</span>
                  <span className="info-box-number">{formattedTotalExpense}</span>
                </div>
                <span className="info-box-icon">
                  <i className="material-symbols-outlined">local_atm</i>
                </span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">
                  <b>All Expense Categories</b>
                </h3>
                <a href="add-expense" className="btn btn-primary btn-sm float-right rounded-0">
                  Add Expense
                </a>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table id="expenseList" className="display dataTable text-center">
                    <thead>
                      <tr>
                        <th>SI</th>
                        <th>Expense Date</th>
                        <th>Expense For</th>
                        <th>Expense Amount</th>
                        <th>Expense Category</th>
                        <th>Expense Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {expenses.map((expense, index) => (
                        <tr key={expense._id}>
                          <td>{index + 1}</td>
                          <td>{new Date(expense.expense_date).toLocaleDateString()}</td>
                          <td>{expense.expense_for}</td>
                          <td>{expense.expense_amount}</td>
                          <td>{expense.expense_catagory.name}</td>
                          <td>{expense.exp_descrip}</td>
                          <td>
                            <button
                              className="btn btn-warning btn-sm"
                              onClick={() => handleEdit(expense._id)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm ml-2"
                              onClick={() => handleDelete(expense._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for editing expense */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Edit Expense</DialogTitle>
        <DialogContent>
          {selectedExpense && (
            <>
              <TextField
                label="Expense For"
                variant="outlined"
                fullWidth
                name="expense_for"
                value={selectedExpense.expense_for}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                label="Expense Amount"
                variant="outlined"
                fullWidth
                name="expense_amount"
                value={selectedExpense.expense_amount}
                onChange={handleChange}
                margin="normal"
                type="number"
              />
              <TextField
                label="Expense Description"
                variant="outlined"
                fullWidth
                name="exp_descrip"
                value={selectedExpense.exp_descrip}
                onChange={handleChange}
                margin="normal"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ExpenseList;
