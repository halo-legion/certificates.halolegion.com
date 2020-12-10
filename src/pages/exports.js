import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Certificate = lazy(() => import("./Certificate/Certificate"));

export { Home, Certificate };
