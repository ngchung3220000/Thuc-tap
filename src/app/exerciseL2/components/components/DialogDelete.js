import { setDialogDeleteAction } from "app/exerciseL2/redux/Actions/DialogAction";
import { ConfirmationDialog } from "egret";
import React from "react";
import { useDispatch } from "react-redux";

export default function DialogDelete(props) {
  const disPatch = useDispatch();
  const { dialogDelete, handleDelete } = props;

  return (
    <div>
      <ConfirmationDialog
        title={"Xác nhận xóa"}
        open={dialogDelete}
        onConfirmDialogClose={() => disPatch(setDialogDeleteAction(false))}
        onYesClick={handleDelete}
        text={"Bạn có chắc chắn muốn xóa không?"}
        Yes={"Xóa"}
        No={"Hủy"}
      />
    </div>
  );
}
