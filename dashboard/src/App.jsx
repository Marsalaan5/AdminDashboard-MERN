
import "./App.css";
import "./Responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "./context/Context.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Addstocks from "./pages/Stocks/Addstocks.jsx";
// import ProductList from "./pages/Stocks/ProductList.jsx";
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
// import EditCustomer from "./pages/Customer/EditCustomer.jsx";
// import AddCustomer from "./pages/Customer/AddCustomer.jsx";

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null); 
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  
  const context = useContext(MyContext)

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("themeMode") || "light";
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
  
    if (storedUser && storedToken) {
      try {
        context.setUser(JSON.parse(storedUser));
        context.setIsLogin(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        context.setUser(null);
        context.setIsLogin(false);
      }
    }
  }, []);


  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(themeMode); 
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const value = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
    user,
    setUser,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>
       
        {!isHideSidebarAndHeader && <Header />}

        <div className="main d-flex">
        
          {!isHideSidebarAndHeader && (
            <div className={`sidebarWrapper ${isToggleSidebar ? "toggle" : ""}`}>
              <Sidebar />
            </div>
          )}

          <div className={`content ${isToggleSidebar ? "toggle" : ""}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/newsell" element={<Newsell />} />
              <Route path="/sell_list" element={<SellList />} />
              <Route path="/sell_return" element={<Sellreturn />} />

              <Route path="/newbuy" element={<NewBuy />} />
              <Route path="/buy_list" element={<BuyList/>} />
              <Route path="/buy_refund" element={<BuyRefund />} />

              <Route path="/customers" element={<Customer/>} />
              {/* <Route path="/add_customers" element={<AddCustomer/>} /> */}
              {/* <Route path="/edit_customers" element={<EditCustomer/>} /> */}


              <Route path="/suppliers" element={<Supplier/>} />


              <Route path="/category" element={<Category/>} />
              <Route path="/addstocks" element={<Addstocks />} />
              <Route path="/product_list" element={<ProductList />} />

              <Route path="/products_upload" element={<AddProduct/>} />
              <Route path="/edit-product/:productId" element={<EditProduct/>} />
              <Route path="/products_view" element={<ProductDetail/>} />
              <Route path="/productlist" element={<Products />} />

            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
