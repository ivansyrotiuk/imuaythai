import axios from 'axios';
import * as dashboardTypes from './types/dashboardTypes';
import { SHOW_ERROR } from './actionTypes';

export const fetchContestEvents = () => {
    return dispatch => {
        dispatch({
            type: dashboardTypes.FETCH_CONTEST_EVENTS
        });

        return axios
            .get('api/dashboard/')
            .then(response => {
                dispatch({
                    type: dashboardTypes.FETCH_CONTEST_EVENTS_FULFILLED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: dashboardTypes.FETCH_CONTEST_EVENTS_REJECTED,
                    payload: err.message
                });
                dispatch({
                    type: SHOW_ERROR,
                    payload: err.message
                });
            });
    };
};
