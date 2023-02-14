import { API_HOST } from '../constants'

export const getPokemonApi = async () => {
	const URL = `${API_HOST}/pokemon?limit=20&offset=0`

	try {
		const response = await fetch(URL)
		const result = await response.json()
		return result
	} catch (error) {
		throw error
	}
}

export const getPokemonDetailApi = async (apiUrl) => {
	try {
		const response = await fetch(apiUrl)
		const result = await response.json()
		return result
	} catch (error) {
		throw error
	}
}
