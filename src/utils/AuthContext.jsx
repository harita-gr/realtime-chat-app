import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwriteConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); //to prevent passing of data before ready
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUserOnLoad();
  }, []);

  //Persist login
  const getUserOnLoad = async () => {
    try {
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  const handleUserLogin = async (e, credentials) => {
    e.preventDefault();

    try {
      const response = await account.createEmailSession(
        credentials.email,
        credentials.password
      );
      const accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUserLogOut = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const contextData = {
    user,
    handleUserLogin,
    handleUserLogOut,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
