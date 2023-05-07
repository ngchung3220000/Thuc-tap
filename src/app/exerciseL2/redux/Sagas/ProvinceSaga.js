import {
  addProvince,
  deleteProvince,
  editProvince,
  getProvinces,
} from "app/exerciseL2/api/ProvinceServices";
import * as types from "../Actions/actionTypes";
import { SUCCESS } from "app/exerciseL2/constants/constants";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  addProvinceFailed,
  addProvinceSucceeded,
  deleteProvinceFailed,
  deleteProvinceSucceeded,
  editProvinceFailed,
  editProvinceSucceeded,
  getDistrictsByProvinceIdFailed,
  getDistrictsByProvinceIdSucceeded,
  getProvincesFailed,
  getProvincesSucceeded,
} from "../Actions/ProvinceAction";
import { getDistrictsByProvinceId } from "app/exerciseL2/api/EmployeeServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function* fetchGetDistrictsInProvince(action) {
  try {
    const result = yield call(getDistrictsByProvinceId, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield put(getDistrictsByProvinceIdSucceeded(result?.data?.data));
    } else {
      yield put(getDistrictsByProvinceIdFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {}
}

function* fetchGetProvinces() {
  try {
    const result = yield call(getProvinces);
    if (result?.data?.code === SUCCESS) {
      yield put(getProvincesSucceeded(result?.data?.data));
    } else {
      yield put(getProvincesFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchAddProvince(action) {
  try {
    const result = yield call(addProvince, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetProvinces();
      yield put(addProvinceSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(addProvinceFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchEditProvince(action) {
  try {
    const result = yield call(editProvince, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetProvinces();
      yield put(editProvinceSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(editProvinceFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchDeleteProvince(action) {
  try {
    const result = yield call(deleteProvince, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetProvinces();
      yield put(deleteProvinceSucceeded(result?.data?.data));
      toast.success(result?.data?.message);
    } else {
      yield put(deleteProvinceFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* SagaGetDistrictsInProvince() {
  yield takeEvery(
    types.GET_DISTRICTS_IN_PROVINCE_REQUESTED,
    fetchGetDistrictsInProvince
  );
}

function* SagaGetProvinces() {
  yield takeEvery(types.GET_PROVINCES_REQUESTED, fetchGetProvinces);
}

function* SagaAddProvinces() {
  yield takeEvery(types.ADD_PROVINCE_REQUESTED, fetchAddProvince);
}

function* SagaEditProvinces() {
  yield takeEvery(types.EDIT_PROVINCE_REQUESTED, fetchEditProvince);
}

function* SagaDeleteProvince() {
  yield takeEvery(types.DELETE_PROVINCE_REQUESTED, fetchDeleteProvince);
}

export default function* rootProvinceSaga() {
  yield all([
    SagaGetDistrictsInProvince(),
    SagaGetProvinces(),
    SagaAddProvinces(),
    SagaEditProvinces(),
    SagaDeleteProvince(),
  ]);
}
