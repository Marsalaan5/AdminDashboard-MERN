import "./App.css";
import "./Responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { MyContext } from "./context/Context.jsx";

// Layout
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

// Auth
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Newsell from "./pages/Sells/Newsell.jsx";
import SellList from "./pages/Sells/SellList.jsx";
import Sellreturn from "./pages/Sells/Sellreturn.jsx";
import NewBuy from "./pages/Buy/NewBuy.jsx";
import BuyList from "./pages/Buy/BuyList.jsx";
import BuyRefund from "./pages/Buy/BuyRefund.jsx";
import Category from "./pages/Category/Category.jsx";
import ProductDetail from "./pages/Products/ProductDetail.jsx";
import AddProduct from "./pages/Products/AddProduct.jsx";
import Products from "./pages/Products/Products.jsx";
import EditProduct from "./pages/Products/EditProduct.jsx";
import Customer from "./pages/Customer/Customer.jsx";
import ProductList from "./pages/Stocks/ProductList.jsx";
import Supplier from "./pages/Supplier/Supplier.jsx";
import Staff from "./pages/Staff/Staff.jsx";
import NewExpense from "./pages/Expense/NewExpense.jsx";
import ExpenseList from "./pages/Expense/ExpenseList.jsx";
import ExpenseCategoryList from "./pages/Expense/ExpenseCategoryList.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Addstocks from "./pages/Stocks/Addstocks.jsx";
import UserManagement from "./pages/UserManagement/UserManagement.jsx";


function App() {
  const {
    isLoggedIn,
    themeMode,
    isToggleSidebar,
    isHideSidebarAndHeader,
  } = useContext(MyContext);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(themeMode);
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  return (
    <BrowserRouter>
      <div className="main d-flex">
        {!isHideSidebarAndHeader && isLoggedIn && <Header />}
        {!isHideSidebarAndHeader && isLoggedIn && (
          <div className={`sidebarWrapper ${isToggleSidebar ? "toggle" : ""}`}>
            <Sidebar />
          </div>
        )}

        <div className={`content ${isToggleSidebar ? "toggle" : ""}`}>
          <Routes>
    
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            
            {isLoggedIn ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/newsell" element={<Newsell />} />
                <Route path="/sell_list" element={<SellList />} />
                <Route path="/sell_return" element={<Sellreturn />} />
                <Route path="/newbuy" element={<NewBuy />} />
                <Route path="/buy_list" element={<BuyList />} />
                <Route path="/buy_refund" element={<BuyRefund />} />
                <Route path="/newexpense" element={<NewExpense />} />
                <Route path="/expense_list" element={<ExpenseList />} />
                <Route path="/expense_category_list" element={<ExpenseCategoryList />} />
                <Route path="/customers" element={<Customer />} />
                <Route path="/suppliers" element={<Supplier />} />
                <Route path="/category" element={<Category />} />
                <Route path="/addstocks" element={<Addstocks />} />
                <Route path="/product_list" element={<ProductList />} />
                <Route path="/edit-product/:productId" element={<EditProduct />} />
                <Route path="/products_view" element={<ProductDetail />} />
                <Route path="/products_upload" element={<AddProduct />} />
                <Route path="/productlist" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/user_management" element={<UserManagement />} />
              </>
            ) : (
              <>
             
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/dashboard"element={<Navigate to="/login" />} />
              
                
                <Route path="/newsell" element={<Navigate to="/login" />} />
                <Route path="/sell_list" element={<Navigate to="/login" />} />
                <Route path="/sell_return" element={<Navigate to="/login" />} />
                <Route path="/newbuy" element={<Navigate to="/login" />} />
                <Route path="/buy_list" element={<Navigate to="/login" />} />
                <Route path="/buy_refund" element={<Navigate to="/login" />} />
                <Route path="/buy_refund" element={<Navigate to="/login" />} />
                <Route path="/newexpense" element={<Navigate to="/login" />} />
                <Route path="/expense_list" element={<Navigate to="/login" />} />
                <Route path="/expense_category_list" element={<Navigate to="/login" />} />
                <Route path="/customers" element={<Navigate to="/login" />} />
                <Route path="/suppliers" element={<Navigate to="/login" />} />
                <Route path="/category" element={<Navigate to="/login" />} />
                <Route path="/addstocks" element={<Navigate to="/login" />} />
                <Route path="/product_list" element={<Navigate to="/login" />} />
                <Route path="/edit-product/:productId" element={<Navigate to="/login" />} />
                <Route path="/products_view" element={<Navigate to="/login" />} />
                <Route path="/products_upload" element={<Navigate to="/login" />} />
                <Route path="/productlist" element={<Navigate to="/login" />} />
                <Route path="/profile" element={<Navigate to="/login" />} />
                <Route path="/staff" element={<Navigate to="/login" />} />
                <Route path="/user_management" element={<Navigate to="/login" />} />
    
              </>
            )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
