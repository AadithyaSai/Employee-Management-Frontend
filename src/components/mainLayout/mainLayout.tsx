import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import SidebarItem from "../sidebarItem/sidebarItem";
import peopleIcon from "/assets/icon.svg";
import "./mainLayout.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="full-body">
      <Sidebar>
        <SidebarItem name="Employee list" icon={peopleIcon} />
      </Sidebar>
      <div className="main-content">
        <Header />
        <>
          <div className="outlet-container">
            <Outlet />
          </div>
        </>
      </div>
    </div>
  );
};

export default MainLayout;
