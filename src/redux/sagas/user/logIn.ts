import {call, put} from "redux-saga/effects";
import {firebaseAuth} from "../../../firebase/firebase";
import {getProductFailure, getProductSuccess} from "../../actions/productActions";


export default function* login(payload:any): any {
    try {
        const response = yield call(()=>firebaseAuth(payload.email,payload.password));
        yield put(getProductSuccess(response))
    } catch (error) {
        yield put(getProductFailure(error));
    }
}
