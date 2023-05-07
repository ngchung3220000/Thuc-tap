import * as types from "./actionTypes";

export const setProvince = (payload) => {
  return {
    type: types.SET_PROVINCE,
    payload: payload,
  };
};

// GET DISTRICTS BY ID
export const getDistrictsByProvinceIdRequested = (payload) => {
  return {
    type: types.GET_DISTRICTS_IN_PROVINCE_REQUESTED,
    payload: payload,
  };
};

export const getDistrictsByProvinceIdSucceeded = (payload) => {
  return {
    type: types.GET_DISTRICTS_IN_PROVINCE_SUCCEEDED,
    payload: payload,
  };
};

export const getDistrictsByProvinceIdFailed = (payload) => {
  return {
    type: types.GET_DISTRICTS_IN_PROVINCE_FAILED,
    payload: payload,
  };
};

// GET ALL PROVINCES
export const getProvincesRequested = (payload) => {
  return {
    type: types.GET_PROVINCES_REQUESTED,
    payload: payload,
  };
};

export const getProvincesSucceeded = (payload) => {
  return {
    type: types.GET_PROVINCES_SUCCEEDED,
    payload: payload,
  };
};

export const getProvincesFailed = (payload) => {
  return {
    type: types.GET_PROVINCES_FAILED,
    payload: payload,
  };
};

// ADD PROVINCE
export const addProvinceRequested = (payload) => {
  return {
    type: types.ADD_PROVINCE_REQUESTED,
    payload: payload,
  };
};

export const addProvinceSucceeded = (payload) => {
  return {
    type: types.ADD_PROVINCE_SUCCEEDED,
    payload: payload,
  };
};

export const addProvinceFailed = (payload) => {
  return {
    type: types.ADD_PROVINCE_FAILED,
    payload: payload,
  };
};

// EDIT PROVINCE
export const editProvinceRequested = (payload) => {
  return {
    type: types.EDIT_PROVINCE_REQUESTED,
    payload: payload,
  };
};

export const editProvinceSucceeded = (payload) => {
  return {
    type: types.EDIT_PROVINCE_SUCCEEDED,
    payload: payload,
  };
};

export const editProvinceFailed = (payload) => {
  return {
    type: types.EDIT_PROVINCE_FAILED,
    payload: payload,
  };
};

// DELETE PROVINCE
export const deleteProvinceRequested = (payload) => {
  return {
    type: types.DELETE_PROVINCE_REQUESTED,
    payload: payload,
  };
};

export const deleteProvinceSucceeded = (payload) => {
  return {
    type: types.DELETE_PROVINCE_SUCCEEDED,
    payload: payload,
  };
};

export const deleteProvinceFailed = (payload) => {
  return {
    type: types.DELETE_PROVINCE_FAILED,
    payload: payload,
  };
};
