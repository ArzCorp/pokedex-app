import React from 'react'
import { View } from 'react-native'
import PokedexIcon from './PokedexIcon'

export default function Loader() {
	return (
		<View
			style={{
				flexDirection: 'row',
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<PokedexIcon />
		</View>
	)
}
