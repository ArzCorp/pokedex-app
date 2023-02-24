import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function UserDataItem({ title, value }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.value}>{value}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 5,
		paddingHorizontal: 8,
		paddingVertical: 6,
		marginBottom: 12,
	},
	title: {
		width: '30%',
		fontSize: 15,
		fontWeight: 'bold',
	},
	value: {
		width: '70%',
		fontSize: 14,
	},
})
