import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'

import PokedexIcon from '../components/PokedexIcon'
import PokedexStackNavigator from './PokedexStackNavigator'
import AccountStackNavigator from './AccountStackNavigator'
import FavoritesStackNavigator from './FavoritesStackNavigator'

const { Navigator, Screen } = createBottomTabNavigator()

export default function AppTabNavigator() {
	return (
		<Navigator>
			<Screen
				name="Favorites"
				component={FavoritesStackNavigator}
				options={{
					tabBarLabel: 'Favoritos',
					tabBarIcon: ({ size, color }) => (
						<FontAwesomeIcon icon={faHeart} size={size} color={color} />
					),
				}}
			/>
			<Screen
				name="Pokedex"
				component={PokedexStackNavigator}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ focused }) => <PokedexIcon isActive={focused} />,
				}}
			/>
			<Screen
				name="Account"
				component={AccountStackNavigator}
				options={{
					tabBarLabel: 'Mi cuenta',
					tabBarIcon: ({ size, color }) => (
						<FontAwesomeIcon icon={faUser} size={size} color={color} />
					),
				}}
			/>
		</Navigator>
	)
}
