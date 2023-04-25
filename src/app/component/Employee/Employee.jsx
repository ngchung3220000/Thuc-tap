import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import { Breadcrumb } from "egret";
import { toast } from "react-toastify";
import EmployeeDialogSubmit from "./EmployeeDialogSubmit";
import EmployeeDialogDelete from "./EmployeeDialogDelete";
import { deleteEmployee, getEmployees } from "./EmployeeServices";
import { SUCCESS } from "./constants";
import "react-toastify/dist/ReactToastify.css";
import { getAllEmployees } from "../redux/Slices/employeeSlice";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function Employee() {
  const disPatch = useDispatch();
  const [listEmployee, setListEmployee] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);
  const [idEmployee, setIdEmployee] = useState();
  const [rowData, setRowData] = useState({});

  useEffect(() => {
    getEmployees()
      .then((res) => {
        if (res?.data?.code === SUCCESS) {
          setListEmployee(res?.data?.data);
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch(() => toast.error("Lỗi gì nè!!!"));
  }, [reloadData]);

  const handleOpenDialogDelete = (id) => {
    disPatch(getAllEmployees(id));
    setIdEmployee(id);
    setDialogDelete(true);
  };

  const handleDeleteEmployee = () => {
    deleteEmployee(idEmployee)
      .then((res) => {
        if (res?.data?.code === SUCCESS) {
          setReloadData(!reloadData);
          toast.success("Xóa thành công nè!");
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch(() => {
        toast.error("Khum xóa được nè");
      });
    setDialogDelete(false);
  };

  const handleEditEmployee = (rowData) => {
    setRowData(rowData);
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
    setReloadData(!reloadData);
    setRowData({});
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
                onClick={() => setDialog(true)}
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

          {dialog && (
            <EmployeeDialogSubmit
              rowData={rowData}
              setRowData={setRowData}
              open={dialog}
              close={handleClose}
            />
          )}

          {dialogDelete && (
            <EmployeeDialogDelete
              dialogDelete={dialogDelete}
              setDialogDelete={setDialogDelete}
              handleDeleteEmployee={handleDeleteEmployee}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Employee;
