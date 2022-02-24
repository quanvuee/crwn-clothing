import { all, call, takeLatest, put } from "redux-saga/effects";

import { UserActionTypes } from "../user/user.type";
import { clearCart } from "./cart.actions";

export function* sagaClearCart() {
  yield put(clearCart());
}
export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, sagaClearCart);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
