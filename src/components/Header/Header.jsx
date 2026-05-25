import css from "./Header.module.css";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
  return (
    <header className={css.header}>
      <a className={css.logo} href="/">
        LearnLingo
      </a>
      <ul className={css.nav}>
        <li>
          <a className={css.navLink} href="/">
            Home
          </a>
        </li>
        <li>
          <a className={css.navLink} href="/">
            Teachers
          </a>
        </li>
      </ul>
      <button className={css.login}>
        <FiLogIn />
        Log in
      </button>
      <button className={css.register}>Registration</button>
    </header>
  );
}
