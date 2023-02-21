import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import LoginForm from '../components/LoginForm'

export default function AccountScreen() {
	const isAuth = null
	return (
		<View style={styles.container}>
			{isAuth ? <Text></Text> : <LoginForm />}
		</View>
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
