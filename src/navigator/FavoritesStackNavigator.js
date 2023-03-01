import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import FavoritesScreen from '../screens/FavoritesScreen'
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen'

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
			<Stack.Screen
				name="Pokemon"
				component={PokemonDetailsScreen}
				options={{
					title: '',
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	)
}
