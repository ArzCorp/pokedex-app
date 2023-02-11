import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

export default function LoginScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Login Screen</Text>
			<Text>Login Screen</Text>
			<Text>Login Screen</Text>
			<Text>Login Screen</Text>
			<Text>Login Screen</Text>
			<Text>Login Screen</Text>
			<Text>Login Screen</Text>
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
