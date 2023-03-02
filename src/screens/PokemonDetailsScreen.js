import React, { useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import AddFavoriteIcon from '../components/AddFavoriteIcon'
import Loader from '../components/Loader'
import PokemonDetails from '../components/pokemonDetails'
import { AuthContext } from '../context/AuthContext'
import { usePokemonDetail } from '../hooks/usePokemonDetails'

export default function PokemonDetailsScreen({
	navigation,
	route: { params },
}) {
	const { pokemonDetails, isLoading } = usePokemonDetail(params.id)
	const { isAuth } = useContext(AuthContext)

	useEffect(() => {
		navigation.setOptions({
			headerRight: () =>
				isAuth ? <AddFavoriteIcon pokemonId={pokemonDetails.id} /> : null,
		})
	}, [pokemonDetails])

	return (
		<SafeAreaView>
			{isLoading ? <Loader /> : <PokemonDetails {...pokemonDetails} />}
		</SafeAreaView>
	)
}
