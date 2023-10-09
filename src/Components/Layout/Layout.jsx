import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Button } from "react-bootstrap";
import { PATHS } from "../Navigation";

const AppLayout = ({ siteLayoutRef, title, desc }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div className="d-flex">
      <Sidebar collapsed={collapsed} >
        <Menu>
          <SubMenu label="Charts">
            <MenuItem component={<Link to="/login" />}> Login </MenuItem>
            <MenuItem component={<Link to="/signup" />}> SignUp </MenuItem>
          </SubMenu>
            <MenuItem component={<Link to={PATHS.LOGIN} />}> Login </MenuItem>
            <MenuItem component={<Link to={PATHS.SIGNUP} />}> SignUp </MenuItem>
          <MenuItem component={<Link to={PATHS.HOME} />}> Home </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      <div className="site-layout-background w-max" ref={siteLayoutRef}>
        <div>
          <h1 className="text-4xxl font-600">{title}</h1>
          <p className="text-lg font-500">{desc}</p>
          <Button onClick={() => setCollapsed(!collapsed)}>  collaped</Button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
