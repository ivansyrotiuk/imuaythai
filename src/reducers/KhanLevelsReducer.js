import * as actionTypes from '../actions/types/dictionaries/khanLevelTypes';
export default function reducer(state = {
    levels: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
    case actionTypes.FETCH_LEVELS:
    {
        return {
            ...state,
            fetching: true
        };
    }

    case actionTypes.FETCH_LEVELS_REJECTED:
    {
        return {
            ...state,
            fetching: false,
            error: action.payload
        };
    }

    case actionTypes.FETCH_LEVELS_FULFILLED:
    {
        return {
            ...state,
            fetching: false,
            fetched: true,
            levels: action.payload
        };
    }

    case actionTypes.SAVE_LEVEL:
    {

        const level = action.payload;
        const newLevels = [...state.levels];
        const levelToUpdate = newLevels.findIndex(t => t.id === level.id);
        if (levelToUpdate > -1) {
            newLevels[levelToUpdate] = level;
            return {
                ...state,
                levels: newLevels
            };
        } else {
            return {
                ...state,
                levels: [...state.levels, level]
            };
        }

    }

    case actionTypes.DELETE_LEVEL_SUCCESS:
    {
        return {
            ...state,
            levels: state
                .levels
                .filter(t => t.id !== action.payload)
        };
    }
    case actionTypes.DELETE_LEVEL_REJECTED:
        return {
            ...state,
            levels: state.levels,
            error: action.payload
        };
    default:
        return state;
    }
}