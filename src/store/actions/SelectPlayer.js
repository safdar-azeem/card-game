import data from '../../data/Players.json';

const selectPlayerStart = () => ({
	type: 'SELECT_PLAYER_START',
});

const selectPlayerSuccess = (player) => ({
	type: 'SELECT_PLAYER_SUCCESS',
	payload: player,
});

const selectPlayerFailure = (error) => ({
	type: 'SELECT_PLAYER_FAILURE',
	payload: error,
});

const selectPlayer = (id) => (dispatch) => {
	dispatch(selectPlayerStart());
	const playerData = data.find((p) => p.id == id);
	setTimeout(() => {
		playerData
			? dispatch(selectPlayerSuccess(playerData))
			: dispatch(selectPlayerFailure('Player not found'));
	}, 300);
};

export { selectPlayer, selectPlayerStart, selectPlayerSuccess, selectPlayerFailure };
