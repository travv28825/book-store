import React, { useState, useContext } from "react";
import { BACKEND_URL } from "../../utils/constants";
// import { storage } from "../../utils/storage";

const FileContext = React.createContext(null);

const useFile = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error(`Can't use "useContext" without an FileProvider!`);
  }
  return context;
};

const FileProvider = (props) => {
  const [filePath, setFilePath] = useState({ path: "/STORE" });

  const handleResponse = (response) => {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (data.success === false) {
        // logout();
      }
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          // logout();
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  };
  const getFiles = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filePath),
    };
    return fetch(`${BACKEND_URL}/`, requestOptions)
      .then(handleResponse)
      .then((data) => data);
  };
  const getFolders = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filePath),
    };
    return fetch(`${BACKEND_URL}/folders`, requestOptions)
      .then(handleResponse)
      .then((data) => data);
  };

  return (
    <FileContext.Provider
      value={{ setFilePath, getFiles, getFolders }}
      {...props}
    />
  );
};

export { useFile };
export default FileProvider;
