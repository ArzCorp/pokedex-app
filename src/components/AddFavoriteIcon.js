import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Pressable } from 'react-native'

export default function AddFavoriteIcon({ pokemonId }) {
	const addFavorite = () => console.log(pokemonId)
	return (
		<Pressable onPress={addFavorite}>
			<FontAwesomeIcon
				style={{
					marginRight: 20,
					color: 'red',
				}}
				icon={faHeart}
				size={20}
			/>
		</Pressable>
	)
}
