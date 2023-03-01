import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import Pokemon from './Pokemon'

export default function PokemonList({ pokemon, hasNextPage, getPokemon }) {
	return (
		<FlatList
			data={pokemon}
			keyExtractor={(pokemon) => String(pokemon.pokedex_order)}
			onEndReached={getPokemon || null}
			renderItem={({ item }) => <Pokemon {...item} />}
			numColumns={2}
			ListFooterComponent={hasNextPage && <ActivityIndicator size="large" />}
			showsHorizontalScrollIndicator={false}
		/>
	)
}
