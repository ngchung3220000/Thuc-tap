import { EgretLoadable } from "egret";
import ConstantList from "../../../appConfig";
import { useTranslation, withTranslation, Trans } from "react-i18next";
const Province = EgretLoadable({
  loader: () => import("./Province"),
});
const ViewComponent = withTranslation()(Province);
const ProvinceRoutes = [
  {
    path: ConstantList.ROOT_PATH + "list/province",
    exact: true,
    component: ViewComponent,
  },
];

export default ProvinceRoutes;
