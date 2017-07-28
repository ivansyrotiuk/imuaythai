import { host } from "../global"
import axios from "axios";
import * as actionTypes from "./actionTypes"

export function fetchFighters() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_FIGTHERS
        });
        axios
            .get(host + "api/users/fighters")
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_FIGTHERS_FULFILLED,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_FIGTHERS_REJECTED,
                    payload: err
                })
            })
    }
}

export function fetchJudges() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_JUDGES
        });
        axios
            .get(host + "api/users/judges")
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_JUDGES_FULFILLED,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_JUDGES_REJECTED,
                    payload: err
                })
            })
    }
}

export function fetchCoaches() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_COACHES
        });
        axios
            .get(host + "api/users/judges")
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_COACHES_FULFILLED,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_COACHES_REJECTED,
                    payload: err
                })
            })
    }
}

export function fetchDoctors() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_DOCTORS
        });
        axios
            .get(host + "api/users/doctors")
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_DOCTORS_FULFILLED,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_DOCTORS_REJECTED,
                    payload: err
                })
            })
    }
}

export function fetchUser(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_USER
        });
        axios.get(host + "api/users/" + id)
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_USER_FULFILLED,
                    payload: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_USER_REJECTED,
                    payload: err
                });

            });
    }
}

export function saveUser(user) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.SAVE_USER
        });
        return axios
            .post(host + 'api/users/save', user)
            .then(function(response) {
                dispatch({
                    type: actionTypes.SAVE_USER_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function(error) {
                dispatch({
                    type: actionTypes.SAVE_USER_REJECTED,
                    payload: error
                });
            });
    }
}

export function deleteUser(id) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.DELETE_USER
        })
        axios.post(host + 'api/users/remove', {
            Id: id
        })
            .then((response) => {
                dispatch({
                    type: actionTypes.DELETE_USER_SUCCESS,
                    payload: id
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.DELETE_USER_REJECTED,
                    payload: err
                })
            })
    }
}
