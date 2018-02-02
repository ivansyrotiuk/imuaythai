import * as actionTypes from '../types/dictionaries/contestPointsTypes';
import { SHOW_ERROR } from '../actionTypes';
import axios from 'axios';

export function fetchPoints() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_POINTS
        });
        axios
            .get('api/dictionaries/points/')
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_POINTS_FULFILLED,
                    payload: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_POINTS_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}

export function savePoint(point) { 
    return { 
        type: 'SAVE_POINT', 
        payload: point 
    };
}

export function deletePoint(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.DELETE_POINT,
            payload: id
        });
        return axios.post('api/dictionaries/points/remove', {
            Id: id
        })
            .then(function(response) {
                dispatch({
                    type: actionTypes.DELETE_POINT_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function(err) {
                dispatch({
                    type: actionTypes.DELETE_POINT_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}
