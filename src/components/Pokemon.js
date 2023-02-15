import React from 'react'
import { Image, Text, Pressable, StyleSheet } from 'react-native'
import { getPokemonColor } from '../utils/getPokemonColor'

export default function Pokemon({ name, pokedex_order, image, type }) {
	const cardContainerStyles = {
		...styles.cardContainer,
		backgroundColor: getPokemonColor(type),
	}

	return (
		<Pressable
			onPress={() => console.log(`Move to ${name}`)}
			style={cardContainerStyles}
		>
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
		borderRadius: 15,
	},
	pokemonName: {
		color: 'white',
		paddingTop: 6,
		fontSize: 17,
		fontWeight: 'bold',
		position: 'absolute',
		bottom: 10,
		left: 0,
		right: 0,
		flex: 1,
		paddingLeft: 5,
		backgroundColor: 'gray',
	},
	pokemonNumber: {
		position: 'absolute',
		bottom: 3,
		right: 10,
		fontSize: 15,
		color: 'white',
	},
	pokemonImage: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		width: 90,
		height: 90,
	},
})
