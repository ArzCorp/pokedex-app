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
		setLoading(true)
		try {
			const result = await getPokemonDetailApi(
				`${API_HOST}/pokemon/${pokemonId}`
			)
			setPokemonDetails(mappedPokemonData(result))
		} catch (error) {
			navigator.goBack()
		}
		setLoading(false)
	}

	useEffect(() => {
		getPokemonDetails()
	}, [])

	return { pokemonDetails, isLoading: loading }
}
