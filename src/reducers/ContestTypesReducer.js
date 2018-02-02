import * as actionTypes from '../actions/types/dictionaries/contestTypes';
export default function reducer(state = {
    types: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
    case actionTypes.FETCH_TYPES:
    {
        return {
            ...state,
            fetching: true
        };
    }

    case actionTypes.FETCH_TYPES_REJECTED:
    {
        return {
            ...state,
            fetching: false,
            error: action.payload
        };
    }

    case actionTypes.FETCH_TYPES_FULFILLED:
    {
        return {
            ...state,
            fetching: false,
            fetched: true,
            types: action.payload
        };
    }

    case actionTypes.SAVE_TYPE:
    {
        const type = action.payload;
        const newTypes = [...state.types];
        const typeToUpdate = newTypes.findIndex(t => t.id === type.id);
        if (typeToUpdate > -1) {
            newTypes[typeToUpdate] = type;
            return {
                ...state,
                types: newTypes
            };
        } else {
            return {
                ...state,
                types: [...state.types, type]
            };
        }

    }

    case actionTypes.DELETE_TYPE_SUCCESS:
    {
        return {
            ...state,
            types: state
                .types
                .filter(t => t.id !== action.payload)
        };
    }
    case actionTypes.DELETE_TYPE_REJECTED:
        return {
            ...state,
            types: state.types,
            error: action.payload
        };
    default:
        return state;
    }
}