import "./style.scss";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

type props = {
  show: boolean;
  handleClose: () => void;
};
const Sidebar = ({ show, handleClose }: props) => {
  return (
    <div
      style={{
        height: "80vh",
        overflow: "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "320px",
      }}
      className={show ? "" : "hide"}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="rgb(255, 115, 35)"
        className={""}
        breakpoint={0}
        toggled={false}
        minWidth={""}
        maxWidth={""}
      >
        <CDBSidebarHeader
          //"fa fa-bars fa-large"
          prefix={<i className="fa fa-bars" onClick={handleClose}></i>}
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Home
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/institucional/graduacao" className="activeClicked">
              <CDBSidebarMenuItem icon="book">Graduação</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/institucional/posgraduacao" className="activeClicked">
              <CDBSidebarMenuItem icon="table">
                Pos-graduação
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/institucional/unidades" className="activeClicked">
              <CDBSidebarMenuItem icon="building">Unidades</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/institucional/infraestrutura"
              className="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Infraestrutura
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

{
  /*<div
      style={{
        height: "80vh",
        overflow: "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "285px",
      }}
      className={show ? "" : "hide"}
    >*/
}
