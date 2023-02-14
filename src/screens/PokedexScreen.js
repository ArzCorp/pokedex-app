import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import Pokemon from '../components/Pokemon'

import { getPokemonApi, getPokemonDetailApi } from '../utils/api/pokemonApi'
import { mappedPokemonData } from '../utils/mappedPokemonData'

export default function PokedexScreen() {
	const [pokemons, setPokemons] = useState([])

	const fetchPokemon = async () => {
		const { results } = await getPokemonApi()
		const pokemonDetails = []

		for await (const poke of results) {
			const response = await getPokemonDetailApi(poke.url)
			pokemonDetails.push(mappedPokemonData(response))
		}
		setPokemons(pokemonDetails)
	}

	useEffect(() => {
		fetchPokemon()
	}, [])

	return (
		<SafeAreaView>
			<FlatList
				data={pokemons}
				keyExtractor={(pokemon) => String(pokemon.id)}
				renderItem={({ item }) => <Pokemon {...item} />}
				numColumns={2}
				showsHorizontalScrollIndicator={false}
			/>
		</SafeAreaView>
	)
}
