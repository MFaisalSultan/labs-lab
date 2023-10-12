import React, { useRef } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Deposit from "../../Pages/Deposit";
import OrderLabel from "../../Pages/OrderLabel";
import Orders from "../../Pages/Orders";
import AppLayout from "../Layout/Layout";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import ResetPassword from "../../Pages/ResetPassword";

export const PATHS = {
  DASHBOARD: "/dashboard",
  ORDERLABEL: "/orderlabel",
  ORDERS: "/orders",
  DEPOSIT: "/deposit",
};

export const Title = {
  [PATHS.DASHBOARD]: "Dashboard", 
  [PATHS.ORDERLABEL]: "Order Label", 
  [PATHS.ORDERS]: "Orders",
  [PATHS.DEPOSIT]: "Deposit",
};
export const Desc = {
  [PATHS.DASHBOARD]: "Check your progress", 
  [PATHS.ORDERLABEL]: "Purchase Label Here", 
  [PATHS.ORDERS]: "View Past Orders Here",
  [PATHS.DEPOSIT]: "Deposit Money Here",
};

const AppRouting = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const siteLayoutRef = useRef(null);

  let title = Title[location.pathname];
  let desc = Desc[location.pathname];

  return (
    <Routes>
      {/* <Route
        path="/"
        element={
          <AppLayout
            siteLayoutRef={siteLayoutRef}
            title={title}
            desc={desc}
            navigate={navigate}
          />
        }
      >
        <Route path={PATHS.DASHBOARD} index element={<Dashboard />} />
        <Route path={PATHS.ORDERLABEL} index element={<OrderLabel />} />
        <Route path={PATHS.ORDERS} index element={<Orders />} />
        <Route path={PATHS.DEPOSIT} index element={<Deposit />} />
      </Route> */}
      <Route path='/' index element={<Login />} />
      <Route path='/signup' index element={<SignUp />} />
      <Route path='/reset-password' index element={<ResetPassword />} />
    </Routes>
  );
};
export default AppRouting;
