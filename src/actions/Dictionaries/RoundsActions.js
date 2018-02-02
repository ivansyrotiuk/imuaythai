import * as actionTypes from '../types/dictionaries/roundsTypes';
import { SHOW_ERROR } from '../actionTypes';
import axios from 'axios';

export function fetchRounds() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_ROUNDS
        });
        axios
            .get('api/dictionaries/rounds/')
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_ROUNDS_FULFILLED,
                    payload: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_ROUNDS_REJECTED,
                    payload: err
                });
            });
    };
}

export function saveRound(round) {
    return {
        type: actionTypes.SAVE_ROUND,
        payload: round
    };
}

export function deleteRound(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.DELETE_ROUND,
            payload: id
        });
        return axios.post('api/dictionaries/rounds/remove', {
            Id: id
        })
            .then(function(response) {
                dispatch({
                    type: actionTypes.DELETE_ROUND_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function(err) {
                dispatch({
                    type: actionTypes.DELETE_ROUND_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}
