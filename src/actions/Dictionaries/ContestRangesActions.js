import * as actionTypes from '../types/dictionaries/contestRangesTypes';
import { SHOW_ERROR } from '../actionTypes';
import axios from 'axios';

export function fetchRanges() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_RANGES
        });
        axios
            .get('api/dictionaries/ranges/')
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_RANGES_FULFILLED,
                    payload: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_RANGES_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}

export function saveRange(range) {
    return {
        type: actionTypes.SAVE_RANGE,
        payload: range
    };
}

export function deleteRange(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.DELETE_RANGE,
            payload: id
        });
        return axios.post('api/dictionaries/ranges/remove', {
            Id: id
        })
            .then(function(response) {
                dispatch({
                    type: actionTypes.DELETE_RANGE_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function(err) {
                dispatch({
                    type: actionTypes.DELETE_RANGE_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}
