import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import { Breadcrumb } from "egret";
import { toast } from "react-toastify";
import DistrictDialogSubmit from "./DistrictDialogSubmit";
import DistrictDialogDelete from "./DistrictDialogDelete";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function Province() {
  const [dialog, setDialog] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);

  const columns = [
    {
      title: "Thao tác",
      field: "action",
      render: (rowData) => {
        return (
          <div className="none_wrap">
            <IconButton size="small" onClick={() => {}}>
              <Icon color="primary">edit</Icon>
            </IconButton>

            <IconButton size="small" onClick={() => {}}>
              <Icon style={{ color: "red", margin: "0px 0px 0px 10px" }}>
                delete
              </Icon>
            </IconButton>
          </div>
        );
      },
    },
    { title: "Tên Huyện", field: "name" },
    { title: "Mã Huyện", field: "code" },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[{ name: "Quản lý", path: "/" }, { name: "Huyện" }]}
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
                Thêm huyện
              </Button>
            }
            data={[{ id: 1, name: "Chung", code: "222222" }]}
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

          {dialog && <DistrictDialogSubmit />}

          {dialogDelete && (
            <DistrictDialogDelete
              dialogDelete={dialogDelete}
              setDialogDelete={setDialogDelete}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Province;
