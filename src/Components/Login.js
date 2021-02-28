import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "../styles/Login.css";


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        history.push("/");
      }
    })
    .catch((error)=> alert(error.message))
  };

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="wrapper">
      <div className="login">
        <Link to="/">
          <img
            src="http://www.theinternetretailer.co.uk/wp-content/uploads/2019/06/1280px-Amazon_logo.svg_.png"
            alt=""
          />
        </Link>
        <div className="login__signInBox">
          <h1>Sign-In</h1>
          <form onSubmit={signIn} className="login__form">
            <label for="email">Email (phone for mobile accounts)</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label for="password">
              Password{" "}
              <a
                href="/login"
                className="login__forgotPassword login__conditions"
              >
                Forgot your password?
              </a>
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="login__button" type="submit">
              Sign-in
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's{" "}
            <a href="/login" className="login__conditions">
              Conditions of Use{" "}
            </a>
            and <span>Privacy Notes</span>
          </p>
          <div className="login__conditions__input">
            <input type="checkbox" name="checkbox" value="" />
            <label for="checkbox">
              <span>Keep me signed in. </span>{" "}
              <a href="/login" className="login__conditions">
                Details.
              </a>
            </label>
          </div>
          <div className="login__hrLine">
            <hr className="login__hrOne" />
            <span>New to Amazon</span> <hr className="login__hrTwo" />
          </div>

          <button onClick={register} className="login__newAccountButton">
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
