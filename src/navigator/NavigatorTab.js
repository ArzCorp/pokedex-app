import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

const { Navigator, Screen } = createBottomTabNavigator()

export default function NavigatorTab() {
	return (
		<Navigator>
			<Screen name="home" component={HomeScreen} />
			<Screen name="login" component={LoginScreen} />
		</Navigator>
	)
}
