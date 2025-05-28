import { Button, CheckBox } from "../../components";
import { TextInputField } from "../../components";
import kvLogo from "/assets/kv-logo.png";
import kvLoginAside from "/assets/kv-login.jpeg";
import "./Login.css";
import { useEffect, useRef, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    usernameError: "",
    passwordError: "",
  });
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const localStorage = useLocalStorage();
  const [isPasswordShown, setIsPasswordShown] = useState(
    Boolean(localStorage.get("showPassword"))
  );

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.set("isLoggedIn", "true");
      console.log("logged in");
      navigate("/employees");
    }
  };

  useEffect(() => {
    if (!username) {
      setValidationErrors((err) => {
        return { ...err, usernameError: "Username is required" };
      });
    } else {
      setValidationErrors((err) => {
        return { ...err, usernameError: "" };
      });
    }
    if (!password) {
      setValidationErrors((err) => {
        return { ...err, passwordError: "Password is required" };
      });
    } else if (password.length < 8) {
      setValidationErrors((err) => {
        return { ...err, passwordError: "Password is too short" };
      });
    } else {
      setValidationErrors((err) => {
        return { ...err, passwordError: "" };
      });
    }
  }, [username, password]);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  return (
    <div className="login-content">
      <aside className="login-aside">
        <img
          className="circle-img"
          src={kvLoginAside}
          alt="stock image for login"
        />
      </aside>

      <main className="login-main">
        <div className="login-form-content">
          <div className="logo-div">
            <a href="#">
              <img className="logo" src={kvLogo} alt="logo" />
            </a>
          </div>
          <div>
            <TextInputField
              placeholder="Username"
              label="Username"
              variants="animated"
              value={username}
              ref={usernameRef}
              onChange={(e) => setUsername(e.target.value)}
              endAdornment={
                <button
                  type="button"
                  onClick={() => setUsername("")}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    display: username.length === 0 ? "none" : "block",
                  }}
                >
                  &times;
                </button>
              }
            />
            <p
              style={{
                marginLeft: "6px",
                color: validationErrors.usernameError ? "red" : "green",
              }}
            >
              {validationErrors.usernameError || "Valid username"}
            </p>
          </div>
          <div>
            <div style={{ marginBottom: "12px" }}>
              <TextInputField
                placeholder="Password"
                label="Password"
                type={isPasswordShown ? "text" : "password"}
                variants="animated"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p
                style={{
                  marginLeft: "6px",
                  color: validationErrors.passwordError ? "red" : "green",
                }}
              >
                {validationErrors.passwordError || "Valid password"}
              </p>
            </div>
            <div style={{ marginLeft: "3px" }}>
              <CheckBox
                label="Show password"
                name="show-password"
                checkedState={isPasswordShown}
                onCheckedChange={() => {
                  setIsPasswordShown((oldVal) => {
                    localStorage.set("showPassword", String(!oldVal));
                    return !oldVal;
                  });
                }}
              />
            </div>
          </div>
          <Button
            label="Log In"
            onClick={handleLogin}
            variants="default full-width"
            disabled={Object.values(validationErrors).some(
              (v) => v.length != 0
            )}
          />
        </div>
      </main>
    </div>
  );
};

export default Login;
