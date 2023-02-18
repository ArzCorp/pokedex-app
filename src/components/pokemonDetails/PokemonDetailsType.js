import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { getPokemonColor } from '../../utils/getPokemonColor'

export default function PokemonDetailsType({ pokemonTypes = [] }) {
	return (
		<View style={styles.typesContainer}>
			{pokemonTypes.map((pokemon) => (
				<Text
					key={pokemon.slot}
					style={[
						styles.typePill,
						{
							backgroundColor: getPokemonColor(pokemon.type.name),
						},
					]}
				>
					{pokemon.type.name}
				</Text>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	typesContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginHorizontal: 20,
	},
	typePill: {
		borderRadius: 30,
		marginTop: 20,
		marginHorizontal: 5,
		paddingHorizontal: 10,
		paddingVertical: 3,
		color: 'white',
		fontWeight: 'bold',
	},
})
