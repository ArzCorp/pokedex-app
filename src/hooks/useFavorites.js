import { useEffect, useState } from 'react'
import {
	addFavoritePokemonApi,
	getFavoritesPokemonApi,
	isFavoritePokemonApi,
	removeFavoritePokemonApi,
} from '../utils/api/FavoritesApi'
import { usePokemonDetail } from './usePokemonDetails'

export const useFavorites = (id) => {
	const [favorites, setFavorites] = useState([])
	const [isFavorite, setIsFavorite] = useState(false)
	const { getPokemonDetails } = usePokemonDetail()

	const getFavoritesPokemon = async () => {
		const pokemon = await getFavoritesPokemonApi()
		setFavorites(pokemon)
	}

	const addFavoritePokemon = async () => {
		await addFavoritePokemonApi(await getPokemonDetails(id))
		setIsFavorite(await isFavoritePokemonApi(id))
	}

	const removeFavoritePokemon = async () => {
		await removeFavoritePokemonApi(id)
		setIsFavorite(await isFavoritePokemonApi(id))
	}

	const isFavoritePokemon = async () => {
		const isFavorite = await isFavoritePokemonApi(id)
		setIsFavorite(isFavorite)
	}

	useEffect(() => {
		getFavoritesPokemon()
		isFavoritePokemon(id)
	}, [id])

	return {
		favorites,
		addFavoritePokemon,
		isFavorite,
		removeFavoritePokemon,
		getFavoritesPokemon,
	}
}
