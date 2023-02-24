import React, { useContext } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import UserDataItem from './UserDataItem'

export default function UserData() {
	const { user, logOut } = useContext(AuthContext)

	return (
		<View style={styles.container}>
			<UserDataItem title="Username:" value={user.username} />
			<UserDataItem title="Name:" value={`${user.name} ${user.lastname}`} />
			<UserDataItem title="Email:" value={user.email} />
			<UserDataItem
				title="Favorites:"
				value={user.favoritesAmount || 0 + ' pokemon'}
			/>
			<Button title="LogOut" onPress={logOut} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		marginHorizontal: 15,
	},
})
