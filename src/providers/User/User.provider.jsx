import React, { useState, useEffect } from 'react';
import decodeJwt from 'jwt-decode';

import { AUTH_STORAGE_JWT } from '../../utils/constants';
import { storage } from '../../utils/storage';

const UserContext = React.createContext(null);

const UserProvider = props => {
  const [user, setUser] = useState({username:'default_name',avatar:'',email:''})
  useEffect(() => {
    const token = storage.get(AUTH_STORAGE_JWT)
    if (token) {
      const decoded = decodeJwt(token)._doc
      setUser(decoded)
    }
  }, [])

  return (
    <UserContext.Provider value={{ user }} {...props} />
  )
}

const useUser = () => React.useContext(UserContext)

export { useUser };
export default UserProvider;