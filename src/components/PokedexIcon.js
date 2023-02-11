import React from 'react'
import { Image } from 'react-native'

export default function PokedexIcon({ isActive }) {
	return (
		<Image
			source={require('../assets/pokeball.png')}
			style={{
				width: 75,
				height: 75,
				top: -20,
				opacity: isActive ? 1 : 0.7,
			}}
		/>
	)
}
