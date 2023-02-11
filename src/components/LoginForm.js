import React from 'react'
import { Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native'

export default function LoginForm() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>Login Form</Text>
			<TextInput placeholder="Email" />
			<Button title="Enviar" onPress={() => console.log('Enviando...')} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fwfwfw',
		color: '#ffffff',
	},
	text: {
		fontSize: 30,
	},
})
