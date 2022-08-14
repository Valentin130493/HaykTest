import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS, LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS
} from "../actionTypes/loginActionTypes";

interface LoginState {
  loading: boolean,
  error: any,
  userInfo: any | null,
  isAuthenticated: boolean
}


const initialState: LoginState = {
  userInfo: null,
  isAuthenticated: false,
  loading: false,
  error: null
};


export default function loginReducer(state = initialState, action: { type: string, payload: any }) {
  switch (action.type) {
    case LOGIN_REQUEST :
      return {
        ...state,
        loading: false,
        userInfo: null,
        isAuthenticated: false
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true
      };
    case LOGIN_FAILURE :
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGOUT_SUCCESS :
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        userInfo: null
      };

    case LOGOUT_FAILURE :
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };

    case REGISTER_REQUEST :
      return {
        ...state,
        loading: false,
        userInfo: null,
        isAuthenticated: false
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        userInfo: null
      };

    case REGISTER_FAILURE :
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };

    default:
      return state;
  }
}