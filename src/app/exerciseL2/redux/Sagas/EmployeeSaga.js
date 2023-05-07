import { all, takeEvery, put, call } from "redux-saga/effects";
import {
  addEmployeeFailed,
  addEmployeeSucceeded,
  deleteEmployeeFailed,
  deleteEmployeeSucceeded,
  editEmployeeFailed,
  editEmployeeSucceeded,
  getEmployeesFailed,
  getEmployeesSucceeded,
} from "../Actions/EmployeeAction";
import * as types from "../Actions/actionTypes";
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  getEmployees,
} from "app/exerciseL2/api/EmployeeServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SUCCESS } from "app/exerciseL2/constants/constants";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function* fetchGetEmployees() {
  try {
    const result = yield call(getEmployees);
    if (result?.data?.code === SUCCESS) {
      yield put(getEmployeesSucceeded(result?.data?.data));
    } else {
      yield put(getEmployeesFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchAddEmployee(action) {
  try {
    const result = yield call(addEmployee, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetEmployees();
      yield put(addEmployeeSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(addEmployeeFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchEditEmployee(action) {
  try {
    const result = yield call(editEmployee, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetEmployees();
      yield put(editEmployeeSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(editEmployeeFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchDeleteEmployee(action) {
  try {
    const result = yield call(deleteEmployee, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetEmployees();
      yield put(deleteEmployeeSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(deleteEmployeeFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* SagaGetEmployees() {
  yield takeEvery(types.GET_EMPLOYEES_REQUESTED, fetchGetEmployees);
}

function* SagaAddEmployee() {
  yield takeEvery(types.ADD_EMPLOYEE_REQUESTED, fetchAddEmployee);
}

function* SagaEditEmployee() {
  yield takeEvery(types.EDIT_EMPLOYEE_REQUESTED, fetchEditEmployee);
}

function* SagaDeleteEmployee() {
  yield takeEvery(types.DELETE_EMPLOYEE_REQUESTED, fetchDeleteEmployee);
}

export default function* rootEmployeeSaga() {
  yield all([
    SagaGetEmployees(),
    SagaDeleteEmployee(),
    SagaAddEmployee(),
    SagaEditEmployee(),
  ]);
}
