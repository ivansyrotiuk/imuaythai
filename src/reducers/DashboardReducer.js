import * as actionTypes from '../actions/types/dashboardTypes';
const initialState = {
    events: [],
    fetching: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_CONTEST_EVENTS:
            return {
                ...state,
                fetching: true
            };
        case actionTypes.FETCH_CONTEST_EVENTS_FULFILLED:
            return {
                ...state,
                fetching: false,
                events: action.payload
            };
        case actionTypes.FETCH_CONTEST_EVENTS_REJECTED:
            return {
                state,
                fetching: true
            };
        default:
            return state;
    }
}
