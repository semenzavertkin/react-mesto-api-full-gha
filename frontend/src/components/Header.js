import logo from "../images/logo.svg";
import { Link, Routes, Route } from "react-router-dom";

function Header({ onSignOut, userEmail }) {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo" />
      <Routes>
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          }
        />

        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        />

        <Route
          path="/"
          element={
            <div className="header__container">
              <p className="header__email">{userEmail}</p>
              <Link to="/sign-in" className="header__exit" onClick={onSignOut}>
                Выйти
              </Link>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
