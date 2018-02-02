import * as actionTypes from '../actions/types/dictionaries/suspensionTypes';

export default function reducer(state = {
    suspensionTypes: [],
    fetching: false,
    fetched: false,
    error: null
} , action) {

    switch (action.type) {
    case actionTypes.FETCH_SUSPENSION_TYPES: {
        return {
            ...state,
            fetching: true
        };
    }
    case actionTypes.FETCH_SUSPENSION_TYPES_REJECTED: {
        return {
            ...state,
            fetching: false,
            error: action.payload
        };
    }
    case actionTypes.FETCH_SUSPENSION_TYPES_FULFILLED: {
        return {
            ...state,
            fetching: false,
            fetched: true,
            suspensionTypes: action.payload
        };
    }
    case actionTypes.SAVE_SUSPENSION_TYPE: {

        const type = action.payload;
        const newTypes = [...state.suspensionTypes];
        const typeToUpdate = newTypes.findIndex(t => t.id === type.id);
        if (typeToUpdate > -1) {
            newTypes[typeToUpdate] = type;
            return {
                ...state,
                suspensionTypes: newTypes
            };
        } else {
            return {
                ...state,
                suspensionTypes: [...state.suspensionTypes, type]
            };
        }

    }
    case actionTypes.DELETE_SUSPENSION_TYPE_SUCCESS: {
        return {
            ...state,
            suspensionTypes: state
                .suspensionTypes
                .filter(t => t.id !== action.payload)
        };
    }
    case actionTypes.DELETE_SUSPENSION_TYPE_REJECTED:
        return {
            ...state,
            categories: state.categories,
            error: action.payload
        };
    default:
        return state;
    }
}