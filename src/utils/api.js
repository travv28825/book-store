import { storage } from './storage'
import { AUTH_STORAGE_JWT } from './constants';
// import { useAuth } from '../providers/Auth';
// const { logout } = useAuth();

const authHeader = () => {
  let token = storage.get(AUTH_STORAGE_JWT)
  return token
    ? {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    : {}
};

// const handleResponse = response => {
//   return response.text().then(text => {
//     const data = text && JSON.parse(text)
//     if (data.success === false) {
//       logout()
//     }
//     if (!response.ok) {
//       if (response.status === 401) {
//         logout()
//       }
//       const error = (data && data.message) || response.statusText
//       return Promise.reject(error)
//     }

//     return data
//   })
// }



export { authHeader };
