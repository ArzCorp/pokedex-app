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
				<Text style={styles.pokemonName}>{pokemonName}</Text>
				<Text style={styles.pokemonNumber}>#{pokemonNumber}</Text>
			</View>
			<View style={styles.pokemonImageContainer}>
				<Image style={styles.pokemonImage} source={{ uri: pokemonImage }} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	pokemonContainer: {
		paddingTop: 55,
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
	pokemonName: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 25,
	},
	pokemonNumber: {
		color: 'white',
		fontSize: 19,
	},
	pokemonDataContainer: {
		paddingTop: 12,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-between',
	},
	pokemonImageContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		resizeMode: 'contain',
	},
	pokemonImage: {
		width: 200,
		height: 200,
	},
})
