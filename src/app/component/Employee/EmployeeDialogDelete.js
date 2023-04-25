import { ConfirmationDialog } from "egret";
import React from "react";

export default function EmployeeDialogDelete(props) {
  const { dialogDelete, setDialogDelete, handleDeleteEmployee } = props;

  return (
    <div>
      <ConfirmationDialog
        title={"Xác nhận xóa"}
        open={dialogDelete}
        onConfirmDialogClose={() => setDialogDelete(false)}
        onYesClick={handleDeleteEmployee}
        text={"Suy nghĩ lại đi mà"}
        Yes={"Xóa nè"}
        No={"Khum xóa nữa"}
      />
    </div>
  );
}
