import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmployeeAction,
  addEmployeeRequested,
  editEmployeeRequested,
} from "app/exerciseL2/redux/Actions/EmployeeAction";
import {
  setDialogAction,
  setDialogCertificate,
} from "app/exerciseL2/redux/Actions/DialogAction";
import {
  getDistrictsByProvinceIdRequested,
  getProvincesRequested,
} from "app/exerciseL2/redux/Actions/ProvinceAction";
import { getWardsByDistrictIdRequested } from "app/exerciseL2/redux/Actions/DistrictAction";
import Certificates from "./Certificates";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

export default function EmployeeDialogSubmit(props) {
  const dispatch = useDispatch();
  const rowData = useSelector((state) => state.employee.employee);
  const listProvince = useSelector((state) => state.employee.listProvince);
  const listDistrict = useSelector((state) => state.employee.listDistrict);
  const listWard = useSelector((state) => state.employee.listWard);
  const dialogCertificate = useSelector(
    (state) => state.employee.dialogCertificate
  );

  console.log(listDistrict);

  useEffect(() => {
    // API Province
    dispatch(getProvincesRequested());

    // Em có call api huyện xã chỗ onChange nhưng khi ấn nút sửa: value huyện với xã nó không hiện nên em viết thêm đoạn này
    if (rowData?.id) {
      // call API Districts
      dispatch(getDistrictsByProvinceIdRequested(rowData.provinceId));
      // call API Wards
      dispatch(getWardsByDistrictIdRequested(rowData.districtId));
    }
  }, []);

  const handleChangeInput = (e) =>
    dispatch(
      setEmployeeAction({ ...rowData, [e.target.name]: e.target.value })
    );

  const handleChangeAddress = (name, id) => {
    switch (name) {
      case "provinceId":
        dispatch(
          setEmployeeAction({
            ...rowData,
            provinceId: id,
            districtId: "",
            wardsId: "",
          })
        );
        // call API Districts
        dispatch(getDistrictsByProvinceIdRequested(id));

        break;
      case "districtId":
        dispatch(setEmployeeAction({ ...rowData, districtId: id }));
        // call API Wards
        dispatch(getWardsByDistrictIdRequested(id));
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    rowData?.id
      ? dispatch(editEmployeeRequested(rowData))
      : dispatch(addEmployeeRequested(rowData));
  };

  const handleClose = () => {
    dispatch(setDialogAction(false));
    dispatch(setEmployeeAction({}));
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={props.open}
      onClose={handleClose}
    >
      <DialogTitle>
        {rowData.id ? "Sửa nhân viên" : "Thêm nhân viên"}
      </DialogTitle>
      <ValidatorForm onSubmit={handleOnSubmit}>
        <DialogContent>
          <Grid className="" container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tên
                  </span>
                }
                type="text"
                value={rowData.name || ""}
                name="name"
                size="small"
                validators={["required", "matchRegexp:^(?! )[^]+(?<! )$"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Đừng để dấu cách ở đầu và cuối dòng nhé",
                ]}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Mã
                  </span>
                }
                type="text"
                value={rowData.code || ""}
                name="code"
                size="small"
                validators={["required", "matchRegexp:^\\S{6,10}$"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Mã sai định dạng nè (phải không dấu 'cách' và độ dài 6-10 ký tự nhé)",
                ]}
                onChange={handleChangeInput}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tuổi
                  </span>
                }
                type="text"
                value={rowData.age || ""}
                name="age"
                size="small"
                validators={[
                  "required",
                  "isNumber",
                  "minNumber:1",
                  "maxNumber:150",
                ]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Chỉ nhận số thôi nè",
                  "Tuổi phải lớn hơn không nhé",
                  "Trên 150 tuổi thì hơi quá nha",
                ]}
                onChange={handleChangeInput}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Email
                  </span>
                }
                type="text"
                value={rowData.email || ""}
                name="email"
                size="small"
                validators={["required", "isEmail"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Email sai định dạng nè!!!",
                ]}
                onChange={handleChangeInput}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Số điện thoại
                  </span>
                }
                type="text"
                value={rowData.phone || ""}
                name="phone"
                size="small"
                validators={["required", "matchRegexp:^\\d{11}$"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Số điện thoại phải đủ 11 số nhé",
                ]}
                onChange={handleChangeInput}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <FormControl
                fullWidth
                variant="standard"
                size="small"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Tỉnh</span>}
                </InputLabel>
                <Select
                  value={rowData.provinceId || ""}
                  name="provinceId"
                  onChange={(e) =>
                    handleChangeAddress("provinceId", e.target.value)
                  }
                >
                  {listProvince &&
                    listProvince.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Huyện</span>}
                </InputLabel>
                <Select
                  value={rowData.districtId || ""}
                  name="districtId"
                  onChange={(e) =>
                    handleChangeAddress("districtId", e.target.value)
                  }
                >
                  {listDistrict &&
                    listDistrict.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Xã</span>}
                </InputLabel>
                <Select
                  value={rowData.wardsId || ""}
                  name="wardsId"
                  onChange={handleChangeInput}
                >
                  {listWard &&
                    listWard.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <div className="flex flex-space-between flex-middle mt-10">
            <Button
              variant="contained"
              className="mr-12"
              color="primary"
              onClick={() => dispatch(setDialogCertificate(true))}
            >
              Thêm chứng chỉ
            </Button>

            <Button
              variant="contained"
              className="mr-12"
              color="secondary"
              onClick={handleClose}
            >
              Hủy
            </Button>

            <Button
              type="submit"
              variant="contained"
              className="mr-12"
              color="primary"
            >
              {rowData.id ? "Sửa nhân viên" : "Thêm nhân viên"}
            </Button>
          </div>
        </DialogActions>
      </ValidatorForm>

      {dialogCertificate && (
        <Certificates dialogCertificate={dialogCertificate} />
      )}
    </Dialog>
  );
}
