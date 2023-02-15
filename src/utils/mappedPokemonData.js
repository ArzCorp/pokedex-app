export const mappedPokemonData = ({ id, name, order, sprites, types }) => {
	return {
		name: name.replace(name[0], name[0].toUpperCase()),
		id,
		type: types[0].type.name,
		pokedex_order: String(order).padStart(3, '0'),
		image: sprites.other['official-artwork'].front_default,
	}
}
