import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import { Breadcrumb } from "egret";
import { toast } from "react-toastify";
import WardDialogSubmit from "./WardDialogSubmit";
import "react-toastify/dist/ReactToastify.css";
import DialogDelete from "../../components/DialogDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  setDialogAction,
  setDialogDeleteAction,
} from "app/exerciseL2/redux/Actions/DialogAction";
import {
  deleteWardRequested,
  getWardsRequested,
  setWard,
} from "app/exerciseL2/redux/Actions/WardAction";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function Ward() {
  const dispatch = useDispatch();
  const dialogSubmit = useSelector((state) => state.employee.dialog);
  const dialogDelete = useSelector((state) => state.employee.dialogDelete);
  const listWard = useSelector((state) => state.employee.listWard);

  const [idWard, setIdWard] = useState("");

  useEffect(() => {
    dispatch(getWardsRequested());
  }, []);

  const handleOpenDialogDelete = (id) => {
    dispatch(setDialogDeleteAction(true));
    setIdWard(id);
  };

  const handleEditDistrict = (rowData) => {
    dispatch(setWard(rowData));
    dispatch(setDialogAction(true));
  };

  const handleDeleteWard = () => {
    dispatch(deleteWardRequested(idWard));
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
              onClick={() => handleEditDistrict(rowData)}
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
    { title: "Tên xã", field: "name" },
    { title: "Mã xã", field: "code" },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[{ name: "Quản lý", path: "/" }, { name: "Xã" }]}
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
                Thêm xã
              </Button>
            }
            data={listWard}
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

          {dialogSubmit && <WardDialogSubmit />}

          {dialogDelete && (
            <DialogDelete
              dialogDelete={dialogDelete}
              handleDelete={handleDeleteWard}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Ward;
