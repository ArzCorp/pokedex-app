import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import FavoritesScreen from '../screens/FavoritesScreen'

const Stack = createStackNavigator()

export default function FavoritesStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					title: 'Favoritos',
				}}
			/>
		</Stack.Navigator>
	)
}
