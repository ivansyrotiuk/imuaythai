import * as actionTypes from '../types/dictionaries/fightStructuresTypes';
import { SHOW_ERROR } from '../actionTypes';
import axios from 'axios';

export function fetchStructures() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_STRUCTURES
        });
        axios
            .get('api/dictionaries/structures/')
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_STRUCTURES_FULFILLED,
                    payload: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_STRUCTURES_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}

export function saveStructure(category) {
    return {
        type: actionTypes.SAVE_STRUCTURE,
        payload: category
    };
}

export function deleteStructure(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.DELETE_STRUCTURE,
            payload: id
        });
        return axios.post('api/dictionaries/structures/remove', {
            Id: id
        })
            .then(function(response) {
                dispatch({
                    type: actionTypes.DELETE_STRUCTURE_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function(err) {
                dispatch({
                    type: actionTypes.DELETE_STRUCTURE_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}
