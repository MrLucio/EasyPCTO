import {
    FETCH_PAGINATION_SUCCESS,
    FETCH_PAGINATION_REQUEST,
    FETCH_PAGINATION_FAILURE
} from '../constants/actionTypes';

export const fetchPaginationSuccess = pagination => {
    return {
        type: FETCH_PAGINATION_SUCCESS,
        payload: {
            ...pagination
        }
    }
}

export const fetchPaginationRequest = () => {
    return {
        type: FETCH_PAGINATION_REQUEST,
        payload: {}
    }
}

export const fetchPaginationFailure = error => {
    return {
        type: FETCH_PAGINATION_FAILURE,
        payload: {
            error
        }
    }
}
