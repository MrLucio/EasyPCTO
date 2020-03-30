import {
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE,
} from '../constants/actionTypes';
import axios from "axios";
import Jsona from 'jsona';

const dataFormatter = new Jsona();

export const Course = () => {
    return (dispatch, getState) => {
        if(getState().courses.length != 0) return;
        axios
        .get(`http://easypcto.altervista.org/api/course`, {
        })
        .then(res => {
            let {data} = res;
            let deserializedData = dataFormatter.deserialize(data);
            dispatch(fetchCourseSuccess(
                Object.keys(deserializedData).map(i => deserializedData[i])
            ));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchCourseFailure(err));
        });
    }
}

const fetchCourseSuccess = courses => {
    return {
        type: FETCH_COURSES_SUCCESS,
        payload: [
            ...courses
        ]
    }
}

const fetchCourseFailure = error => {
    return {
        type: FETCH_COURSES_FAILURE,
        payload: {
            error
        }
    }
}