import * as types from "../Actions/actionTypes";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  addDistrict,
  deleteDistrict,
  editDistrict,
  getDistricts,
} from "app/exerciseL2/api/DistrictServices";
import { SUCCESS } from "app/exerciseL2/constants/constants";
import { getWardsByDistrictId } from "app/exerciseL2/api/EmployeeServices";
import {
  addDistrictFailed,
  addDistrictSucceeded,
  deleteDistrictFailed,
  deleteDistrictSucceeded,
  editDistrictFailed,
  editDistrictSucceeded,
  getDistrictsFailed,
  getDistrictsSucceeded,
  getWardsByDistrictIdFailed,
  getWardsByDistrictIdSucceeded,
} from "../Actions/DistrictAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function* fetchGetWardsInDistrict(action) {
  try {
    const result = yield call(getWardsByDistrictId, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield put(getWardsByDistrictIdSucceeded(result?.data?.data));
    } else {
      yield put(getWardsByDistrictIdFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchGetDistricts() {
  try {
    const result = yield call(getDistricts);
    if (result?.data?.code === SUCCESS) {
      yield put(getDistrictsSucceeded(result?.data?.data));
    } else {
      yield put(getDistrictsFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchAddDistrict(action) {
  try {
    const result = yield call(addDistrict, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetDistricts();
      yield put(addDistrictSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(addDistrictFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchEditDistrict(action) {
  try {
    const result = yield call(editDistrict, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetDistricts();
      yield put(editDistrictSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(editDistrictFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchDeleteDistrict(action) {
  try {
    const result = yield call(deleteDistrict, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetDistricts();
      yield put(deleteDistrictSucceeded(result?.data?.data));
      toast.success(result?.data?.message);
    } else {
      yield put(deleteDistrictFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* SagaGetWardsInDistrict() {
  yield takeEvery(
    types.GET_WARDS_IN_DISTRICT_REQUESTED,
    fetchGetWardsInDistrict
  );
}

function* SagaGetDistricts() {
  yield takeEvery(types.GET_DISTRICTS_REQUESTED, fetchGetDistricts);
}
function* SagaAddDistrict() {
  yield takeEvery(types.ADD_DISTRICT_REQUESTED, fetchAddDistrict);
}
function* SagaEditDistrict() {
  yield takeEvery(types.EDIT_DISTRICT_REQUESTED, fetchEditDistrict);
}
function* SagaDeleteDistrict() {
  yield takeEvery(types.DELETE_DISTRICT_REQUESTED, fetchDeleteDistrict);
}

export default function* rootDistrictSaga() {
  yield all([
    SagaGetWardsInDistrict(),
    SagaGetDistricts(),
    SagaAddDistrict(),
    SagaEditDistrict(),
    SagaDeleteDistrict(),
  ]);
}
