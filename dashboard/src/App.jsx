
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
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
