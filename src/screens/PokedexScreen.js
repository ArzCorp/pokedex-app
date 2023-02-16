import React from 'react'
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native'
import Pokemon from '../components/Pokemon'
import { usePokemon } from '../hooks/usePokemon'

export default function PokedexScreen() {
	const { pokemon, getPokemon, hasNextPage } = usePokemon()

	return (
		<SafeAreaView
			style={{
				paddingBottom: 30,
			}}
		>
			<FlatList
				data={pokemon}
				keyExtractor={(pokemon) => String(pokemon.pokedex_order)}
				onEndReached={getPokemon}
				renderItem={({ item }) => <Pokemon {...item} />}
				numColumns={2}
				ListFooterComponent={hasNextPage && <ActivityIndicator size="large" />}
				showsHorizontalScrollIndicator={false}
			/>
		</SafeAreaView>
	)
}
