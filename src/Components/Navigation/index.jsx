import React, { useRef } from "react";
import {
    Route,
    Routes,
    useLocation,
    useNavigate
} from "react-router-dom";
import Login from "../../Pages/Login";
import AppLayout from "../Layout/Layout";
import SignUp from "../../Pages/SignUp";
import Home from "../../Pages/Home";

export const PATHS = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  HOME: "/home",
};

export const Title = {
  [PATHS.LOGIN]: "Login",
  [PATHS.SIGNUP]: "Sign Up", 
  [PATHS.HOME]: "HOME", 
};

const AppRouting = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const siteLayoutRef = useRef(null);

  let title = Title[location.pathname];
  let desc = Title[location.pathname];

  return (
    <Routes>
      <Route
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
        <Route path={PATHS.LOGIN} index element={<Login />} />
        <Route path={PATHS.SIGNUP} index element={<SignUp />} />
        <Route path={PATHS.HOME} index element={<Home />} />
      </Route>
    </Routes>
  );
};
export default AppRouting;
