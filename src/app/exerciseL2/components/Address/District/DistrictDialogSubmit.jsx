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
import { getProvincesRequested } from "app/exerciseL2/redux/Actions/ProvinceAction";
import {
  addDistrictRequested,
  editDistrictRequested,
  setDistrict,
} from "app/exerciseL2/redux/Actions/DistrictAction";
import { setDialogAction } from "app/exerciseL2/redux/Actions/DialogAction";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

export default function DistrictDialogSubmit() {
  const dispatch = useDispatch();
  const dialogSubmit = useSelector((state) => state.employee.dialog);
  const listProvince = useSelector((state) => state.employee.listProvince);
  const district = useSelector((state) => state.employee.district);

  useEffect(() => {
    dispatch(getProvincesRequested());
  }, []);

  const handleOnChange = (e) => {
    dispatch(setDistrict({ ...district, [e.target.name]: e.target.value }));
  };

  const handleOnChangeProvince = (e) => {
    dispatch(
      setDistrict({
        ...district,
        provinceDto: { ...district.provinceDto, id: e.target.value },
      })
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    district.id
      ? dispatch(editDistrictRequested(district))
      : dispatch(addDistrictRequested(district));
  };

  const handleClose = () => {
    dispatch(setDialogAction(false));
    dispatch(setDistrict({}));
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={dialogSubmit}
      onClose={handleClose}
    >
      <DialogTitle>{district.id ? "Sửa huyện" : "Thêm huyện"}</DialogTitle>
      <ValidatorForm onSubmit={handleOnSubmit}>
        <DialogContent>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="standard"
                size="small"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Tên tỉnh</span>}
                </InputLabel>
                <Select
                  value={district.provinceDto?.id || ""}
                  name="provinceDto"
                  onChange={handleOnChangeProvince}
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

            <Grid item xs={6}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tên huyện
                  </span>
                }
                type="text"
                value={district.name || ""}
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
                    Mã huyện
                  </span>
                }
                type="text"
                value={district.code || ""}
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
                    Diện tích huyện
                  </span>
                }
                type="text"
                value={district.area || ""}
                name="area"
                size="small"
                validators={["required", "isNumber"]}
                errorMessages={["Đừng để trống nhé", "Là số nhé"]}
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
              {district.id ? "Sửa huyện" : "Thêm huyện"}
            </Button>
          </div>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
