export const getUserRole = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.role || null;
  };
  
  