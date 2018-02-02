import * as actionTypes from '../actions/types/dictionaries/fightStructuresTypes';
export default function reducer(state = {
    structures: [],
    fetching: false,
    fetched: false,
    error: null
} , action) {

    switch (action.type) {
    case actionTypes.FETCH_STRUCTURES: {
        return {
            ...state,
            fetching: true
        };
    }
    case actionTypes.FETCH_STRUCTURES_REJECTED: {
        return {
            ...state,
            fetching: false,
            error: action.payload
        };
    }
    case actionTypes.FETCH_STRUCTURES_FULFILLED: {
        return {
            ...state,
            fetching: false,
            fetched: true,
            structures: action.payload
        };
    }
    case actionTypes.SAVE_STRUCTURE: {
        const structure = action.payload;
        const newStructures = [...state.structures];
        const structureToUpdate = newStructures.findIndex(t => t.id === structure.id);
        if (structureToUpdate > -1) {
            newStructures[structureToUpdate] = structure;
            return {
                ...state,
                structures: newStructures
            };
        } else {
            return {
                ...state,
                structures: [...state.structures, structure]
            };
        }
    }
    case actionTypes.DELETE_STRUCTURE_SUCCESS: {
        return {
            ...state,
            structures: state
                .structures
                .filter(t => t.id !== action.payload)
        };
    }
    case actionTypes.DELETE_STRUCTURE_REJECTED:
        return {
            ...state,
            structures: state.structures,
            error: action.payload
        };
    }
    return state;
}