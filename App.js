import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './src/context/AuthContext'
import AppTabNavigator from './src/navigator/AppTabNavigator'

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<AppTabNavigator />
			</AuthProvider>
		</NavigationContainer>
	)
}
