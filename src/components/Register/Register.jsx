import useForm from "../../utils/useForm.js";
import { Link } from "react-router-dom";

export default function Register({ name, hangleRegister }) {
    const { values, errors, handleChange } = useForm();

    function onRegister(e) {
        e.preventDefault();
        hangleRegister(values.password, values.email);
    }

    return (
      <section className="gate">
        <form className="gate__form" name="signup" onSubmit={onRegister}>
          <h2 className="gate__title"></h2>
          <label className="gate__label">
            <input
              className="gate__input"
              name="email"
              type="email"
              placeholder={"Email"}
              value={values.email}
              onChange={handleChange}
              required
            />
            <span className="gate__error">{errors.email}</span>
          </label>
          <label className="gate__label">
            <input
              className="gate__input"
              name="password"
              type="password"
              placeholder={"Пароль"}
              minLength={5}
              value={values.password}
              onChange={handleChange}
              required
            />
            <span className="gate__error">{errors.password}</span>
          </label>
          {name === "signup" && 
          <p className="gate__subtitle">Уже зарегистрированы?
          <Link to={"/sign-in"} className="gate__subtitle-link">Войти</Link>
          </p>}
        </form>
      </section>
    );
}