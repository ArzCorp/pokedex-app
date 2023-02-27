import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import AddFavoriteIcon from '../components/AddFavoriteIcon'
import Loader from '../components/Loader'
import PokemonDetails from '../components/pokemonDetails'
import { usePokemonDetail } from '../hooks/usePokemonDetails'

export default function PokemonDetailsScreen({
	navigation,
	route: { params },
}) {
	const { pokemonDetails, isLoading } = usePokemonDetail(params.id)

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <AddFavoriteIcon pokemonId={pokemonDetails.id} />,
		})
	}, [pokemonDetails])

	return (
		<SafeAreaView>
			{isLoading ? <Loader /> : <PokemonDetails {...pokemonDetails} />}
		</SafeAreaView>
	)
}
