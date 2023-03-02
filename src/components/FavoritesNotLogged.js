import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View, StyleSheet, Pressable } from 'react-native'

export default function FavoritesNotLogged() {
	const navigator = useNavigation()

	const moveToLoggin = () => {
		navigator.navigate('Account')
	}

	return (
		<View style={styles.container}>
			<View style={styles.messageContainer}>
				<Text style={styles.title}>
					Para ver favoritos necesitas estar registrado
				</Text>
				<Image style={styles.image} source={require('../assets/psyduck.png')} />
				<Pressable style={styles.button} onPress={moveToLoggin}>
					<Text style={styles.buttonText}>Iniciar sesión</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	messageContainer: {
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		marginBottom: 16,
	},
	image: {
		width: 150,
		height: 150,
		resizeMode: 'contain',
		marginBottom: 22,
	},
	button: {
		backgroundColor: '#22c55e',
		paddingVertical: 6,
		paddingHorizontal: 20,
		borderRadius: 9,
	},
	buttonText: {
		fontWeight: 'bold',
		color: '#0f172a',
	},
})
