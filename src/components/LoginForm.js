import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import {
	Text,
	TextInput,
	SafeAreaView,
	StyleSheet,
	Pressable,
	View,
} from 'react-native'
import { AuthContext } from '../context/AuthContext'
import {
	DUMMY_USER,
	DUMMY_USER_DATA,
	LOGIN_FORM_INITIAL_VALUES,
	EMPTY_STRING,
} from '../utils/constants'
import * as yup from 'yup'

export default function LoginForm() {
	const [logInError, setLogInError] = useState(EMPTY_STRING)
	const { logIn } = useContext(AuthContext)
	const { handleChange, handleSubmit, resetForm, values, errors } = useFormik({
		initialValues: LOGIN_FORM_INITIAL_VALUES,
		onSubmit: (values) => handleFormData(values),
		validationSchema: yup.object().shape({
			username: yup.string().required(),
			password: yup.string().required(),
		}),
	})

	const handleFormData = ({ username, password }) => {
		if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
			logIn(DUMMY_USER_DATA)
			setLogInError(EMPTY_STRING)
		} else {
			setLogInError('Usuario o contraseña erronea')
		}
	}

	const renderErrors = () => {
		for (const error in errors) {
			return <Text style={styles.errorMessage}>{errors[error]}</Text>
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
			<View>
				{renderErrors()}
				<Text style={styles.errorMessage}>{logInError}</Text>
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
		backgroundColor: 'red',
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	errorMessage: {
		color: 'red',
		fontWeight: 'bold',
		fontSize: 14,
		marginTop: 20,
	},
})
