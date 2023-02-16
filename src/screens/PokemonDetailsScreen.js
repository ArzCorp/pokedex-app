import React from 'react'
import { Text } from 'react-native'

export default function PokemonDetailsScreen({ route }) {
	console.log(route.params.id)
	return <Text>Pokemon details screen</Text>
}
