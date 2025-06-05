import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import SidebarItem from "../sidebarItem/sidebarItem";
import peopleIcon from "/assets/people-icon.svg";
import profileIcon from "/assets/profile-icon.svg";
import "./mainLayout.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* user && <Navigate to="/login" /> */}
      <div className="full-body">
        <Sidebar>
          <SidebarItem
            name="Employee list"
            icon={peopleIcon}
            href="/employees"
          />
          <SidebarItem
            name="Profile"
            icon={profileIcon}
            href="/employees/profile"
          />
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
    </>
  );
};

export default MainLayout;
