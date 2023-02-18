import React from 'react'
import { View } from 'react-native'
import PokemonDetailsHeader from './PokemonDetailsHeader'
import PokemonDetailsStats from './PokemonDetailsStats'
import PokemonDetailsType from './PokemonDetailsType'

export default function PokemonDetails({
	name,
	pokedex_order,
	image,
	type,
	types,
	stats,
}) {
	return (
		<View>
			<PokemonDetailsHeader
				pokemonName={name}
				pokemonNumber={pokedex_order}
				pokemonImage={image}
				pokemonType={type}
			/>
			<PokemonDetailsType pokemonTypes={types} />
			<PokemonDetailsStats pokemonStats={stats} />
		</View>
	)
}
