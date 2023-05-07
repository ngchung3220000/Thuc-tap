import * as types from "./actionTypes";

export const setDistrict = (payload) => {
  return {
    type: types.SET_DISTRICT,
    payload: payload,
  };
};

// GET WARDS BY ID
export const getWardsByDistrictIdRequested = (payload) => {
  return {
    type: types.GET_WARDS_IN_DISTRICT_REQUESTED,
    payload: payload,
  };
};

export const getWardsByDistrictIdSucceeded = (payload) => {
  return {
    type: types.GET_WARDS_IN_DISTRICT_SUCCEEDED,
    payload: payload,
  };
};

export const getWardsByDistrictIdFailed = (payload) => {
  return {
    type: types.GET_WARDS_IN_DISTRICT_FAILED,
    payload: payload,
  };
};

// GET ALL DISTRICTS
export const getDistrictsRequested = (payload) => {
  return {
    type: types.GET_DISTRICTS_REQUESTED,
    payload: payload,
  };
};
export const getDistrictsSucceeded = (payload) => {
  return {
    type: types.GET_DISTRICTS_SUCCEEDED,
    payload: payload,
  };
};
export const getDistrictsFailed = (payload) => {
  return {
    type: types.GET_DISTRICTS_FAILED,
    payload: payload,
  };
};

// ADD DISTRICT
export const addDistrictRequested = (payload) => {
  return {
    type: types.ADD_DISTRICT_REQUESTED,
    payload: payload,
  };
};

export const addDistrictSucceeded = (payload) => {
  return {
    type: types.ADD_DISTRICT_SUCCEEDED,
    payload: payload,
  };
};

export const addDistrictFailed = (payload) => {
  return {
    type: types.ADD_DISTRICT_FAILED,
    payload: payload,
  };
};

// EDIT DISTRICT
export const editDistrictRequested = (payload) => {
  return {
    type: types.EDIT_DISTRICT_REQUESTED,
    payload: payload,
  };
};

export const editDistrictSucceeded = (payload) => {
  return {
    type: types.EDIT_DISTRICT_SUCCEEDED,
    payload: payload,
  };
};

export const editDistrictFailed = (payload) => {
  return {
    type: types.EDIT_DISTRICT_FAILED,
    payload: payload,
  };
};

// DELETE DISTRICT
export const deleteDistrictRequested = (payload) => {
  return {
    type: types.DELETE_DISTRICT_REQUESTED,
    payload: payload,
  };
};

export const deleteDistrictSucceeded = (payload) => {
  return {
    type: types.DELETE_DISTRICT_SUCCEEDED,
    payload: payload,
  };
};

export const deleteDistrictFailed = (payload) => {
  return {
    type: types.DELETE_DISTRICT_FAILED,
    payload: payload,
  };
};
