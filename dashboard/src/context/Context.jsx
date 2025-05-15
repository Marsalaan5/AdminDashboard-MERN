import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create Context
export const MyContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [themeMode, setThemeMode] = useState(localStorage.getItem("themeMode") || "light");
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [isToggleSidebar, setIsToggleSidebar] = useState(false); // <-- You missed this!

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setIsLoggedIn(true);
      setToken(storedToken);
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = (newToken, newUser) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));
    setToken(newToken);
    setIsLoggedIn(true);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
  };

  return (
    <MyContext.Provider
      value={{
        themeMode,
        setThemeMode,
        isLoggedIn,
        login,
        logout,
        token,
        user,
        isHideSidebarAndHeader,
        setIsHideSidebarAndHeader,
        isToggleSidebar,
        setIsToggleSidebar, 
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
