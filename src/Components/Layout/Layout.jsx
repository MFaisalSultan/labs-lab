import React from "react";
import { Image } from "react-bootstrap";
import { BiWallet } from "react-icons/bi";
import { FiHelpCircle, FiLayers } from "react-icons/fi";
import { GoTag } from "react-icons/go";
import { RiShoppingBagLine } from "react-icons/ri";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import user from "../../Assets/images/user.svg";
import { PATHS } from "../Navigation";
import styles from "./layout.module.scss";

const AppLayout = ({ siteLayoutRef, title, desc }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <Sidebar collapsed={collapsed} transitionDuration={800}>
        <div className="menu-container">
          <Menu>
            <h1 className="title">label lab</h1>
            <span className="label">Home</span>
            <MenuItem
              active={location.pathname === PATHS.DASHBOARD}
              component={<Link to={PATHS.DASHBOARD} />}
              icon={<FiLayers size={20} />}
            >
              Dashboard{" "}
            </MenuItem>
            <MenuItem
            active={location.pathname === PATHS.ORDERLABEL}
              component={<Link to={PATHS.ORDERLABEL} />}
              icon={<RiShoppingBagLine size={20} />}
            >
              Order Label
            </MenuItem>
            <MenuItem
            active={location.pathname === PATHS.ORDERS}
              component={<Link to={PATHS.ORDERS} />}
              icon={<GoTag size={20} />}
            >
              Orders
            </MenuItem>
          </Menu>
          <hr />
          <Menu>
            <span className="label">Misc</span>
            <MenuItem
            active={location.pathname === PATHS.DEPOSIT}
              component={<Link to={PATHS.DEPOSIT} />}
              icon={<BiWallet size={20} />}
            >
              Deposit
            </MenuItem>
            <MenuItem
              component={<Link to={PATHS.LOGIN} />}
              icon={<FiHelpCircle size={20} />}
            >
              Help
            </MenuItem>
          </Menu>
        </div>
        <div className="side-footer">
          <div className="avatar">
            <Image src={user} alt="user image" className="user-img" />
          </div>
          <div className="item">
            <h1>Admin</h1>
            <p>
              Balance: <span>$282.40</span>
            </p>
          </div>
        </div>
      </Sidebar>
      <div className={styles.container} ref={siteLayoutRef}>
        <div className={styles.header}>
          <TbLayoutSidebarLeftCollapseFilled
            className={styles.btn}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{desc}</p>
          </div>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
