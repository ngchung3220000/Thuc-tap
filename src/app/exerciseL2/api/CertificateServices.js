import axios from "axios";
import ConstantList from "../../appConfig";

const API_PATH = ConstantList.API_ENPOINT + "/api";
const API_PATH2 = ConstantList.API_ENPOINT + "/employee-certificates/all";

export const getEmployeeCertificates = () => {
  return axios.get(API_PATH2);
};
export const getCertificates = () => {
  return axios.get(API_PATH + "/certificates/all");
};

export const addCertificate = (item) => {
  return axios.post(API_PATH + "/certificates", item);
};

export const editCertificate = (item) => {
  return axios.put(API_PATH + "/certificates/" + item.id, item);
};

export const deleteCertificate = (id) => {
  return axios.delete(API_PATH + "/certificates/" + id);
};
