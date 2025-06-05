import { Button, CheckBox, Loader } from "../../components";
import { TextInputField } from "../../components";
import kvLogo from "/assets/kv-logo.png";
import kvLoginAside from "/assets/kv-login.jpeg";
import "./login.css";
import { useEffect, useRef, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api-service/auth/login.api";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [login] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    loginError: "",
    usernameError: "",
    passwordError: "",
  });
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const [, setIsLoggedIn] = useLocalStorage("token", "");
  const [isPasswordShown, setIsPasswordShown] = useLocalStorage(
    "isPasswordShown",
    "false"
  );

  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    const payload = { email: username, password };
    login(payload)
      .unwrap()
      .then((res) => {
        setIsLoggedIn(res.accessToken);
        navigate("/employees");
      })
      .catch(() => {
        setValidationErrors((err) => ({
          ...err,
          loginError: "Invalid username or password",
        }));
      })
      .finally(() => setIsLoading(false));
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
    <>
      <Loader isVisible={isLoading} />
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
                name="username"
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
                  name="password"
                  type={isPasswordShown === "true" ? "text" : "password"}
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
                  checkedState={JSON.parse(isPasswordShown)}
                  onCheckedChange={() => {
                    setIsPasswordShown(
                      isPasswordShown === "false" ? "true" : "false"
                    );
                  }}
                />
              </div>
            </div>
            <Button
              label="Log In"
              onClick={handleLogin}
              variants="default full-width"
              disabled={Boolean(
                validationErrors.usernameError || validationErrors.passwordError
              )}
            />
            <p
              style={{
                marginLeft: "6px",
                color: validationErrors.loginError ? "red" : "green",
              }}
            >
              {validationErrors.loginError || ""}
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
