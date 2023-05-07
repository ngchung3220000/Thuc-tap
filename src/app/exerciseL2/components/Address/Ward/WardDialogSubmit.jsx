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
import { setDialogAction } from "app/exerciseL2/redux/Actions/DialogAction";
import {
  addWardRequested,
  editWardRequested,
  setWard,
} from "app/exerciseL2/redux/Actions/WardAction";
import { getDistrictsRequested } from "app/exerciseL2/redux/Actions/DistrictAction";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

export default function WardDialogSubmit() {
  const dispatch = useDispatch();
  const dialogSubmit = useSelector((state) => state.employee.dialog);
  const listDistrict = useSelector((state) => state.employee.listDistrict);
  const ward = useSelector((state) => state.employee.ward);

  useEffect(() => {
    dispatch(getDistrictsRequested());
  }, []);

  const handleOnChange = (e) => {
    dispatch(setWard({ ...ward, [e.target.name]: e.target.value }));
  };

  const handleOnChangeDistrict = (e) => {
    dispatch(
      setWard({
        ...ward,
        districtDto: { ...ward.districtDto, id: e.target.value },
      })
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    ward.id
      ? dispatch(editWardRequested(ward))
      : dispatch(addWardRequested(ward));
  };

  const handleClose = () => {
    dispatch(setDialogAction(false));
    dispatch(setWard({}));
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={dialogSubmit}
      onClose={handleClose}
    >
      <DialogTitle>{ward.id ? "Sửa xã" : "Thêm xã"}</DialogTitle>
      <ValidatorForm onSubmit={handleOnSubmit}>
        <DialogContent>
          <Grid className="" container justifyContent="center" spacing={2}>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="standard"
                size="small"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Tên huyện</span>}
                </InputLabel>
                <Select
                  value={ward.districtDto?.id || ""}
                  name="districtDto"
                  onChange={handleOnChangeDistrict}
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

            <Grid item xs={6}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tên xã
                  </span>
                }
                type="text"
                value={ward.name || ""}
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

            <Grid item xs={6}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Mã xã
                  </span>
                }
                type="text"
                value={ward.code || ""}
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
            <Grid item xs={6}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Diện tích xã
                  </span>
                }
                type="text"
                value={ward.area || ""}
                name="area"
                size="small"
                validators={["required", "isNumber"]}
                errorMessages={["Đừng để trống nhé", "Diện tích là số"]}
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
              {ward.id ? "Sửa xã" : "Thêm xã"}
            </Button>
          </div>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
