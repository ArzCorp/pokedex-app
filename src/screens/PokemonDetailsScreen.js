import React from 'react'
import { Text } from 'react-native'
import { usePokemonDetail } from '../hooks/usePokemonDetails'

export default function PokemonDetailsScreen({ route: { params } }) {
	const { pokemonDetails } = usePokemonDetail(params.id)
	return <Text>{pokemonDetails.name}</Text>
}
