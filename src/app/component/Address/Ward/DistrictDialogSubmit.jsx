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

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

export default function DistrictDialogSubmit(props) {
  // function call API handle edit and add employee

  return (
    <Dialog maxWidth="md" fullWidth={true} open={() => {}} onClose={() => {}}>
      <DialogTitle>Huyeen</DialogTitle>
      <ValidatorForm onSubmit={() => {}}>
        <DialogContent>
          <Grid className="" container justifyContent="center" spacing={2}>
            <Grid item md={4} sm={4} xs={2}>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Tỉnh</span>}
                </InputLabel>
                <Select value={""} name="provinceId" onChange={(e) => {}}>
                  {/* {listProvince &&
                    listProvince.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })} */}
                </Select>
              </FormControl>
            </Grid>

            <Grid item md={4} sm={4} xs={2}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tên
                  </span>
                }
                type="text"
                value={""}
                name="name"
                size="small"
                validators={["required", "matchRegexp:^(?! )[^]+(?<! )$"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Đừng để dấu cách ở đầu và cuối dòng nhé",
                ]}
                onChange={() => {}}
              />
            </Grid>

            <Grid item md={4} sm={4} xs={2}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Mã
                  </span>
                }
                type="text"
                value={""}
                name="code"
                size="small"
                validators={["required", "matchRegexp:^\\S{6,10}$"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Mã sai định dạng nè (phải không dấu 'cách' và độ dài 6-10 ký tự nhé)",
                ]}
                onChange={() => {}}
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
              onClick={() => {}}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="mr-12"
              color="primary"
            >
              "Thêm nhân viên"
            </Button>
          </div>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
