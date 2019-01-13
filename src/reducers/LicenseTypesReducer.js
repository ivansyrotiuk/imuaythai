import * as actionTypes from '../actions/types/licenseActionsTypes';
export default function reducer(
    state = {
        types: [],
        contests: [],
        fetching: false,
        fetchingContests: false,
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
        case actionTypes.FETCH_LICENSE_CURRENT_CONTESTS: {
            return {
                ...state,
                fetchingContests: true
            };
        }
        case actionTypes.FETCH_LICENSE_CURRENT_CONTESTS_REJECTED: {
            return {
                ...state,
                fetchingContests: false,
                contests: []
            };
        }
        case actionTypes.FETCH_LICENSE_CURRENT_CONTESTS_FULFILLED: {
            return {
                ...state,
                fetchingContests: false,
                contests: action.payload
            };
        }
    }
    return state;
}
