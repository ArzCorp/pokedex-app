import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useFavorites } from '../hooks/useFavorites'

export default function FavoritesScreen() {
	const { favorites } = useFavorites()
	return (
		<SafeAreaView>
			<Text>Home Screen</Text>
			<Text>Home Screen</Text>
			<Text>Home Screen</Text>
			<Text>Home Screen</Text>
			<Text>Home Screen</Text>
			<Text>Home Screen</Text>
			<Text>Home Screen</Text>
			<Text>Home Screen</Text>
		</SafeAreaView>
	)
}
