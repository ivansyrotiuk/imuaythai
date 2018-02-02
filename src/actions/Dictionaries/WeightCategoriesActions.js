import * as actionTypes from '../types/dictionaries/weightAgeCategoriesTypes';
import { SHOW_ERROR } from '../actionTypes';
import axios from 'axios';

export function fetchWeightCategories() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_WEIGHT_CATEGORIES
        });
        axios
            .get('api/dictionaries/weightcategories/')
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_WEIGHT_CATEGORIES_FULFILLED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.FETCH_WEIGHT_CATEGORIES_REJECTED,
                    payload: err
                });
            });
    };
}

export function fetchWeightCategory(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_WEIGHT_CATEGORY
        });
        axios
            .get('api/dictionaries/weightcategories/' + id)
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_WEIGHT_CATEGORY_FULFILLED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.FETCH_WEIGHT_CATEGORY_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}

export function saveWeightCategory(category) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_WEIGHT_CATEGORY
        });
        axios
            .post('api/dictionaries/weightcategories/save', category)
            .then(response => {
                dispatch({
                    type: actionTypes.SAVE_WEIGHT_CATEGORY_SUCCESS,
                    payload: response
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.FETCH_WEIGHT_CATEGORY_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}

export function deleteWeightCategory(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.DELETE_WEIGHT_CATEGORY,
            payload: id
        });
        return axios.post('api/dictionaries/weightcategories/remove', {
            Id: id
        })
            .then(function(response) {
                dispatch({
                    type: actionTypes.DELETE_WEIGHT_CATEGORY_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function(err) {
                dispatch({
                    type: actionTypes.DELETE_WEIGHT_CATEGORY_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}