import {call, put} from "redux-saga/effects";
import {firebaseAuth, firebaseSignOut} from "../../../firebase/firebase";
import {getProductFailure, getProductSuccess} from "../../actions/productActions";

export default function* logOut(): any {
    try {
        const response = yield call(()=>firebaseSignOut());
        yield put(getProductSuccess(response))
    } catch (error) {
        yield put(getProductFailure(error));
    }
}
