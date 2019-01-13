import axios from "axios";
import * as actionTypes from "./types/licenseActionsTypes";

export function fetchLicenseTypes() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_LICENSE_TYPES
        });
        axios
            .get("api/licenses/types")
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_LICENSE_TYPES_FULFILLED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.FETCH_LICENSE_TYPES_REJECTED,
                    payload: err
                });
            });
    };
}

export function fetchCurrentContests() {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_LICENSE_CURRENT_CONTESTS
        });
        axios
            .get("api/contests/current")
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_LICENSE_CURRENT_CONTESTS_FULFILLED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.FETCH_LICENSE_CURRENT_CONTESTS_REJECTED,
                    payload: err
                });
            });
    };
}

export function fetchPayment(typeId, institutionId = null) {
    return function(dispatch) {
        dispatch({
            type: actionTypes.FETCH_PAYMENT
        });
        axios
            .get("api/licenses/create", {
                params:{
                    licenseTypeId: typeId,
                    institutionId: institutionId
                }
            })
            .then(response => {
                console.log(response);
                axios.get("api/licenses/payment", {
                    params:{
                        licenseId: response.data.id
                    }
                }).then(r => {
                    dispatch({
                        type: actionTypes.FETCH_PAYMENT_FULFILLED,
                        payload: {
                            payment: r.data,
                            license: response.data
                        }
                    });
                }).catch(err => {
                    dispatch({
                        type: actionTypes.FETCH_PAYMENT_REJECTED,
                        payload: err
                    });
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.FETCH_PAYMENT_REJECTED,
                    payload: err
                });
            });
    };
}


