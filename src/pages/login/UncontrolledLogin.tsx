import "./UncontrolledLogin.css";
import { TextInputField } from "../../components";
import { useRef, useEffect } from "react";
import kvLogo from "/assets/kv-logo.png";
import kvLoginImg from "/assets/kv-login.jpeg";
import { Button } from "../../components";

export const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearButtonRef = useRef<HTMLButtonElement | null>(null);

  const clearUsername = () => {
    usernameRef.current!.value = "";
    updateClearButton("");
  };

  const updateClearButton = (val: string) => {
    if (!clearButtonRef.current) return;
    if (val.length === 0) {
      clearButtonRef.current.style.display = "none";
    } else {
      clearButtonRef.current.style.display = "block";
    }
  };

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form>
            <TextInputField
              placeholder="username"
              label="Username"
              variants="animated"
              ref={usernameRef}
              name="username"
              onChange={(e) => updateClearButton(e.target.value)}
              endAdornment={
                <button
                  type="button"
                  ref={clearButtonRef}
                  onClick={clearUsername}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    display: "none",
                  }}
                >
                  &times;
                </button>
              }
            />

            <TextInputField
              placeholder="password"
              variants="animated"
              name="password"
              label="Password"
            />

            <Button
              type="submit"
              className="login-button"
              label="Log in"
              variants="default full-width"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;
