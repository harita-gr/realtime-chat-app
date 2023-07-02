import React from "react";
import { LogOut } from "react-feather";
import { useAuth } from "../utils/AuthContext";

const Header = () => {
  const { user, handleUserLogOut } = useAuth();

  return (
    <header id="header--wrapper">
      {user ? (
        <>
          Welcome {user.name}
          <LogOut className="header--link" onClick={handleUserLogOut} />
        </>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
};

export default Header;
