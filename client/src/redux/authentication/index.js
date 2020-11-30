import axiosInstance from '../../helper/axios';

const LOGIN_REQUEST_SENT = 'LOGIN_REQUEST_SENT';
const LOGIN_REQUEST_COMPLETE = 'LOGIN_REQUEST_COMPLETE';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';
const CLEAR_ERROR = 'CLEAR_ERROR';

let userData = localStorage.getItem('user');

userData = userData ? JSON.parse(userData) : null;

const initialState = {
  token: userData?.token,
  isAuthenticated: !!userData,
  user: userData?.user,
  loader: false,
  error: null,
};

const authenticationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST_SENT:
      return {
        ...state,
        loader: true,
      };
    case LOGIN_REQUEST_COMPLETE:
      return {
        ...state,
        loader: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(payload));

      return {
        ...state,
        isAuthenticated: true,
        token: payload?.token,
        user: payload?.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: payload?.error,
      };
    case LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userLogin = (data) => {
  function requestSent() {
    return {
      type: LOGIN_REQUEST_SENT,
    };
  }

  function requestComplete() {
    return {
      type: LOGIN_REQUEST_COMPLETE,
    };
  }

  function success(apiData) {
    return {
      type: LOGIN_SUCCESS,
      payload: {
        ...apiData,
      },
    };
  }

  function failure(error) {
    return {
      type: LOGIN_FAILURE,
      payload: { error },
    };
  }

  return (dispatch) => {
    dispatch(requestSent());
    axiosInstance
      .post('login', data)
      .then((response) => {
        dispatch(success(response.data));
      })
      .catch((error) => {
        dispatch(failure(error?.response?.data?.message || 'Server Error'));
      })
      .then(() => {
        dispatch(requestComplete());
      });
  };
};

export const logout = () => ({
  type: LOGOUT,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export default authenticationReducer;
