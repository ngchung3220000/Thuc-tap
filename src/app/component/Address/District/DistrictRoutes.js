import { EgretLoadable } from "egret";
import ConstantList from "../../../appConfig";
import { useTranslation, withTranslation, Trans } from "react-i18next";
const District = EgretLoadable({
  loader: () => import("./District"),
});
const ViewComponent = withTranslation()(District);
const DistrictRoutes = [
  {
    path: ConstantList.ROOT_PATH + "list/district",
    exact: true,
    component: ViewComponent,
  },
];

export default DistrictRoutes;
