import * as actionTypes from '../actions/types/licenseActionsTypes';
export default function reducer(
    state = {
        types: [],
        fetching: false,
        error: null
    },
    action
) {
    switch (action.type) {
        case actionTypes.FETCH_LICENSE_TYPES: {
            return {
                ...state,
                fetching: true
            };
        }
        case actionTypes.FETCH_LICENSE_TYPES_FULFILLED: {
            return {
                ...state,
                fetching: false,
                types: action.payload
            };
        }
        case actionTypes.FETCH_LICENSE_TYPES_REJECTED: {
            return {
                ...state,
                fetching: false,
                types: action.payload
            };
        }
    }
    return state;
}
