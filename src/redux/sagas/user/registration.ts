import {call, put} from "redux-saga/effects";
import { firebaseCreateUser} from "../../../firebase/firebase";
import {getProductFailure, getProductSuccess} from "../../actions/productActions";

export default function* registration(payload: any): any {
    try {
        const response = yield call(()=>firebaseCreateUser(payload.email,payload.password));
        console.log(response)
        yield put(getProductSuccess(response))
    } catch (error) {
        yield put(getProductFailure(error));
    }
}