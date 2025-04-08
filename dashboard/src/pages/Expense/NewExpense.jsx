
import { useState, useEffect } from 'react';
import axios from 'axios';

function NewExpense() {

     // State to hold expense form data
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseFor, setExpenseFor] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');

  // State to hold categories fetched from the backend
  const [expenseCategories, setExpenseCategories] = useState([]);

  // State for handling loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch categories from backend when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/expense-categories")
      .then((response) => {
        if (response.data.length > 0) {
          
          setExpenseCategories(response.data);
        } else {
          setExpenseCategories([]);
          console.log("Expense Selected:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setExpenseCategories([]); 
      });
  }, []);
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!expenseFor || !expenseAmount || !expenseCategory) {
      alert('Please fill all required fields');
      return;
    }

    const expenseData = {
      expense_date: expenseDate,
      expense_for: expenseFor,
      expense_catagory: expenseCategory,
      expense_amount: expenseAmount,
      exp_descrip: expenseDescription,
    };

    try {
      
      await axios.post('http://localhost:5000/api/expense', expenseData);
      alert('Expense added successfully');
   
      setExpenseDate('');
      setExpenseFor('');
      setExpenseCategory('');
      setExpenseAmount('');
      setExpenseDescription('');
    } catch (err) {
      setError('Failed to add expense');
      console.error(err);
    }
  };

 
  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="right-contentDashboard w-98">
      <section >
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-md-8 offset-md-2 col-lg-8 offset-lg-2 mt-3">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <b>Add Expense</b>
                  </h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="expense_date">Expense Date</label>
                          <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="addon-wrapping"
                              >
                                <i className="fas fa-calendar-week"></i>
                              </span>
                            </div>
                            <input
                              type="date"
                              className="form-control"
                              id="expense_date"
                              name="expense_date"
                              value={expenseDate}
                              onChange={(e) => setExpenseDate(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="expense_for">Expense For *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="expense_for"
                            name="expense_for"
                            value={expenseFor}
                            onChange={(e) => setExpenseFor(e.target.value)}
                            placeholder="Expense for"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="expense_catagory">Expense Category</label>
                          <select
                            name="expense_catagory"
                            id="expense_catagory"
                            className="form-control"
                            value={expenseCategory}
                            onChange={(e) => setExpenseCategory(e.target.value)}
                            required
                          >
                            <option value="">Select Category</option>
                            {expenseCategories.map((category) => (
                              <option key={category._id} value={category._id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="expense_amount">Expense Amount *</label>
                          <input
                            type="number"
                            className="form-control"
                            id="expense_amount"
                            name="expense_amount"
                            value={expenseAmount}
                            onChange={(e) => setExpenseAmount(e.target.value)}
                            placeholder="Expense Amount"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="exp_descrip">Description</label>
                      <textarea
                        rows="3"
                        className="form-control"
                        id="exp_descrip"
                        name="exp_descrip"
                        value={expenseDescription}
                        onChange={(e) => setExpenseDescription(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block mt-4 rounded-0">
                        Add Expense
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewExpense