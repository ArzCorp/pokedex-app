import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, Pressable, StyleSheet } from 'react-native'
import { getPokemonColor } from '../utils/getPokemonColor'

export default function Pokemon({ name, pokedex_order, image, type, id }) {
	const navigate = useNavigation()

	const cardContainerStyles = {
		...styles.cardContainer,
		backgroundColor: getPokemonColor(type),
	}

	const moveToPokemoDetails = () => {
		navigate.navigate('Pokemon', { id })
	}

	return (
		<Pressable onPress={moveToPokemoDetails} style={cardContainerStyles}>
			<Text style={styles.pokemonName}>{name}</Text>
			<Text style={styles.pokemonNumber}>#{pokedex_order}</Text>
			<Image style={styles.pokemonImage} source={{ uri: image }} />
		</Pressable>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		height: 120,
		marginHorizontal: 10,
		marginBottom: 15,
		borderRadius: 8,
	},
	pokemonName: {
		color: 'white',
		paddingTop: 10,
		paddingLeft: 12,
		fontSize: 17,
		fontWeight: 'bold',
		position: 'absolute',
		left: 0,
		right: 0,
		flex: 1,
	},
	pokemonNumber: {
		position: 'absolute',
		zIndex: 10,
		bottom: 5,
		right: 10,
		fontSize: 15,
		color: 'white',
	},
	pokemonImage: {
		position: 'absolute',
		bottom: 10,
		right: 12,
		width: 90,
		height: 90,
	},
})
