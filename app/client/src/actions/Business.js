import {
    FETCH_BUSINESSES_SUCCESS,
    FETCH_BUSINESSES_REQUEST,
    FETCH_BUSINESSES_FAILURE,
    ADD_BUSINESS_REQUEST,
    ADD_BUSINESS_SUCCESS,
    ADD_BUSINESS_FAILURE
} from '../constants/actionTypes';
import axios from "axios";
import Jsona from 'jsona';
import { fetchPaginationRequest, fetchPaginationSuccess, fetchPaginationFailure } from './Pagination';

const qs = require('qs');
const dataFormatter = new Jsona();

export const fetchBusinesses = (page = 1, course = null, type = null) => {
    return dispatch => {
        const props = {page, course}
        const params = qs.stringify(props, {skipNulls: true});

        dispatch(fetchBusinessesRequest());
        dispatch(fetchPaginationRequest());

        axios
        .get(`http://easypcto.altervista.org/api/business?${params}`, {
        })
        .then(res => {
            let { data, included, links, meta } = res.data;
            dispatch(fetchBusinessesSuccess(
                dataFormatter.deserialize(
                    { data:data, included:included }
                )
            ));
            dispatch(fetchPaginationSuccess(meta))
        })
        .catch(err => {
            dispatch(fetchBusinessesFailure(err))
        });  
    }
}

export const addBusiness = (props) => {
    return dispatch => {
        dispatch(addBusinessRequest());

        axios
        .post('http://easypcto.altervista.org/api/business', props)
        .then(res => {
            console.log(res);
            dispatch(addBusinessSuccess());
        })
        .catch(err => {
            dispatch(addBusinessFailure(err));
        })
    }
}

const fetchBusinessesSuccess = businesses => {
    return {
        type: FETCH_BUSINESSES_SUCCESS,
        payload: {
            ...businesses
        }
    }
}

const fetchBusinessesRequest = data => {
    return {
        type: FETCH_BUSINESSES_REQUEST,
        payload: {
            ...data
        }
    }
}

const fetchBusinessesFailure = error => {
    return {
        type: FETCH_BUSINESSES_FAILURE,
        payload: {
            error
        }
    }
}

export const addBusinessRequest = () => {
    return {
        type: ADD_BUSINESS_REQUEST,
    }
}

export const addBusinessSuccess = () => {
    return {
        type: ADD_BUSINESS_SUCCESS,
    }
}

export const addBusinessFailure = error => {
    return {
        type: ADD_BUSINESS_FAILURE,
        payload: {
            error
        }
    }
}
