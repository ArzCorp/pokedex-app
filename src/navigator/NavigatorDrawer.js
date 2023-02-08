import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

const { Navigator, Screen } = createDrawerNavigator()

export default function NavigatorDrawer() {
	return (
		<Navigator>
			<Screen name="home" component={HomeScreen} />
			<Screen name="login" component={LoginScreen} />
		</Navigator>
	)
}
