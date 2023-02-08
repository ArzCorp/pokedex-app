import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'

const { Navigator, Screen } = createStackNavigator()

export default function NavigatorStack() {
	return (
		<Navigator initialRouteName="home">
			<Screen name="login" component={LoginScreen} />
			<Screen name="home" component={HomeScreen} />
		</Navigator>
	)
}
