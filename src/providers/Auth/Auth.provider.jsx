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

	const login = (data) => {
		console.log('to login')
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};

		return fetch(`${BACKEND_URL}/authenticate`, requestOptions)
			.then(handleResponse)
			.then(({ success, token,user }) => {
				if (success) {
					console.log("save tokenn");
					storage.set(AUTH_STORAGE_JWT, token);
					storage.set(USER_DATA_KEY, true);
					setAuthenticated(true);
				}
			});
	};
	const register = (data) => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};

		return fetch(`${BACKEND_URL}/register`, requestOptions)
			.then(handleResponse)
			.then(({ success }) => {
				if (success) {
					console.log('then:: ', success)
				}
			});
	}; 
	const logout = () => {
		storage.clear();
		setAuthenticated(false);
	};

	const handleResponse = (response) => {
		return response.text().then((text) => {
			const data = text && JSON.parse(text);
			if (data.success === false) {
				logout();
			}
			if (!response.ok) {
				if (response.status === 401) {
					// auto logout if 401 response returned from api
					logout();
				}

				const error = (data && data.message) || response.statusText;
				return Promise.reject(error);
			}

			return data;
		});
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
