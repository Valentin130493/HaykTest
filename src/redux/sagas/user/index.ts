import {all, takeLatest} from "redux-saga/effects";
import login from "./logIn";
import logOut from "./logOut";
import registration from "./registration";
import {LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST} from "../../actionTypes/loginActionTypes";

export default function* userSaga() {
    yield all([
            takeLatest(LOGIN_REQUEST, login),
            takeLatest(LOGOUT_REQUEST, logOut),
            takeLatest(REGISTER_REQUEST, registration)
        ]
    )
}