import * as types from "../Actions/actionTypes";

const initialState = {
  listEmployee: [],
  listProvince: [],
  listDistrict: [],
  listWard: [],
  listCertificate: [],
  employee: {},
  province: {},
  district: {},
  ward: {},
  certificate: {},
  loading: false,
  error: false,
  dialog: false,
  dialogDelete: false,
  dialogCertificate: false,
};

const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DIALOG:
      return {
        ...state,
        dialog: action.payload,
      };

    case types.SET_DIALOG_DELETE:
      return {
        ...state,
        dialogDelete: action.payload,
      };

    case types.SET_DIALOG_CERTIFICATE:
      return {
        ...state,
        dialogCertificate: action.payload,
      };

    case types.SET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
      };

    case types.SET_PROVINCE:
      return {
        ...state,
        province: action.payload,
      };

    case types.SET_DISTRICT:
      return {
        ...state,
        district: action.payload,
      };

    case types.SET_WARD:
      return {
        ...state,
        ward: action.payload,
      };

    case types.SET_CERTIFICATE:
      return {
        ...state,
        certificate: action.payload,
      };

    // CASE REQUEST:
    // Employee
    case types.GET_EMPLOYEES_REQUESTED:
    case types.ADD_EMPLOYEE_REQUESTED:
    case types.EDIT_EMPLOYEE_REQUESTED:
    case types.DELETE_EMPLOYEE_REQUESTED:

    //Province
    case types.GET_PROVINCES_REQUESTED:
    case types.ADD_PROVINCE_REQUESTED:
    case types.EDIT_PROVINCE_REQUESTED:
    case types.DELETE_PROVINCE_REQUESTED:

    // District
    case types.GET_DISTRICTS_IN_PROVINCE_REQUESTED:
    case types.GET_DISTRICTS_REQUESTED:
    case types.ADD_DISTRICT_REQUESTED:
    case types.EDIT_DISTRICT_REQUESTED:
    case types.DELETE_DISTRICT_REQUESTED:

    // Ward
    case types.GET_WARDS_IN_DISTRICT_REQUESTED:
    case types.GET_WARDS_REQUESTED:
    case types.ADD_WARD_REQUESTED:
    case types.EDIT_WARD_REQUESTED:
    case types.DELETE_WARD_REQUESTED:

    // Certificate
    case types.GET_CERTIFICATES_REQUESTED:
    case types.ADD_CERTIFICATE_REQUESTED:
    case types.EDIT_CERTIFICATE_REQUESTED:
    case types.DELETE_CERTIFICATE_REQUESTED:
      return { ...state, loading: true };

    // CASE SUCCESS:
    case types.GET_EMPLOYEES_SUCCEEDED:
      return {
        ...state,
        listEmployee: action.payload,
        loading: false,
      };

    case types.ADD_EMPLOYEE_SUCCEEDED:
    case types.EDIT_EMPLOYEE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        dialog: false,
        employee: {},
      };

    case types.DELETE_EMPLOYEE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        dialogDelete: false,
      };

    // Province
    case types.GET_PROVINCES_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listProvince: action.payload,
      };

    case types.ADD_PROVINCE_SUCCEEDED:
    case types.EDIT_PROVINCE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        dialog: false,
        province: {},
      };

    case types.DELETE_PROVINCE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        dialogDelete: false,
      };

    // District
    case types.GET_DISTRICTS_SUCCEEDED:
    case types.GET_DISTRICTS_IN_PROVINCE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listDistrict: action.payload,
      };

    case types.ADD_DISTRICT_SUCCEEDED:
    case types.EDIT_DISTRICT_SUCCEEDED:
      return {
        ...state,
        loading: false,
        dialog: false,
        district: {},
      };

    case types.DELETE_DISTRICT_SUCCEEDED:
      return {
        ...state,
        loading: false,
        dialogDelete: false,
      };

    // Ward
    case types.GET_WARDS_IN_DISTRICT_SUCCEEDED:
    case types.GET_WARDS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listWard: action.payload,
      };

    case types.ADD_WARD_SUCCEEDED:
    case types.EDIT_WARD_SUCCEEDED:
      return {
        ...state,
        loading: false,
        dialog: false,
        ward: {},
      };

    case types.DELETE_WARD_SUCCEEDED:
      return {
        ...state,
        loading: false,
        dialogDelete: false,
      };

    // Certificate
    case types.GET_CERTIFICATES_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listCertificate: action.payload,
      };

    case types.ADD_CERTIFICATE_SUCCEEDED:
    case types.EDIT_CERTIFICATE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        dialogCertificate: false,
        certificate: {},
      };

    case types.DELETE_CERTIFICATE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        dialogDelete: false,
      };

    // CASE FAIL:
    case types.GET_EMPLOYEES_FAILED:
    case types.ADD_EMPLOYEE_FAILED:
    case types.EDIT_EMPLOYEE_FAILED:
    case types.DELETE_EMPLOYEE_FAILED:

    // Province
    case types.GET_PROVINCES_FAILED:
    case types.ADD_PROVINCE_FAILED:
    case types.EDIT_PROVINCE_FAILED:
    case types.DELETE_PROVINCE_FAILED:

    // District
    case types.GET_DISTRICTS_IN_PROVINCE_FAILED:
    case types.GET_DISTRICTS_FAILED:
    case types.ADD_DISTRICT_FAILED:
    case types.EDIT_DISTRICT_FAILED:
    case types.DELETE_DISTRICT_FAILED:

    // Ward
    case types.GET_WARDS_IN_DISTRICT_FAILED:
    case types.GET_WARDS_FAILED:
    case types.ADD_WARD_FAILED:
    case types.EDIT_WARD_FAILED:
    case types.DELETE_WARD_FAILED:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default EmployeeReducer;
