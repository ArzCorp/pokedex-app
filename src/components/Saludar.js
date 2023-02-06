import React from 'react'
import { Text } from 'react-native'

export default function Saludar({ name = "Jose", lastname = "Perez Leon" }) {
	return (
		<Text>
			Hola {name} {lastname}
		</Text>
	)
}
