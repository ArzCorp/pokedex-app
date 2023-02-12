import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { getPokemonApi } from '../utils/api/pokemonApi'

export default function PokedexScreen() {
	const [pokemon, setPokemon] = useState([])

	const fetchPokemon = async () => {
		const { results } = await getPokemonApi()
		setPokemon(results)
	}

	useEffect(() => {
		fetchPokemon()
	}, [])

	return (
		<SafeAreaView>
			<Text>Pokedex</Text>
			<Text>Pokedex</Text>
			<Text>Pokedex</Text>
			<Text>Pokedex</Text>
			<Text>Pokedex</Text>
			<Text>Pokedex</Text>
		</SafeAreaView>
	)
}
