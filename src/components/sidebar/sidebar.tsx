import { Link, useNavigate } from "react-router-dom";
import kvLogo from "/assets/kv-logo.png";
import "./sidebar.css";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Button } from "..";

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  const [, setLoginToken] = useLocalStorage("token");
  const navigate = useNavigate();

  const logoutIcon = (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );

  const handleSignout = () => {
    setLoginToken("");
    navigate("/login");
  };

  return (
    <aside className="main-layout-aside">
      <div>
        <div>
          <Link className="logo-container" to="#">
            <img className="aside-logo" src={kvLogo} alt="Logo" />
          </Link>
        </div>
        <nav className="main-layout-aside-nav">{children}</nav>
      </div>
      <Button
        icon={logoutIcon}
        label="Sign Out"
        onClick={handleSignout}
        variants="outline full-width"
        className="main-layout-aside-signout"
      ></Button>
    </aside>
  );
};

export default Sidebar;
