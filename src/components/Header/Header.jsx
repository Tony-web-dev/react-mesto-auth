import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Header({ name, loggedUser }) {
  
  function onSignOut() {
    localStorage.removeItem("jwt");
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className="header__loginbox">
        {name === "signup" || name === "signin" ? 
          <Link to={name === "signup" ? "/sign-in" : "/sign-up"} className="header__link">
            {name !== "signup" ? "Регистрация" : "Войти"}
          </Link>
         : 
          <>
            <p className="header__logged">{loggedUser}</p>
            <Link to={`/sign-in`} className="header__link" onClick={onSignOut}>
              Выйти
            </Link>
          </>
        }
      </div>
    </header>
  );
}
