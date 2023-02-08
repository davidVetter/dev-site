const movieReducer = (state = [], action) => {
    if (action.type === 'SET_SINGLE_MOVIE') {
        return action.payload;
    }
    return state;
}

export default movieReducer;