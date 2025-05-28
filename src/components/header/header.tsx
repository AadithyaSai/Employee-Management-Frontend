import kvLogo from "/assets/kv-logo.png";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const Header = () => {
  const localStorage = useLocalStorage();
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.set("loggedIn", "false");
    navigate("/login");
  };
  return (
    <header className="site-header">
      <div>
        <Link className="header-item" to="#">
          <img className="site-logo" src={kvLogo} alt="Logo" />
        </Link>
      </div>
      <div className="signout-div">
        <button
          className="signout-button"
          type="button"
          onClick={handleSignout}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
