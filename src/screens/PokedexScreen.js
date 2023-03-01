import React from 'react'
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native'
import Loader from '../components/Loader'
import Pokemon from '../components/Pokemon'
import PokemonList from '../components/PokemonList'
import { usePokemon } from '../hooks/usePokemon'

export default function PokedexScreen() {
	const { pokemon, getPokemon, hasNextPage, isLoading } = usePokemon()

	return (
		<SafeAreaView
			style={{
				paddingBottom: 30,
				height: '100%',
			}}
		>
			{isLoading && !hasNextPage ? (
				<Loader />
			) : (
				<PokemonList
					pokemon={pokemon}
					getPokemon={getPokemon}
					hasNextPage={hasNextPage}
				/>
			)}
		</SafeAreaView>
	)
}
