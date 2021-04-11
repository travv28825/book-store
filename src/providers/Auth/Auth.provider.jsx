import React, { useState, useEffect, useContext } from "react";

import {
  AUTH_STORAGE_JWT,
  USER_DATA_KEY,
  BACKEND_URL,
} from "../../utils/constants";
import { storage } from "../../utils/storage";

const AuthContext = React.createContext(null);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
};

function AuthProvider(props) {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    const lastAuthState = storage.get(USER_DATA_KEY);
    const isAuthtenticated = Boolean(lastAuthState);
    setAuthenticated(isAuthtenticated);
  }, []);

  const login = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let response = await fetch(`${BACKEND_URL}/authenticate`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let { success, token } = await response.json();
      if (success) {
        storage.set(AUTH_STORAGE_JWT, token);
        storage.set(USER_DATA_KEY, success);
        setAuthenticated(true);
      }else{
        console.log('authentication fail')
      }
    }
  };

  const register = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let response = await fetch(`${BACKEND_URL}/register`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let { success } = await response.json();
      if (success) {
        console.log("registration success");
      }else{
        console.log('registration fail')
      }
    }
  };

  const logout = () => {
    storage.clear();
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, login, logout, register }}
      {...props}
    />
  );
}

export { useAuth };
export default AuthProvider;
