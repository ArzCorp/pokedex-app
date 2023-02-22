import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './src/context/AuthContext'
import NavigatorTab from './src/navigator/NavigatorTab'

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<NavigatorTab />
			</AuthProvider>
		</NavigationContainer>
	)
}
