import {
    FETCH_ATECOS_SUCCESS,
    FETCH_ATECOS_FAILURE,
} from '../constants/actionTypes';
import axios from "axios";
import Jsona from 'jsona';

const dataFormatter = new Jsona();

export const Ateco = () => {
    return (dispatch, getState) => {
        if(getState().atecos.length != 0) return;
        axios
        .get(`http://easypcto.altervista.org/api/ateco`, {
        })
        .then(res => {
            let {data} = res;
            let deserializedData = dataFormatter.deserialize(data);
            dispatch(fetchAtecoSuccess(
                Object.keys(deserializedData).map(i => deserializedData[i])
            ));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchAtecoFailure(err));
        });
    }
}

const fetchAtecoSuccess = atecos => {
    return {
        type: FETCH_ATECOS_SUCCESS,
        payload: [
            ...atecos
        ]
    }
}

const fetchAtecoFailure = error => {
    return {
        type: FETCH_ATECOS_FAILURE,
        payload: {
            error
        }
    }
}