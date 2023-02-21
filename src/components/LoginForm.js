import React from 'react'
import {
	Text,
	TextInput,
	SafeAreaView,
	StyleSheet,
	Pressable,
	View,
} from 'react-native'

export default function LoginForm() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.formContainer}>
				<Text style={styles.title}>Iniciar sesión</Text>
				<TextInput placeholder="Username" style={styles.input} />
				<TextInput
					placeholder="Password"
					style={styles.input}
					secureTextEntry
				/>
				<Pressable style={styles.button} onPress={() => {}}>
					<Text style={styles.buttonText}>Iniciar sesión</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 40,
		alignItems: 'center',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
	},
	formContainer: {
		width: '100%',
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 20,
	},
	input: {
		borderWidth: 1,
		marginBottom: 20,
		padding: 10,
		borderRadius: 15,
	},
	button: {
		padding: 10,
		borderRadius: 15,
		backgroundColor: '#E400F',
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
	},
})
