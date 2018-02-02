import * as actionTypes from '../types/dictionaries/khanLevelTypes';
import { SHOW_ERROR } from '../actionTypes';
import axios from 'axios';

export function fetchLevels() {
    return function (dispatch) {
        dispatch({
            type: actionTypes.FETCH_LEVELS
        });
        axios
            .get('api/dictionaries/levels/')
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_LEVELS_FULFILLED,
                    payload: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_LEVELS_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}

export function saveLevel(type) {
    return {
        type: actionTypes.SAVE_LEVEL,
        payload: type
    };
}

export function deleteLevel(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.DELETE_LEVEL,
            payload: id
        });
        return axios.post('api/dictionaries/levels/remove', {
            Id: id
        })
            .then(function(response) {
                dispatch({
                    type: actionTypes.DELETE_LEVEL_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function(err) {
                dispatch({
                    type: actionTypes.DELETE_LEVEL_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}
