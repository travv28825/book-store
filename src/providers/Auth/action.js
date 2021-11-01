import {
  AUTH_STORAGE_JWT,
  USER_DATA_KEY,
  CURRENT_USER,
  BACKEND_URL,
} from "../../utils/constants";
import { storage } from "../../utils/storage";

export async function login(dispatch, loginPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetch(`${BACKEND_URL}/auth/authenticate`, requestOptions);
    let data = await response.json();

    if (data.success) {
      console.log(data)
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user ,follow:data.follow});
      storage.set(AUTH_STORAGE_JWT, data.token);
      storage.set(USER_DATA_KEY, true);
      storage.set(CURRENT_USER, data.user);
      return data;
    }

    dispatch({ type: "LOGIN_ERROR", error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}
export async function singup(loginPayload) {
  console.log(loginPayload)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };

  try {
    // dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetch(`${BACKEND_URL}/auth/singup`, requestOptions);
    let data = await response.json();

    if (data.success) {
      // dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
      // storage.set(AUTH_STORAGE_JWT, data.token);
      // storage.set(USER_DATA_KEY, true);
      // storage.set(CURRENT_USER, data.user);
      return data;
    }

    // dispatch({ type: "LOGIN_ERROR", error: data.errors[0] });
    return;
  } catch (error) {
    console.log(`CatchError singup:: ${error}`)
    // dispatch({ type: "LOGIN_ERROR", error: error });
  }
}
export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  storage.clear();
}
