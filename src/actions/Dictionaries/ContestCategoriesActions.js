import * as actionTypes from '../types/dictionaries/contestCategoriesTypes';
import { SHOW_ERROR } from '../actionTypes';
import axios from 'axios';

export function fetchContestCategories() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_CONTEST_CATEGORIES
        });
        axios
            .get('api/dictionaries/categories')
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_CONTEST_CATEGORIES_FULFILLED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.FETCH_CONTEST_CATEGORIES_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}
export function deleteContestCategory(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.DELETE_CONTEST_CATEGORY,
            payload: id
        });
        return axios
            .post('api/dictionaries/categories/remove', {
                Id: id
            })
            .then(function(response) {
                dispatch({
                    type: actionTypes.DELETE_CONTEST_CATEGORY_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function(err) {
                dispatch({
                    type: actionTypes.DELETE_CONTEST_CATEGORY_REJECTED,
                    payload: err
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
}
