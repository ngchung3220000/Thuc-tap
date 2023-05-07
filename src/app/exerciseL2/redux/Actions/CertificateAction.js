import * as types from "./actionTypes";

export const setCertificate = (payload) => {
  return {
    type: types.SET_CERTIFICATE,
    payload: payload,
  };
};

export const getCertificatesRequested = (payload) => {
  return {
    type: types.GET_CERTIFICATES_REQUESTED,
    payload: payload,
  };
};
export const getCertificatesSucceeded = (payload) => {
  return {
    type: types.GET_CERTIFICATES_SUCCEEDED,
    payload: payload,
  };
};
export const getCertificatesFailed = (payload) => {
  return {
    type: types.GET_CERTIFICATES_FAILED,
    payload: payload,
  };
};

// ADD WARD
export const addCertificateRequested = (payload) => {
  return {
    type: types.ADD_CERTIFICATE_REQUESTED,
    payload: payload,
  };
};

export const addCertificateSucceeded = (payload) => {
  return {
    type: types.ADD_CERTIFICATE_SUCCEEDED,
    payload: payload,
  };
};

export const addCertificateFailed = (payload) => {
  return {
    type: types.ADD_CERTIFICATE_FAILED,
    payload: payload,
  };
};

// EDIT WARD
export const editCertificateRequested = (payload) => {
  return {
    type: types.EDIT_CERTIFICATE_REQUESTED,
    payload: payload,
  };
};

export const editCertificateSucceeded = (payload) => {
  return {
    type: types.EDIT_CERTIFICATE_SUCCEEDED,
    payload: payload,
  };
};

export const editCertificateFailed = (payload) => {
  return {
    type: types.EDIT_CERTIFICATE_FAILED,
    payload: payload,
  };
};

// DELETE WARD
export const deleteCertificateRequested = (payload) => {
  return {
    type: types.DELETE_CERTIFICATE_REQUESTED,
    payload: payload,
  };
};

export const deleteCertificateSucceeded = (payload) => {
  return {
    type: types.DELETE_CERTIFICATE_SUCCEEDED,
    payload: payload,
  };
};

export const deleteCertificateFailed = (payload) => {
  return {
    type: types.DELETE_CERTIFICATE_FAILED,
    payload: payload,
  };
};
