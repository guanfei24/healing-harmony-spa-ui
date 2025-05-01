//goal and goalList reducer
const goalReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GOAL':
            return [...state, action.payload];
        case 'REMOVE_GOAL':
            return state.filter(goal => goal.id !== action.payload.id);
        default:
            return state;
    }
}

export default goalReducer;