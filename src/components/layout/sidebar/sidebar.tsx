import React, { useState } from "react";
import "./style.scss";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

type props = {
  show: boolean;
};
const Sidebar = ({ show }: props) => {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "scroll initial",
        position: "absolute",
        top: 0,
        left: 0,
        width: "120px",
      }}
      className={show ? "show" : "hide"}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="orange"
        className={""}
        breakpoint={0}
        toggled={false}
        minWidth={""}
        maxWidth={""}
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" className="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/tables" className="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/profile" className="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/analytics" className="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/hero404" target="_blank" className="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter /*style={{ textAlign: 'center' }}*/>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
