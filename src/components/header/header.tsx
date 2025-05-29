import "./header.css";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const Header = () => {
  const [, setLoginToken] = useLocalStorage("isLoggedIn");
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
    setLoginToken("false");
    navigate("/login");
  };
  return (
    <header className="site-header">
      <div className="signout-div">
        <button
          className="signout-button"
          type="button"
          onClick={handleSignout}
        >
          <div className="logout-icon">{logoutIcon}</div>
          <p className="signout-text">Sign Out</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
