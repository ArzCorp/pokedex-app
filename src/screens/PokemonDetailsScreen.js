import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import AddFavoriteIcon from '../components/AddFavoriteIcon'
import PokemonDetails from '../components/pokemonDetails'
import { usePokemonDetail } from '../hooks/usePokemonDetails'

export default function PokemonDetailsScreen({
	navigation,
	route: { params },
}) {
	const { pokemonDetails } = usePokemonDetail(params.id)

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <AddFavoriteIcon pokemonId={pokemonDetails.id} />,
		})
	}, [pokemonDetails])

	return (
		<SafeAreaView>
			<PokemonDetails {...pokemonDetails} />
		</SafeAreaView>
	)
}
