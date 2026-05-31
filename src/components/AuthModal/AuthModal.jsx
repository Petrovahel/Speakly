import css from "./AuthModal.module.css";
import { useState } from "react";
import { registerUser, loginUser } from "../../services/authApi";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

export default function AuthModal({ mode, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const modalRoot = document.getElementById("modal-root");
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "register") {
        await registerUser(email, password);

        toast.success("Registration successful!");
      } else {
        await loginUser(email, password);

        toast.success("Login successful!");
      }

      onClose();
    } catch (error) {
      console.error(error);

      toast.error(error.message);
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          <IoClose />
        </button>

        {mode === "login" ? (
          <>
            <h2 className={css.modalTitle}>Log In</h2>

            <p className={css.modalText}>
              Welcome back! Please enter your credentials to access your account
              and continue your search for a teacher.
            </p>

            <form className={css.authForm} onSubmit={handleSubmit}>
              <input
                className={css.authInput}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className={css.passwordWrapper}>
                <input
                  className={css.authInput}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className={css.eyeBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FiEyeOff />
                </button>
              </div>

              <button className={css.authBtn} type="submit">
                Log In
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className={css.modalTitle}>Registration</h2>

            <p className={css.modalText}>
              Thank you for your interest in our platform! In order to register,
              we need some information.
            </p>

            <form className={css.authForm} onSubmit={handleSubmit}>
              <input
                className={css.authInput}
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className={css.authInput}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className={css.passwordWrapper}>
                <input
                  className={css.authInput}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className={css.eyeBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FiEyeOff />
                </button>
              </div>

              <button className={css.authBtn} type="submit">
                Sign Up
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    modalRoot,
  );
}
