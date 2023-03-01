import AsyncStorage from '@react-native-async-storage/async-storage'
import { FAVORITES_POKEMON_STORAGE } from '../constants'

export const getFavoritesPokemonApi = async () => {
	try {
		const response = await AsyncStorage.getItem(FAVORITES_POKEMON_STORAGE)
		return JSON.parse(response) || []
	} catch (error) {
		throw error
	}
}

export const addFavoritePokemonApi = async (id) => {
	try {
		const pokemon = await getFavoritesPokemonApi()
		pokemon.push(id)
		await AsyncStorage.setItem(
			FAVORITES_POKEMON_STORAGE,
			JSON.stringify(pokemon)
		)
	} catch (error) {
		throw error
	}
}

export const isFavoritePokemonApi = async (id) => {
	try {
		const pokemon = await getFavoritesPokemonApi()
		return pokemon.some((poke) => poke === id)
	} catch (error) {
		throw error
	}
}

export const removeFavoritePokemonApi = async (id) => {
	try {
		const pokemon = await getFavoritesPokemonApi()
		const newPokemon = pokemon.filter((poke) => poke != id)
		await AsyncStorage.setItem(
			FAVORITES_POKEMON_STORAGE,
			JSON.stringify(newPokemon)
		)
	} catch (error) {
		throw error
	}
}
