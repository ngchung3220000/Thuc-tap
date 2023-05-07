import axiosMiddleware from "redux-axios-middleware";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "../../redux/reducers/RootReducer";
import HttpService from "app/services/HttpService";
import rootEmployeeSaga from "./Sagas/EmployeeSaga";
import rootProvinceSaga from "./Sagas/ProvinceSaga";
import rootDistrictSaga from "./Sagas/DistrictSaga";
import rootWardSaga from "./Sagas/WardSaga";
import rootCertificateSaga from "./Sagas/CertificateSaga";
const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  thunk,
  sagaMiddleware,
  axiosMiddleware(HttpService.getAxiosClient()),
];
export const Store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootEmployeeSaga);
sagaMiddleware.run(rootProvinceSaga);
sagaMiddleware.run(rootDistrictSaga);
sagaMiddleware.run(rootWardSaga);
sagaMiddleware.run(rootCertificateSaga);
