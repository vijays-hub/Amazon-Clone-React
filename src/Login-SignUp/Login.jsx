import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Login-SignUp/Login.css";
import { auth } from "../firebase/index";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          alert("Signed In");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);

        if (err.code === "auth/user-not-found") {
          alert(
            "Account Doesn't Exists! Click on 'Create Your Amazon Account' button to create an account with these credentials."
          );
          // history.push("/sign-up");
        } else {
          alert(err.message);
        }
      });
  };

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login__img"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
            disabled={email.length === 0 || password.length === 0}
          >
            {" "}
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's{" "}
          <span style={{ color: "blue" }}>Conditions of Use</span> and{" "}
          <span style={{ color: "blue" }}>Privacy Notice</span>.
        </p>
        <br />
        <p className="login__newUser">
          <span>New to Amazon?</span>
        </p>
        {/* <Link to="/sign-up">
          <button className="login__registerButton">
            <span> Create Your Amazon Account</span>
          </button>
        </Link> */}
        <button className="login__registerButton" onClick={signUp}>
          <span> Create Your Amazon Account</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
