const initialState = {
    currentPlayer: null,
    loading: false,
    error: null,
};


const SelectPlayer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_PLAYER_START':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'SELECT_PLAYER_SUCCESS':
            return {
                ...state,
                loading: false,
                currentPlayer: action.payload,
                error: null,
            };
        case 'SELECT_PLAYER_FAILURE':
            return {
                ...state,
                loading: false,
                currentPlayer: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export { SelectPlayer };

