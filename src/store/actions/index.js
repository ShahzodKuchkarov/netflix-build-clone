
import * as actionTypes from '../actionTypes';

export const updateUserAction = (payload) => {
    return {
        payload,
        type: actionTypes.UPDATE_USER,
    }
}


export const clearUserAction = () => {
    return {
        type: actionTypes.CLEAR_USER,
    }
}


export const saveMovie = (payload) => {
    return {
        payload,
        type: actionTypes.SAVE_MOVIE,
    }
};