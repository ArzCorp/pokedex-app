import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { getPokemonColor } from '../../utils/getPokemonColor'

export default function PokemonDetailsHeader({
	pokemonName,
	pokemonNumber,
	pokemonImage,
	pokemonType,
}) {
	const bgStyles = {
		...styles.pokemonBg,
		backgroundColor: getPokemonColor(pokemonType),
	}

	return (
		<View style={styles.pokemonContainer}>
			<View style={bgStyles} />
			<View style={styles.pokemonDataContainer}>
				<Text>{pokemonName}</Text>
				<Text>#{pokemonNumber}</Text>
			</View>
			<View style={styles.pokemonImageContainer}>
				<Image style={styles.pokemonImage} source={{ uri: pokemonImage }} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	pokemonContainer: {
		paddingTop: 20,
	},
	pokemonBg: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignContent: 'center',
		justifyContent: 'center',
		borderBottomEndRadius: 300,
		borderBottomLeftRadius: 300,
		transform: [{ scaleX: 2 }],
	},
	pokemonDataContainer: {},
	pokemonImageContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
	},
	pokemonImage: {
		width: 200,
		height: 200,
	},
})
