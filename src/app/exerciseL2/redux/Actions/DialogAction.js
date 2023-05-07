import * as types from "./actionTypes";

export const setDialogAction = (payload) => {
  return {
    type: types.SET_DIALOG,
    payload: payload,
  };
};

export const setDialogDeleteAction = (payload) => {
  return {
    type: types.SET_DIALOG_DELETE,
    payload: payload,
  };
};

export const setDialogCertificate = (payload) => {
  return {
    type: types.SET_DIALOG_CERTIFICATE,
    payload: payload,
  };
};
