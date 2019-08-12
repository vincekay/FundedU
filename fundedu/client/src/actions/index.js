import axios from 'axios';
import setToken from './setToken';
import jwt_decode from 'jwt-decode';
import { REG_USER_ASYNC, CURRENT_USER, GET_ERRORS, CLEAR_STUDENT, GET_ASSOCIATE, ADD_ASSOCIATE, ADD_IMG } from '../constants'

export const registerUser = user => async dispatch => {

  await axios.post('http://localhost:5001/api/users/register', user)
    .then(res => {
      dispatch({ type: REG_USER_ASYNC, payload: res.data.data });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
}

export const loginUser = user => async dispatch => {
  await axios.post('http://localhost:5001/api/users/login/', user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
}

export const setCurrentUser = decoded => {
  return {
    type: CURRENT_USER,
    payload: decoded
  }
}

export const clearStudent = clear => {
  return {
    type: CLEAR_STUDENT,
    payload: clear
  }
}

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  dispatch(clearStudent([]));
};

export const getAssociates = id => async dispatch => {

  await axios.get(`http://localhost:5001/api/users/getassociate/${id}`)
    .then(res => {
      dispatch({ type: GET_ASSOCIATE, payload: res.data.data });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
}

export const addStudent = (funderId, studentId) => async dispatch => {

  await axios.put(`http://localhost:5001/api/users/associate/${funderId}`, studentId)
    .then(res => {
      dispatch({ type: ADD_ASSOCIATE, payload: res.data.data });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
}

export const addFunder = (studentId, funderId) => async dispatch => {

  await axios.put(`http://localhost:5001/api/users/associate/${studentId}`, funderId)
    // .then(res => {
    //   dispatch({ type: 'ADD_ASSOCIATE', payload: res.data.data });
    // })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
}

export const addReceipt = (id, formData, config) => async dispatch => {
  await axios.post(`http://localhost:5001/api/users/upload/${id}`, formData, config)
    .then((res) => {
      alert("The file is successfully uploaded");
      dispatch({ type: ADD_IMG, payload: res.data.data });
      console.log(res.data.data);
    })
    .catch(err => {
      console.log('//////////////////');
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response
        
      });
    });
}