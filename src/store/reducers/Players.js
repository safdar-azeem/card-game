const initialState = {
	players: [],
	currentPlayer: null,
	loading: false,
	error: null,
};

const Players = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_ALL_PLAYERS_START':
			return {
				...state,
				loading: true,
				players: [],
				error: null,
			};
		case 'FETCH_ALL_PLAYERS_SUCCESS':
			return {
				...state,
				loading: false,
				players: action.payload,
				error: null,
			};
		case 'FETCH_ALL_PLAYERS_FAILURE':
			return {
				...state,
				loading: false,
				players: [],
				error: action.payload,
			};
		case 'SORT_PLAYER_START':
			return {
				...state,
				loading: true,
				players: [],
				error: null,
			};
		case 'SORT_PLAYER_SUCCESS':
			return {
				...state,
				loading: false,
				players: action.payload,
				error: null,
			};

		case 'SORT_PLAYER_FAILURE':
			return {
				...state,
				loading: false,
				players: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export { Players };
