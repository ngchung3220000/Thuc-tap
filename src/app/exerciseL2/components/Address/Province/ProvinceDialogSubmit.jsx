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
import { setDialogAction } from "app/exerciseL2/redux/Actions/DialogAction";
import { useDispatch, useSelector } from "react-redux";
import {
  addProvinceRequested,
  editProvinceRequested,
  setProvince,
} from "app/exerciseL2/redux/Actions/ProvinceAction";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

export default function ProvinceDialogSubmit() {
  const dispatch = useDispatch();
  const dialogSubmit = useSelector((state) => state.employee.dialog);
  const province = useSelector((state) => state.employee.province);
  console.log(province);

  const handleOnChange = (e) => {
    dispatch(setProvince({ ...province, [e.target.name]: e.target.value }));
  };

  const handleOnSumbit = (e) => {
    e.preventDefault();
    province.id
      ? dispatch(editProvinceRequested(province))
      : dispatch(addProvinceRequested(province));
  };

  const handleClose = () => {
    dispatch(setDialogAction(false));
    dispatch(setProvince({}));
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={dialogSubmit}
      onClose={handleClose}
    >
      <DialogTitle>{province.id ? "Sửa tỉnh" : "Thêm tỉnh"}</DialogTitle>
      <ValidatorForm onSubmit={handleOnSumbit}>
        <DialogContent>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={4}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tên tỉnh
                  </span>
                }
                type="text"
                value={province.name || ""}
                name="name"
                size="small"
                validators={["required", "matchRegexp:^(?! )[^]+(?<! )$"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Đừng để dấu cách ở đầu và cuối dòng nhé",
                ]}
                onChange={handleOnChange}
              />
            </Grid>

            <Grid item xs={4}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Mã tỉnh
                  </span>
                }
                type="text"
                value={province.code || ""}
                name="code"
                size="small"
                validators={["required", "matchRegexp:^\\S{6,10}$"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Mã sai định dạng nè (phải không dấu 'cách' và độ dài 6-10 ký tự nhé)",
                ]}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Diện tích tỉnh
                  </span>
                }
                type="text"
                value={province.area || ""}
                name="area"
                size="small"
                validators={["required", "isNumber"]}
                errorMessages={["Đừng để trống nhé", "Phải là số"]}
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <div className="flex flex-space-between flex-middle mt-10">
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
              {province.id ? "Sửa tỉnh" : "Thêm tỉnh"}
            </Button>
          </div>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
