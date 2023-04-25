import { all, takeEvery } from "redux-saga/effects";
import { getAllEmployees } from "../Slices/employeeSlice";

function* log(action) {
  console.log(action);
}

function* hello() {
  yield takeEvery(getAllEmployees().type, log);
}

export default function* rootEmployeeSaga() {
  yield all([hello()]);
}
