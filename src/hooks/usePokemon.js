import { useEffect, useState } from 'react'
import { getPokemonApi, getPokemonDetailApi } from '../utils/api/pokemonApi'
import { EMPTY_STRING } from '../utils/constants'
import { mappedPokemonData } from '../utils/mappedPokemonData'

export function usePokemon() {
	const [pokemon, setPokemon] = useState([])
	const [nextpage, setNextPage] = useState(EMPTY_STRING)

	const getPokemon = async () => {
		const { results, next } = await getPokemonApi(nextpage)
		setNextPage(next)
		const pokemonDetails = []

		for await (const poke of results) {
			const response = await getPokemonDetailApi(poke.url)
			pokemonDetails.push(mappedPokemonData(response))
		}

		setPokemon([...pokemon, ...pokemonDetails])
	}

	useEffect(() => {
		getPokemon()
	}, [])

	return { pokemon, getPokemon, hasNextPage: Boolean(nextpage) }
}
