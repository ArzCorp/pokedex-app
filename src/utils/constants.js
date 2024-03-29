export const API_HOST = 'https://pokeapi.co/api/v2'

export const POKEMON_TYPE_COLORS = {
	normal: '#A8A878',
	fighting: '#C03028',
	flying: '#A890F0',
	poison: '#A040A0',
	ground: '#E0C068',
	rock: '#B8A038',
	bug: '#A8B820',
	ghost: '#705898',
	steel: '#B8B8D0',
	fire: '#FA6C6C',
	water: '#6890F0',
	grass: '#48CFB2',
	electric: '#FFCE4B',
	psychic: '#F85888',
	ice: '#98D8D8',
	dragon: '#7038F8',
	dark: '#705848',
	fairy: '#EE99AC',
}

export const EMPTY_STRING = ''

export const DUMMY_USER = {
	username: 'jose.perez',
	password: 'Jose0807',
}

export const DUMMY_USER_DATA = {
	username: DUMMY_USER.username,
	password: DUMMY_USER.password,
	name: 'Jose',
	lastname: 'Perez Leon',
	email: 'jose.perez@dummy.com',
}

export const AUTH_CONTEXT_INITIAL_VALUES = {
	isAuth: false,
	user: {},
	logIn: () => {},
	logOut: () => {},
}

export const LOGIN_FORM_INITIAL_VALUES = {
	username: '',
	password: '',
}

export const FAVORITES_POKEMON_STORAGE = 'favorites'
