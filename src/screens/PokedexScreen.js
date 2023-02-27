import React from 'react'
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native'
import Loader from '../components/Loader'
import Pokemon from '../components/Pokemon'
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
			{isLoading ? (
				<Loader />
			) : (
				<FlatList
					data={pokemon}
					keyExtractor={(pokemon) => String(pokemon.pokedex_order)}
					onEndReached={getPokemon}
					renderItem={({ item }) => <Pokemon {...item} />}
					numColumns={2}
					ListFooterComponent={
						hasNextPage && <ActivityIndicator size="large" />
					}
					showsHorizontalScrollIndicator={false}
				/>
			)}
		</SafeAreaView>
	)
}
