import ConstantList from "./appConfig";
export const navigations = [
  {
    name: "Dashboard.dashboard",
    icon: "dashboard",
    path: ConstantList.ROOT_PATH + "dashboard/analytics",
    isVisible: true,
  },
  {
    name: "Dashboard.category",
    icon: "dashboard",
    path: "",
    isVisible: true,
    children: [
      {
        name: "Dashboard.category",
        path: ConstantList.ROOT_PATH + "directory/category",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
      {
        name: "Dashboard.timeshet",
        path: ConstantList.ROOT_PATH + "directory/timesheet",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
    ],
  },
  {
    name: "Dashboard.manage",
    isVisible: true,
    icon: "engineering",
    children: [
      {
        name: "manage.employee",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "list/employee",
        icon: "keyboard_arrow_right",
      },
      {
        name: "manage.province",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "list/province",
        icon: "keyboard_arrow_right",
      },
      {
        name: "manage.district",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "list/district",
        icon: "keyboard_arrow_right",
      },
      {
        name: "manage.ward",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "list/ward",
        icon: "keyboard_arrow_right",
      },
    ],
  },
];
