import * as actionTypes from '../types/dictionaries/contestTypes';
import { SHOW_ERROR } from '../actionTypes';
import axios from 'axios';

export function fetchTypes() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_TYPES
        });
        axios
            .get('api/dictionaries/types/')
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_TYPES_FULFILLED,
                    payload: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_TYPES_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}

export function saveType(type) {
    return {
        type: actionTypes.SAVE_TYPE,
        payload: type
    };
}

export function deleteType(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.DELETE_TYPE,
            payload: id
        });
        return axios.post('api/dictionaries/types/remove', {
            Id: id
        })
            .then(function(response) {
                dispatch({
                    type: actionTypes.DELETE_TYPE_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function(err) {
                dispatch({
                    type: actionTypes.DELETE_TYPE_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}
