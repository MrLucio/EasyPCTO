import {
    FETCH_BUSINESSES_SUCCESS,
    FETCH_BUSINESSES_STARTED,
    FETCH_BUSINESSES_FAILURE
} from '../constants/actionTypes';
import axios from "axios";

export const Business = () => {
    return dispatch => {
        dispatch(fetchBusinessesStarted());
        axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
      })
      .then(res => {
          console.log(res)
      })
      .catch(err => {
      });
        dispatch(fetchBusinessesSuccess());
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

const fetchBusinessesStarted = data => {
    return {
        type: FETCH_BUSINESSES_STARTED,
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
