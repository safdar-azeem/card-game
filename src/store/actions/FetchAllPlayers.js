import data from "../../data/Players.json";

const fetchAllPlayersStart = () => ({
    type: 'FETCH_ALL_PLAYERS_START',
});

const fetchAllPlayersSuccess = (players) => ({
	type: 'FETCH_ALL_PLAYERS_SUCCESS',
	payload: players,
});

const fetchAllPlayersFailure = (error) => ({
    type: 'FETCH_ALL_PLAYERS_FAILURE',
    payload: error,
});

const fetchAllPlayers = () => {
    return (dispatch) => {
        dispatch(fetchAllPlayersStart());
        setTimeout(() => {
            dispatch(fetchAllPlayersSuccess(data))
        }, 500);
    };
}

export { fetchAllPlayers , fetchAllPlayersStart, fetchAllPlayersSuccess, fetchAllPlayersFailure};