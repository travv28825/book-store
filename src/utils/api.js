import { storage } from './storage'
import { AUTH_STORAGE_JWT } from './constants';

const authHeader = () => {
  let token = storage.get(AUTH_STORAGE_JWT)
  return token
    ? {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    : {}
};

export { authHeader };
