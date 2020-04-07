import {
    FETCH_BUSINESSES_ADDRESSES_SUCCESS,
    FETCH_BUSINESSES_ADDRESSES_REQUEST,
    FETCH_BUSINESSES_ADDRESSES_FAILURE,
} from '../constants/actionTypes';
import axios from "axios";
import Jsona from 'jsona';

const qs = require('qs');
const dataFormatter = new Jsona();

export const BusinessAddress = ( centerRaw = null, radius = null) => {
    return dispatch => {
        const centerJoined = (centerRaw || []).join(',') || null;

        const props = {center: centerJoined, radius: radius};
        const params = qs.stringify(props, {skipNulls: true});

        if(centerJoined && radius){
            dispatch(fetchBusinessesAddressesRequest());
            axios
            .get(`http://easypcto.altervista.org/api/business?${params}`, {
            })
            .then(res => {
                let { data, included, links, meta } = res.data;
                dispatch(fetchBusinessesAddressesSuccess(
                    dataFormatter.deserialize(
                        { data:data, included:included }
                    )
                ));
            })
            .catch(err => {
                dispatch(fetchBusinessesAddressesFailure(err))
            });  
        }
        else{
            dispatch(fetchBusinessesAddressesFailure('non c\'è niente qui'));
        }
    }
}

const fetchBusinessesAddressesSuccess = businesses => {
    return {
        type: FETCH_BUSINESSES_ADDRESSES_SUCCESS,
        payload: {
            ...businesses
        }
    }
}

const fetchBusinessesAddressesRequest = data => {
    return {
        type: FETCH_BUSINESSES_ADDRESSES_REQUEST,
        payload: {
            ...data
        }
    }
}

const fetchBusinessesAddressesFailure = error => {
    return {
        type: FETCH_BUSINESSES_ADDRESSES_FAILURE,
        payload: {
            error
        }
    }
}