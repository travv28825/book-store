import React, { useContext, useReducer } from "react";

import { USER_DATA_KEY } from "../../utils/constants";
import { storage } from "../../utils/storage";
import { initialState, AuthReducer } from "./reducer";

const AuthContext = React.createContext(null);
const AuthDispatchContext = React.createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
};
const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
};
const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={authState}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export { useAuth, useAuthDispatch };
export default AuthProvider;
