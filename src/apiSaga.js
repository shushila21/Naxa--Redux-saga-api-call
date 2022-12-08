import { put, takeEvery } from "redux-saga/effects";
import { CALL_API, SET_CALL_API } from "./redux/constant";

function* getServices() {
  let data = yield fetch("https://admin.naxa.com.np/api/services?format=json");
  data = yield data.json();
  yield put({type:SET_CALL_API, data})
}

function* apiSaga() {
  yield takeEvery(CALL_API, getServices);
}

export default apiSaga;
