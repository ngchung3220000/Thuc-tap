import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { setDialogCertificate } from "app/exerciseL2/redux/Actions/DialogAction";

export default function Certificates(props) {
  const dipatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState();

  const convertDateToArray = (str) => {
    var date = new Date(str);
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  };

  console.log(convertDateToArray(selectedDate));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={props.dialogCertificate}
      onClose={() => dipatch(setDialogCertificate(false))}
    >
      <DialogTitle>Thêm chứng chỉ</DialogTitle>
      <ValidatorForm onSubmit={() => {}}>
        <DialogContent>
          <Grid className="" container justifyContent="center" spacing={2}>
            <Grid item xs={6}>
              <TextValidator
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tên văn bằng
                  </span>
                }
                type="name"
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

            <Grid item xs={6}>
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

            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className="w-100"
                  size="small"
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  label="Ngày cấp"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className="w-100"
                  size="small"
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  label="Ngày hết hạn"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <div className="flex flex-space-between flex-middle mt-10">
            <Button
              variant="contained"
              className="mr-12"
              color="secondary"
              onClick={() => dipatch(setDialogCertificate(false))}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="mr-12"
              color="primary"
            >
              Thêm chứng chỉ
            </Button>
          </div>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
