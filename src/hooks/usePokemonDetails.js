import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { getPokemonDetailApi } from '../utils/api/pokemonApi'
import { API_HOST } from '../utils/constants'
import { mappedPokemonData } from '../utils/mappedPokemonData'

export const usePokemonDetail = (pokemonId) => {
	const [loading, setLoading] = useState(false)
	const [pokemonDetails, setPokemonDetails] = useState({})
	const navigator = useNavigation()

	const getPokemonDetails = async (id) => {
		const URL_ID = pokemonId || id
		setLoading(true)
		try {
			const result = await getPokemonDetailApi(`${API_HOST}/pokemon/${URL_ID}`)
			const pokemonData = mappedPokemonData(result)
			setPokemonDetails(pokemonData)
			setLoading(false)
			return pokemonData
		} catch (error) {
			navigator.goBack()
		}
	}

	useEffect(() => {
		if (pokemonId) {
			getPokemonDetails()
		}
	}, [])

	return { pokemonDetails, isLoading: loading, getPokemonDetails }
}
