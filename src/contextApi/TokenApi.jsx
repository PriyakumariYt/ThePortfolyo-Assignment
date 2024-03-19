import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children, userId }) => {
  const [user, setUser] = useState();

  // Function to fetch user data from API
  const getUserData = async () => {
    try {
      const response = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`, {
        method: "GET",
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user); 
        // console.log("tokendata", userData.user)
      } else {
        console.error("Error fetching service data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData(); 
  }, [userId]); 

  const contextValue = {
    user,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
