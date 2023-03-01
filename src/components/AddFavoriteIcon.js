import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeartBroken, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Pressable } from 'react-native'
import { useFavorites } from '../hooks/useFavorites'

export default function AddFavoriteIcon({ pokemonId }) {
	const { addFavoritePokemon, isFavorite, removeFavoritePokemon } =
		useFavorites(pokemonId)
	const icon = isFavorite ? faHeartBroken : faHeart

	const toggleFavoritePokemon = isFavorite
		? removeFavoritePokemon
		: addFavoritePokemon

	return (
		<Pressable onPress={toggleFavoritePokemon}>
			<FontAwesomeIcon
				style={{
					marginRight: 20,
					color: 'red',
				}}
				icon={icon}
				size={20}
			/>
		</Pressable>
	)
}
