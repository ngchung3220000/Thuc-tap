import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import { Breadcrumb } from "egret";
import { toast } from "react-toastify";
import EmployeeDialogSubmit from "./EmployeeDialogSubmit";
import DialogDelete from "../components/DialogDelete";
import {
  deleteEmployeeRequested,
  getEmployeesRequested,
  setEmployeeAction,
} from "../../redux/Actions/EmployeeAction";
import "react-toastify/dist/ReactToastify.css";
import {
  setDialogAction,
  setDialogDeleteAction,
} from "app/exerciseL2/redux/Actions/DialogAction";
import Certificates from "./Certificates";
import {
  getCertificates,
  getEmployeeCertificates,
} from "app/exerciseL2/api/CertificateServices";
import { getCertificatesRequested } from "app/exerciseL2/redux/Actions/CertificateAction";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function Employee() {
  const dispatch = useDispatch();
  const listEmployee = useSelector((state) => state.employee.listEmployee);
  const dialogSubmit = useSelector((state) => state.employee.dialog);
  const dialogDelete = useSelector((state) => state.employee.dialogDelete);
  const listCertificate = useSelector(
    (state) => state.employee.listCertificate
  );

  const [idEmployee, setIdEmployee] = useState();

  useEffect(() => {
    getEmployeeCertificates();
  }, []);

  useEffect(() => {
    dispatch(getEmployeesRequested());
  }, []);

  useEffect(() => {
    dispatch(getCertificatesRequested());
  }, []);

  const handleOpenDialogDelete = (id) => {
    setIdEmployee(id);
    dispatch(setDialogDeleteAction(true));
  };

  const handleDeleteEmployee = () => {
    dispatch(deleteEmployeeRequested(idEmployee));
  };

  const handleEditEmployee = (rowData) => {
    dispatch(setEmployeeAction(rowData));
    dispatch(setDialogAction(true));
  };

  const columns = [
    {
      title: "Thao tác",
      field: "action",
      render: (rowData) => {
        return (
          <div className="none_wrap">
            <IconButton
              size="small"
              onClick={() => handleEditEmployee(rowData)}
            >
              <Icon color="primary">edit</Icon>
            </IconButton>

            <IconButton
              size="small"
              onClick={() => handleOpenDialogDelete(rowData.id)}
            >
              <Icon style={{ color: "red", margin: "0px 0px 0px 10px" }}>
                delete
              </Icon>
            </IconButton>
          </div>
        );
      },
    },
    { title: "Tên", field: "name" },
    {
      title: "Chứng chỉ",
      field: "certificate",
      render: (rowData) => {
        return <p key={rowData.id}>{rowData.certificate}</p>;
      },
    },
    { title: "Mã", field: "code" },
    { title: "Tuổi", field: "age", width: "10%" },
    { title: "Email", field: "email", width: "100px" },
    { title: "Số điện thoại", field: "phone" },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Quản lý", path: "/" },
            { name: "Nhân viên" },
          ]}
        />
      </div>

      <Grid container spacing={2} justify="space-between">
        <Grid item xs={12}>
          <MaterialTable
            title={
              <Button
                className="align-bottom mr-16 mb-16"
                variant="contained"
                color="primary"
                style={{ top: "5px" }}
                onClick={() => dispatch(setDialogAction(true))}
              >
                Thêm nhân viên
              </Button>
            }
            data={listEmployee}
            columns={columns}
            options={{
              exportButton: true,
              exportAllData: true,
              headerStyle: {
                backgroundColor: "#358600",
                color: "#FFF",
              },
            }}
          />

          {dialogSubmit && <EmployeeDialogSubmit open={dialogSubmit} />}

          {dialogDelete && (
            <DialogDelete
              dialogDelete={dialogDelete}
              handleDelete={handleDeleteEmployee}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Employee;
