import { CURRENT_USER, USER_DATA_KEY } from "../../utils/constants";
import { storage } from "../../utils/storage";

let user = storage.get(CURRENT_USER);
let auth = storage.get(USER_DATA_KEY);

export const initialState = {
  userDetails: user || "",
  loading: false,
  authenticated: false,
  errorMessage: null,
  authenticated: Boolean(auth) || false,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userDetails: action.payload,
        loading: false,
        authenticated: true,
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case "LOGIN_STATE":
      return {
        ...initialState,
        authenticated: action.authState,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        authenticated: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
