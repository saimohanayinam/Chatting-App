import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../Sidebar/Firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
function Login() {
    const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
      }))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://icons.veryicon.com/png/o/business/business-icon-2/direction-5.png"
          alt=""
        />
        <div className="login_text">
          <h3>Sign in into Direction</h3>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
