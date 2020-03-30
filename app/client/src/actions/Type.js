import {
    FETCH_TYPES_SUCCESS,
    FETCH_TYPES_FAILURE,
} from '../constants/actionTypes';
import axios from "axios";
import Jsona from 'jsona';

const dataFormatter = new Jsona();

export const Type = () => {
    return (dispatch, getState) => {
        if(getState().types.length != 0) return;
        axios
        .get(`http://easypcto.altervista.org/api/type`, {
        })
        .then(res => {
            let {data} = res;
            let deserializedData = dataFormatter.deserialize(data);
            dispatch(fetchTypeSuccess(
                Object.keys(deserializedData).map(i => deserializedData[i])
            ));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchTypeFailure(err));
        });
    }
}

const fetchTypeSuccess = types => {
    return {
        type: FETCH_TYPES_SUCCESS,
        payload: [
            ...types
        ]
    }
}

const fetchTypeFailure = error => {
    return {
        type: FETCH_TYPES_FAILURE,
        payload: {
            error
        }
    }
}