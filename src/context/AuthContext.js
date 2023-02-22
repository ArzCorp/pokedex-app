import { createContext, useState } from 'react'
import { AUTH_CONTEXT_INITIAL_VALUES } from '../utils/constants'

export const AuthContext = createContext(AUTH_CONTEXT_INITIAL_VALUES)

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(undefined)

	const logIn = (userData) => setUser(userData)

	const logOut = () => setUser(undefined)

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuth: user,
				logIn,
				logOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
