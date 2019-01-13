import * as actionTypes from '../actions/types/licenseActionsTypes';
export default function reducer(
    state = {
        payment: {},
        license: {},
        fetching: false,
        error: null
    },
    action
) {
    switch (action.type) {
        case actionTypes.FETCH_PAYMENT: {
            return {
                ...state,
                fetching: true
            };
        }
        case actionTypes.FETCH_PAYMENT_FULFILLED: {
            return {
                ...state,
                fetching: false,
                payment: action.payload.payment,
                license: action.payload.license,
            };
        }
        case actionTypes.FETCH_PAYMENT_REJECTED: {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            };
        }
    }
    return state;
}
