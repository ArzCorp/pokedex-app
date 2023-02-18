import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PokedexScreen from '../screens/PokedexScreen'
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen'

const { Navigator, Screen } = createStackNavigator()

export default function PokedexStackNavigator() {
	return (
		<Navigator initialRouteName="home">
			<Screen name="Pokedex" component={PokedexScreen} />
			<Screen
				name="Pokemon"
				component={PokemonDetailsScreen}
				options={{
					title: '',
					headerTransparent: true,
				}}
			/>
		</Navigator>
	)
}
