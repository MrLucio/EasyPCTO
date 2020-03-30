import {
    FETCH_LOCATIONS_SUCCESS,
    FETCH_LOCATIONS_FAILURE,
} from '../constants/actionTypes';
import axios from "axios";
import Jsona from 'jsona';

const dataFormatter = new Jsona();

export const Location = () => {
    return (dispatch, getState) => {
        if(getState().locations.length != 0) return;
        axios
        .get(`http://easypcto.altervista.org/api/country`, {
        })
        .then(res => {
            let {data} = res;
            let deserializedData = dataFormatter.deserialize(data);
            dispatch(fetchLocationSuccess(
                Object.keys(deserializedData).map(i => deserializedData[i])
            ));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchLocationFailure(err));
        });
    }
}

const fetchLocationSuccess = locations => {
    return {
        type: FETCH_LOCATIONS_SUCCESS,
        payload: [
            ...locations
        ]
    }
}

const fetchLocationFailure = error => {
    return {
        type: FETCH_LOCATIONS_FAILURE,
        payload: {
            error
        }
    }
}