import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); //to prevent passing of data before ready
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const contextData = {
    user,
  };

  return (
    <AuthContext.Provider>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
