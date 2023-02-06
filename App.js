import { NavigationContainer } from '@react-navigation/native'
import NavigatorStack from './src/navigator/NavigatorStack'

export default function App() {
	return (
		<NavigationContainer>
			<NavigatorStack />
		</NavigationContainer>
	)
}
