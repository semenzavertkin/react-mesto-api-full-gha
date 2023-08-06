import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(email, password);
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Регистрация</h2>
        <form
          action=""
          className="auth__form"
          name="register"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="auth__section">
            <input
              name="email"
              id="email-input"
              type="text"
              className="auth__input"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <span className="auth__error"></span>
          </div>
          <div className="auth__section">
            <input
              name="password"
              id="password-input"
              type="password"
              className="auth__input"
              placeholder="Пароль"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="auth__error"></span>
          </div>
          <button type="submit" className="auth__btn">
            Зарегистрироваться
          </button>

          <div>
            <span className="auth__text">Уже зарегистрированы? </span>
            <Link to="/sign-in" className="auth__link">
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
