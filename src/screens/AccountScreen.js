import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import LoginForm from '../components/LoginForm'
import UserData from '../components/UserData'
import { AuthContext } from '../context/AuthContext'

export default function AccountScreen() {
	const { isAuth } = useContext(AuthContext)

	return (
		<View style={styles.container}>
			{isAuth ? <UserData /> : <LoginForm />}
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
