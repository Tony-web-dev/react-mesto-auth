import useForm from "../../utils/useForm.js";

export default function Login({ handleLogin }) {
  const { values, errors, handleChange } = useForm();

  function onLogin(e) {
    e.preventDefault();
    handleLogin(values.password, values.email);
  }

  return (
    <section className="gate">
      <form className="gate__form" name="signin" onSubmit={onLogin}>
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
      </form>
    </section>
  );
}
