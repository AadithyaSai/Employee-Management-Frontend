import { Link } from "react-router-dom";
import kvLogo from "/assets/kv-logo.png";
import "./sidebar.css";

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className="main-layout-aside">
      <div>
        <Link className="logo-container" to="#">
          <img className="aside-logo" src={kvLogo} alt="Logo" />
        </Link>
      </div>
      <nav className="main-layout-aside-nav">{children}</nav>
    </aside>
  );
};

export default Sidebar;
