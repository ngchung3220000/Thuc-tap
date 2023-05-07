import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import { Breadcrumb } from "egret";
import { toast } from "react-toastify";
import ProvinceDialogSubmit from "./ProvinceDialogSubmit";
import "react-toastify/dist/ReactToastify.css";
import DialogDelete from "../../components/DialogDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  setDialogAction,
  setDialogDeleteAction,
} from "app/exerciseL2/redux/Actions/DialogAction";
import {
  deleteProvinceRequested,
  getProvincesRequested,
  setProvince,
} from "app/exerciseL2/redux/Actions/ProvinceAction";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function Province() {
  const dispatch = useDispatch();
  const listProvince = useSelector((state) => state.employee.listProvince);
  const dialogSubmit = useSelector((state) => state.employee.dialog);
  const dialogDelete = useSelector((state) => state.employee.dialogDelete);

  const [idProvince, setIdProvince] = useState("");

  useEffect(() => {
    dispatch(getProvincesRequested());
  }, []);

  const handleOpenDialogDelete = (id) => {
    dispatch(setDialogDeleteAction(true));
    setIdProvince(id);
  };

  const handleEditProvince = (rowData) => {
    dispatch(setProvince(rowData));
    dispatch(setDialogAction(true));
  };

  const handleDeleteProvince = () => {
    dispatch(deleteProvinceRequested(idProvince));
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
              onClick={() => handleEditProvince(rowData)}
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
    { title: "Tên Tỉnh", field: "name" },
    { title: "Mã Tỉnh", field: "code" },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[{ name: "Quản lý", path: "/" }, { name: "Tỉnh" }]}
        />
      </div>

      <Grid container>
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
                Thêm tỉnh
              </Button>
            }
            data={listProvince}
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

          {dialogSubmit && <ProvinceDialogSubmit />}

          {dialogDelete && (
            <DialogDelete
              dialogDelete={dialogDelete}
              handleDelete={handleDeleteProvince}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Province;
