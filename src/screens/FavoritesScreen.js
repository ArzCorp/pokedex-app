import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useContext } from 'react'
import { SafeAreaView } from 'react-native'
import FavoritesNotLogged from '../components/FavoritesNotLogged'
import PokemonList from '../components/PokemonList'
import { AuthContext } from '../context/AuthContext'
import { useFavorites } from '../hooks/useFavorites'

export default function FavoritesScreen() {
	const { isAuth } = useContext(AuthContext)
	const { favorites, getFavoritesPokemon } = useFavorites()

	useFocusEffect(
		useCallback(() => {
			getFavoritesPokemon()
		}, [])
	)

	return (
		<SafeAreaView>
			{isAuth ? <PokemonList pokemon={favorites} /> : <FavoritesNotLogged />}
		</SafeAreaView>
	)
}
