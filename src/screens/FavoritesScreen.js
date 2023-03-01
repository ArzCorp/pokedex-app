import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import PokemonList from '../components/PokemonList'
import { useFavorites } from '../hooks/useFavorites'

export default function FavoritesScreen() {
	const { favorites, getFavoritesPokemon } = useFavorites()

	useFocusEffect(
		useCallback(() => {
			getFavoritesPokemon()
		}, [])
	)

	return (
		<SafeAreaView>
			<PokemonList pokemon={favorites} />
		</SafeAreaView>
	)
}
