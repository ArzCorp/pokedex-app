export const mappedPokemonData = ({ id, name, order, sprites }) => {
	return {
		name,
		id,
		pokedex_order: order,
		image: sprites.other['official-artwork'].front_default,
	}
}
