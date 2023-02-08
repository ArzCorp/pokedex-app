import { NavigationContainer } from '@react-navigation/native'
import NavigatorDrawer from './src/navigator/NavigatorDrawer'
import NavigatorStack from './src/navigator/NavigatorStack'
import NavigatorTab from './src/navigator/NavigatorTab'

export default function App() {
	return (
		<NavigationContainer>
			{/*<NavigatorStack */}
			{/*<NavigatorTab />*/}
			<NavigatorDrawer />
		</NavigationContainer>
	)
}
