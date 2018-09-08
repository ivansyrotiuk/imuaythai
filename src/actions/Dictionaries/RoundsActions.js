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
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_ROUNDS_FULFILLED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}

export function fetchRound(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_ROUND,
            payload: id
        });
        axios
            .get('api/dictionaries/rounds/' + id)
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_ROUND_FULFILLED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}

export function addRound() {
    return {
        type: actionTypes.ADD_ROUND
    };
}

export function clearRound() {
    return {
        type: actionTypes.CLEAR_ROUND
    };
}

export function saveRound(round) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.SAVE_ROUND
        });

        return axios
            .post('api/dictionaries/rounds/save', round)
            .then(response =>
                dispatch({
                    type: actionTypes.SAVE_ROUND_SUCCESS,
                    payload: response
                })
            )
            .catch(error =>
                dispatch({
                    type: SHOW_ERROR,
                    payload: error.message
                })
            );
    };
}

export function deleteRound(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.DELETE_ROUND,
            payload: id
        });
        return axios
            .post('api/dictionaries/rounds/remove', {
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
