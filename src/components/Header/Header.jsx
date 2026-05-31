import css from "./Header.module.css";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import AuthModal from "../AuthModal/AuthModal";
import { useAuth } from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [mode, setMode] = useState("login");

  const { user } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className={css.header}>
      <NavLink className={css.logo} to="/">
        <img
          src="/ukraine.svg"
          alt="LearnLingo Logo"
          className={css.logoImage}
        />
        LearnLingo
      </NavLink>

      <ul className={css.nav}>
        <li className={css.navItem}>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className={css.navItem}>
          <NavLink to="/teachers">Teachers</NavLink>
        </li>

        {user && (
          <li className={css.navItem}>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        )}
      </ul>

      {!user ? (
        <div className={css.authButtons}>
          <button
            className={css.loginBtn}
            onClick={() => {
              setMode("login");
              setIsAuthOpen(true);
            }}
          >
            <FiLogIn className={css.icon} />
            Log in
          </button>

          <button
            className={css.registerBtn}
            onClick={() => {
              setMode("register");
              setIsAuthOpen(true);
            }}
          >
            Registration
          </button>
        </div>
      ) : (
        <button className={css.authButtons} onClick={handleLogout}>
          <FiLogOut className={css.icon} />
          Log out
        </button>
      )}

      {isAuthOpen && (
        <AuthModal mode={mode} onClose={() => setIsAuthOpen(false)} />
      )}
    </header>
  );
}
