import React, { useContext, useReducer } from "react";

import { initialState, DocReducer } from "./reducer";

const DocContext = React.createContext(null);
const DocDispatchContext = React.createContext();

const useDoc = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useDoc" without an AuthProvider!`);
  }
  return context;
};
const useDocDispatch = () => {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useDocDispatch must be used within a AuthProvider");
  }

  return context;
};
const DocProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(DocReducer, initialState);

  return (
    <DocContext.Provider value={authState}>
      <DocDispatchContext.Provider value={dispatch}>
        {children}
      </DocDispatchContext.Provider>
    </DocContext.Provider>
  );
};

export { useDoc, useDocDispatch };
export default DocProvider;
