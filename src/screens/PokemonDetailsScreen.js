import React from 'react'
import { SafeAreaView } from 'react-native'
import PokemonDetails from '../components/pokemonDetails'
import { usePokemonDetail } from '../hooks/usePokemonDetails'

export default function PokemonDetailsScreen({ route: { params } }) {
	const { pokemonDetails } = usePokemonDetail(params.id)
	return (
		<SafeAreaView>
			<PokemonDetails {...pokemonDetails} />
		</SafeAreaView>
	)
}
