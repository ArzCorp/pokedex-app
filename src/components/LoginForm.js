import { useFormik } from 'formik'
import React, { useContext } from 'react'
import {
	Text,
	TextInput,
	SafeAreaView,
	StyleSheet,
	Pressable,
	View,
} from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { DUMMY_USER, LOGIN_FORM_INITIAL_VALUES } from '../utils/constants'
import * as yup from 'yup'

export default function LoginForm() {
	const { logIn } = useContext(AuthContext)
	const { handleChange, handleSubmit, values, errors } = useFormik({
		initialValues: LOGIN_FORM_INITIAL_VALUES,
		onSubmit: handleFormData,
		validationSchema: yup.object().shape({
			username: yup.string().required(),
			password: yup.string().required(),
		}),
	})

	const handleFormData = ({ username, password }) => {
		if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
			console.log('login')
		} else {
			console.log('Not login')
		}
	}

	const renderErrors = () => {
		for (const error in errors) {
			return <Text>{errors[error]}</Text>
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.formContainer}>
				<Text style={styles.title}>Iniciar sesión</Text>
				<TextInput
					value={values.username}
					onChangeText={handleChange('username')}
					placeholder="Username"
					style={styles.input}
				/>
				<TextInput
					value={values.password}
					onChangeText={handleChange('password')}
					placeholder="Password"
					style={styles.input}
					secureTextEntry
				/>
				<Pressable style={styles.button} onPress={handleSubmit}>
					<Text style={styles.buttonText}>Iniciar sesión</Text>
				</Pressable>
			</View>
			<View>{renderErrors()}</View>
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
