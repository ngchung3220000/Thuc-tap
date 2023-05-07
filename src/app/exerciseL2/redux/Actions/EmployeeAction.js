import * as types from "./actionTypes";

// ROW DATA
export const setEmployeeAction = (payload) => {
  return {
    type: types.SET_EMPLOYEE,
    payload: payload,
  };
};

// GET ALL EMPLOYEES
export const getEmployeesRequested = (payload) => {
  return {
    type: types.GET_EMPLOYEES_REQUESTED,
    payload: payload,
  };
};

export const getEmployeesSucceeded = (payload) => {
  return {
    type: types.GET_EMPLOYEES_SUCCEEDED,
    payload: payload,
  };
};

export const getEmployeesFailed = (payload) => {
  return {
    type: types.GET_EMPLOYEES_FAILED,
    payload: payload,
  };
};

// ADD EMPLOYEE
export const addEmployeeRequested = (payload) => {
  return {
    type: types.ADD_EMPLOYEE_REQUESTED,
    payload: payload,
  };
};

export const addEmployeeSucceeded = (payload) => {
  return {
    type: types.ADD_EMPLOYEE_SUCCEEDED,
    payload: payload,
  };
};

export const addEmployeeFailed = (payload) => {
  return {
    type: types.ADD_EMPLOYEE_FAILED,
    payload: payload,
  };
};

// EDIT EMPLOYEE
export const editEmployeeRequested = (payload) => {
  return {
    type: types.EDIT_EMPLOYEE_REQUESTED,
    payload: payload,
  };
};

export const editEmployeeSucceeded = (payload) => {
  return {
    type: types.EDIT_EMPLOYEE_SUCCEEDED,
    payload: payload,
  };
};

export const editEmployeeFailed = (payload) => {
  return {
    type: types.EDIT_EMPLOYEE_FAILED,
    payload: payload,
  };
};

// DELETE EMPLOYEE
export const deleteEmployeeRequested = (payload) => {
  return {
    type: types.DELETE_EMPLOYEE_REQUESTED,
    payload: payload,
  };
};

export const deleteEmployeeSucceeded = (payload) => {
  return {
    type: types.DELETE_EMPLOYEE_SUCCEEDED,
    payload: payload,
  };
};

export const deleteEmployeeFailed = (payload) => {
  return {
    type: types.DELETE_EMPLOYEE_FAILED,
    payload: payload,
  };
};
