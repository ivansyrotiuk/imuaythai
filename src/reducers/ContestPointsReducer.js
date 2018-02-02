import * as actionTypes from '../actions/types/dictionaries/contestPointsTypes';
export default function reducer(state = {
    points: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
    case actionTypes.FETCH_POINTS:
    {
        return {
            ...state,
            fetching: true
        };
    }

    case actionTypes.FETCH_POINTS_REJECTED:
    {
        return {
            ...state,
            fetching: false,
            error: action.payload
        };
    }

    case actionTypes.FETCH_POINTS_FULFILLED:
    {
        return {
            ...state,
            fetching: false,
            fetched: true,
            points: action.payload
        };
    }

    case actionTypes.SAVE_POINT:
    {
        const point = action.payload;
        const newTypes = [...state.points];
        const pointToUpdate = newTypes.findIndex(t => t.id === point.id);
        if (pointToUpdate > -1) {
            newTypes[pointToUpdate] = point;
            return {
                ...state,
                points: newTypes
            };
        } else {
            return {
                ...state,
                points: [...state.points, point]
            };
        }

    }
    case actionTypes.DELETE_POINT_SUCCESS:
        return {
            ...state,
            points: state.points.filter(t => t.id !== action.payload)
        };
    case actionTypes.DELETE_POINT_REJECTED:
        return {
            ...state,
            points: state.points,
            error: action.payload
        };
    default:
        return state;
    }
}