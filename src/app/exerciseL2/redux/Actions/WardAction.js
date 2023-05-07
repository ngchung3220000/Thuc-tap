import * as types from "./actionTypes";

export const setWard = (payload) => {
  return {
    type: types.SET_WARD,
    payload: payload,
  };
};

// GET ALL WARDS
export const getWardsRequested = (payload) => {
  return {
    type: types.GET_WARDS_REQUESTED,
    payload: payload,
  };
};
export const getWardsSucceeded = (payload) => {
  return {
    type: types.GET_WARDS_SUCCEEDED,
    payload: payload,
  };
};
export const getWardsFailed = (payload) => {
  return {
    type: types.GET_WARDS_FAILED,
    payload: payload,
  };
};

// ADD WARD
export const addWardRequested = (payload) => {
  return {
    type: types.ADD_WARD_REQUESTED,
    payload: payload,
  };
};

export const addWardSucceeded = (payload) => {
  return {
    type: types.ADD_WARD_SUCCEEDED,
    payload: payload,
  };
};

export const addWardFailed = (payload) => {
  return {
    type: types.ADD_WARD_FAILED,
    payload: payload,
  };
};

// EDIT WARD
export const editWardRequested = (payload) => {
  return {
    type: types.EDIT_WARD_REQUESTED,
    payload: payload,
  };
};

export const editWardSucceeded = (payload) => {
  return {
    type: types.EDIT_WARD_SUCCEEDED,
    payload: payload,
  };
};

export const editWardFailed = (payload) => {
  return {
    type: types.EDIT_WARD_FAILED,
    payload: payload,
  };
};

// DELETE WARD
export const deleteWardRequested = (payload) => {
  return {
    type: types.DELETE_WARD_REQUESTED,
    payload: payload,
  };
};

export const deleteWardSucceeded = (payload) => {
  return {
    type: types.DELETE_WARD_SUCCEEDED,
    payload: payload,
  };
};

export const deleteWardFailed = (payload) => {
  return {
    type: types.DELETE_WARD_FAILED,
    payload: payload,
  };
};
