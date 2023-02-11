import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PokedexScreen from '../screens/PokedexScreen'

const { Navigator, Screen } = createStackNavigator()

export default function PokedexStackNavigator() {
	return (
		<Navigator initialRouteName="home">
			<Screen name="Pokedex" component={PokedexScreen} />
		</Navigator>
	)
}
