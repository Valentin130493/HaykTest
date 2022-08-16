import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "../components/Registration/Registration";
import { ProductsPage } from "../pages/ProductsPage";
import { routs } from "../constants/routs";
import { LoginPage } from "../pages/LoginPage";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routs.login} element={<LoginPage />} />
        <Route path={routs.registration} element={<Registration />} />
        <Route path={routs.home} element={<ProductsPage />} />
      </Routes>
    </Router>
  );
};
