import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

export default function AccountScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Account Screen</Text>
			<Text>Account Screen</Text>
			<Text>Account Screen</Text>
			<Text>Account Screen</Text>
			<Text>Account Screen</Text>
			<Text>Account Screen</Text>
			<Text>Account Screen</Text>
			<Text>Account Screen</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		color: '#000000',
	},
	text: {
		fontSize: 30,
	},
})
