import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from './src/components/LoginForm'
import Saludar from './src/components/Saludar'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hi world...</Text>
			<Text>From React Native - Expo</Text>
			<LoginForm />
			<Saludar />
			<Saludar name="Osvaldo" lastname="Arzate Santiago" />
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
