import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div class="login-container">
        <form action="" class="form-login">
          <ul class="login-nav">
            <li class="login-nav__item active">
              <a href="javascript:void(0)">Sign In</a>
            </li>
            <li class="login-nav__item">
              <a href="javascript:void(0)">Sign Up</a>
            </li>
          </ul>
          <label for="login-input-user" class="login__label">
            Username
          </label>
          <input
            id="login-input-user"
            class="login__input"
            type="text"
            placeholder="username"
          />
          <label for="login-input-password" class="login__label">
            Password
          </label>
          <input
            id="login-input-password"
            class="login__input"
            type="password"
          />
          <label for="login-sign-up" class="login__label--checkbox">
            <input
              id="login-sign-up"
              type="checkbox"
              class="login__input--checkbox"
            />
            Keep me Signed in
          </label>
          <button class="login__submit" disabled>
            Sign in
          </button>
        </form>
        <a href="javascript:void(0)" class="login__forgot">
          Forgot Password?
        </a>
      </div>
    );
  }
}

export default Login;
