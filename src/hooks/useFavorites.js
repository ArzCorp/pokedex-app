import { useEffect, useState } from 'react'
import {
	addFavoritePokemonApi,
	getFavoritesPokemonApi,
	isFavoritePokemonApi,
	removeFavoritePokemonApi,
} from '../utils/api/FavoritesApi'

export const useFavorites = (id) => {
	const [favorites, setFavorites] = useState([])
	const [isFavorite, setIsFavorite] = useState(false)

	const getFavoritesPokemon = async () => {
		const pokemon = await getFavoritesPokemonApi()
		console.log({ pokemon })
		setFavorites(pokemon)
	}

	const addFavoritePokemon = async () => {
		await addFavoritePokemonApi(id)
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

	return { favorites, addFavoritePokemon, isFavorite, removeFavoritePokemon }
}
