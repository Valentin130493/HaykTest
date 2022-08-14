import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS, LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS
} from "../actionTypes/loginActionTypes";

export const userLoginRequest = () => ({
  type: LOGIN_REQUEST
});
export const userLoginSuccess = (userInfo: any) => ({
  type: LOGIN_SUCCESS,
  payload: userInfo
});
export const userLoginFailure = (error: unknown) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const userLogOutRequest = () => ({
  type: LOGOUT_REQUEST
});
export const userLogOutSuccess = () => ({
  type: LOGOUT_SUCCESS

});
export const userLogOutFailure = (error: unknown) => ({
  type: LOGOUT_FAILURE,
  payload: error
});

export const userRegisterRequest = () => ({
  type: REGISTER_REQUEST
});

export const userRegisterSuccess = () => ({
  type: REGISTER_SUCCESS
});

export const userRegisterFailure = (error: unknown) => ({
  type: REGISTER_FAILURE,
  payload: error
});