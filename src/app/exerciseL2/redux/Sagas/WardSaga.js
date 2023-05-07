import * as types from "../Actions/actionTypes";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  addWard,
  deleteWard,
  editWard,
  getWards,
} from "app/exerciseL2/api/WardServices";
import {
  addWardFailed,
  addWardSucceeded,
  deleteWardFailed,
  deleteWardSucceeded,
  editWardFailed,
  editWardSucceeded,
  getWardsFailed,
  getWardsSucceeded,
} from "../Actions/WardAction";
import { SUCCESS } from "app/exerciseL2/constants/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function* fetchGetWards() {
  try {
    const result = yield call(getWards);
    if (result?.data?.code === SUCCESS) {
      yield put(getWardsSucceeded(result?.data?.data));
    } else {
      yield put(getWardsFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchAddWard(action) {
  try {
    const result = yield call(addWard, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetWards();
      yield put(addWardSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(addWardFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchEditWard(action) {
  try {
    const result = yield call(editWard, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetWards();
      yield put(editWardSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(editWardFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchDeleteWard(action) {
  try {
    const result = yield call(deleteWard, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetWards();
      yield put(deleteWardSucceeded(result?.data?.data));
      toast.success(result?.data?.message);
    } else {
      yield put(deleteWardFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* SagaGetWards() {
  yield takeEvery(types.GET_WARDS_REQUESTED, fetchGetWards);
}
function* SagaAddWard() {
  yield takeEvery(types.ADD_WARD_REQUESTED, fetchAddWard);
}
function* SagaEditWard() {
  yield takeEvery(types.EDIT_WARD_REQUESTED, fetchEditWard);
}
function* SagaDeleteWard() {
  yield takeEvery(types.DELETE_WARD_REQUESTED, fetchDeleteWard);
}

export default function* rootWardSaga() {
  yield all([SagaGetWards(), SagaAddWard(), SagaEditWard(), SagaDeleteWard()]);
}
