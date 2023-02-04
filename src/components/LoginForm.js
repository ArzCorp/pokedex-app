import React from 'react'
import { Text, TextInput, Button, View } from 'react-native'

export default function LoginForm() {
	return (
		<View>
			<Text>Login Form</Text>
			<TextInput placeholder="Email" />
			<Button title="Enviar" onPress={() => console.log('Enviando...')} />
		</View>
	)
}
