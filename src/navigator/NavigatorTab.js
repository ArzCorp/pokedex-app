import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import PokedexIcon from '../components/PokedexIcon'
import { PokedexScreen } from '../screens/PokedexScreen'

const { Navigator, Screen } = createBottomTabNavigator()

export default function NavigatorTab() {
	return (
		<Navigator>
			<Screen
				name="home"
				component={HomeScreen}
				options={{
					tabBarLabel: 'Favoritos',
					tabBarIcon: ({ size, color }) => (
						<FontAwesomeIcon icon={faHeart} size={size} color={color} />
					),
				}}
			/>
			<Screen
				name="Pokedex"
				component={PokedexScreen}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ focused }) => <PokedexIcon isActive={focused} />,
				}}
			/>
			<Screen
				name="login"
				component={LoginScreen}
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
