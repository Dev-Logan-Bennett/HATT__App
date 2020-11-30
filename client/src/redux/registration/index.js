import axiosInstance from '../../helper/axios';

const REGISTRATION_REQUEST_SENT = 'REGISTRATION_REQUEST_SENT';
const REGISTRATION_REQUEST_COMPLETE = 'REGISTRATION_REQUEST_COMPLETE';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
const CLEAR_ERROR = 'CLEAR_ERROR';
const CLEAR_ALL = 'CLEAR_ALL';

const initialState = {
  registered: false,
  loader: false,
  error: null,
};

const registrationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTRATION_REQUEST_SENT:
      return {
        ...state,
        loader: true,
      };
    case REGISTRATION_REQUEST_COMPLETE:
      return {
        ...state,
        loader: false,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        registered: true,
        error: null,
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        registered: false,
        error: payload?.error,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case CLEAR_ALL:
      return {
        registered: false,
        loader: false,
        error: null,
      };
    default:
      return state;
  }
};

export const userRegistration = (userData) => {
  function requestSent() {
    return {
      type: REGISTRATION_REQUEST_SENT,
    };
  }

  function requestComplete() {
    return {
      type: REGISTRATION_REQUEST_COMPLETE,
    };
  }

  function success() {
    return {
      type: REGISTRATION_SUCCESS,
    };
  }

  function failure(error) {
    return {
      type: REGISTRATION_FAILURE,
      payload: { error },
    };
  }

  return (dispatch) => {
    dispatch(requestSent());
    axiosInstance
      .post('register', userData)
      .then(() => {
        dispatch(success());
      })
      .catch((error) => {
        dispatch(failure(error?.response?.data?.message || 'Server Error'));
      })
      .then(() => {
        dispatch(requestComplete());
      });
  };
};

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});

export default registrationReducer;
