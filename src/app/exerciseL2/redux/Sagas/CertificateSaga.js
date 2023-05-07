import { SUCCESS } from "app/exerciseL2/constants/constants";
import * as types from ".././Actions/actionTypes";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { getCertificates } from "app/exerciseL2/api/CertificateServices";
import {
  getCertificatesFailed,
  getCertificatesSucceeded,
} from "../Actions/CertificateAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function* fetchGetCertificates() {
  try {
    const result = yield call(getCertificates);
    if (result?.data?.code === SUCCESS) {
      yield put(getCertificatesSucceeded(result?.data?.data));
    } else {
      yield put(getCertificatesFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* SagaGetCertificates() {
  yield takeEvery(types.GET_CERTIFICATES_REQUESTED, fetchGetCertificates);
}

export default function* rootCertificateSaga() {
  yield all([SagaGetCertificates()]);
}
