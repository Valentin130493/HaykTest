import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration } from "../components/Registration/Registration";
import LogIn from "../components/LogIn/LogIn";
import { ProductsPage } from "../pages/ProductsPage";
import { routs } from "./сonstants/сonstants";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routs.login} element={<LogIn />} />
        <Route path={routs.registration} element={<Registration />} />
        <Route path={routs.home} element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
