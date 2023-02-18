import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function PokemonDetailsStats({ pokemonStats = [] }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Base Stats</Text>
			{pokemonStats.map((stat) => (
				<View style={styles.statsContainer} key={stat.stat.name}>
					<Text style={styles.statName}>{stat.stat.name}</Text>
					<View style={styles.statNumber}>
						<Text>{stat.base_stat}</Text>
						<View style={styles.statBar}>
							<View
								style={[
									styles.statBarProgress,
									{
										width: `${stat.base_stat}%`,
										backgroundColor: stat.base_stat > 49 ? 'green' : 'red',
									},
								]}
							></View>
						</View>
					</View>
				</View>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontWeight: '900',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 20,
	},
	container: {
		marginTop: 20,
		marginLeft: 10,
		marginRight: 40,
	},
	statsContainer: {
		flexDirection: 'row',
		marginBottom: 5,
	},
	statName: {
		width: '30%',
	},
	statNumber: {
		width: '70%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	statBar: {
		width: '100%',
		height: 4,
		backgroundColor: '#cbd5e1',
		marginLeft: 10,
	},
	statBarProgress: {
		height: 4,
		width: '50%',
		position: 'absolute',
	},
})
