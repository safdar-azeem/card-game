import data from "../../data/Players.json";

const sortPlayerStart = () => ({
    type: 'SORT_PLAYER_START',
});

const sortPlayerSuccess = (players) => ({
    type: 'SORT_PLAYER_SUCCESS',
    payload: players,
});

const sortPlayerFaiure = () => ({
    type: 'SORT_PLAYER_FAILURE',
});

const sortPlayer = (order) => {
    return (dispatch) => {
        dispatch(sortPlayerStart());
        setTimeout(() => {
            if (order === 'asc') {
                dispatch(sortPlayerSuccess(data.sort((a, b) => (a.real_name > b.real_name ? 1 : -1))))
            } else if(order === 'desc') {
                dispatch(sortPlayerSuccess(data.sort((a, b) => (a.real_name > b.real_name ? -1 : 1))))
            }else{
                dispatch(sortPlayerSuccess(data))
            }
        }, 500);
    };
}

export { sortPlayer , sortPlayerStart, sortPlayerSuccess, sortPlayerFaiure};