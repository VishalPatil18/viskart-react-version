import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  useAuth,
  useAuthModal,
  useCart,
  useLoader,
  useWishlist,
} from "../../context";
import {
  loginHandler,
  signupHandler,
  inputHandler,
  validateLoginUser,
  validateSignupUser,
} from "../../utilities";
import { ICONS_URL } from "../../constants";
import styles from "./AuthModal.module.css";

const dummyUser = {
  email: "bablutailor@gmail.com",
  password: "babluTailor123",
};

const AuthModal = () => {
  const { authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const { setLoader } = useLoader();
  const { authModalState, authModalHandler } = useAuthModal();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [signup, setSignup] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const guestLoginHandler = (e) => {
    e.preventDefault();
    setLogin(dummyUser);
  };

  return (
    <>
      <div className={`modal__container ${styles.modalContainer}`}>
        {authModalState.login ? (
          <form
            className="modal mdl__icons mdl-primary"
            onSubmit={(event) => {
              event.preventDefault();
              const validation = validateLoginUser(login);
              if (validation === true) {
                loginHandler(
                  event,
                  login,
                  authDispatch,
                  cartDispatch,
                  wishlistDispatch,
                  authModalHandler,
                  setLoader,
                  navigate
                );
              } else {
                setLogin((prevState) => ({
                  ...prevState,
                  password: "",
                }));
                toast.warning(validation);
              }
            }}
          >
            <header className="modal__title">
              <h1 className="h-5">Login</h1>
              <button
                className="button btn-action btn-plain-icon modal__title--close"
                onClick={() => authModalHandler("CLOSE")}
              >
                <img
                  className="icon-light icon-lg button__icon"
                  src={`${ICONS_URL}/close.svg`}
                  loading="lazy"
                  alt="close"
                />
              </button>
            </header>
            <main className="modal__body">
              <div className="input input__icons input__premium">
                <div className="input__email">
                  <input
                    className="input__field--text email"
                    type="email"
                    value={login.email}
                    placeholder="bablu_tailor@gmail.com"
                    onChange={(event) => inputHandler(event, "email", setLogin)}
                  />
                  <label className="input__label">Email</label>
                </div>

                <div className="input__password">
                  <input
                    className="input__field--text password"
                    type={isPasswordVisible ? "text" : "password"}
                    value={login.password}
                    placeholder="********"
                    onChange={(event) =>
                      inputHandler(event, "password", setLogin)
                    }
                  />
                  <img
                    className={`icon-md button__icon ${styles.showPwrdBtn}`}
                    src={`${ICONS_URL}/${
                      isPasswordVisible ? "eye-slash-solid" : "eye-solid"
                    }.svg`}
                    loading="lazy"
                    alt="close"
                    onClick={() =>
                      setIsPasswordVisible((prevState) => !prevState)
                    }
                  />
                  <label className="input__label">Password</label>
                </div>
              </div>
              <div
                className={`remember-me__container ${styles.rememberMeContainer}`}
              >
                <div className="checkbox">
                  <label className="radio__label" htmlFor="remember-me">
                    <input
                      className="input__field--checkbox"
                      id="remember-me"
                      type="checkbox"
                      value={login.rememberMe}
                      onChange={() =>
                        setLogin((prevState) => ({
                          ...prevState,
                          rememberMe: !prevState.rememberMe,
                        }))
                      }
                    />
                    Remember me!
                  </label>
                </div>
              </div>
            </main>
            <footer className="modal__footer">
              <button
                className={`button btn-plain btn-primary ${styles.guestLogin}`}
                onClick={guestLoginHandler}
              >
                Guest Login
              </button>
              <input
                className="button btn-solid-primary modal__footer--btn"
                value="login"
                type="submit"
              />
              <button
                className="button btn-outline-primary modal__footer--btn"
                onClick={() => authModalHandler("SIGNUP")}
              >
                Sign Up
              </button>
            </footer>
          </form>
        ) : (
          <form
            className="modal mdl__icons mdl-primary"
            onSubmit={(event) => {
              event.preventDefault();
              const signupValidation = validateSignupUser(signup);
              if (signupValidation === true) {
                signupHandler(
                  event,
                  signup,
                  authDispatch,
                  authModalHandler,
                  setLoader,
                  navigate
                );
              } else {
                setSignup((prevState) => ({
                  ...prevState,
                  password: "",
                  confirmPassword: "",
                }));
                toast.warning(signupValidation);
              }
            }}
          >
            <header className="modal__title">
              <h1 className="h-5">Sign Up</h1>
              <button
                className="button btn-action btn-plain-icon modal__title--close"
                onClick={() => authModalHandler("CLOSE")}
              >
                <img
                  className="icon-light icon-lg button__icon"
                  src={`${ICONS_URL}/close.svg`}
                  loading="lazy"
                  alt="close"
                />
              </button>
            </header>
            <main className="modal__body">
              <div className="input input__icons input__premium">
                <div className="input__email">
                  <input
                    className="input__field--text email"
                    type="text"
                    value={signup.email}
                    placeholder="bablu_tailor@gmail.com"
                    onChange={(event) =>
                      inputHandler(event, "email", setSignup)
                    }
                  />
                  <label className="input__label">Email</label>
                </div>

                <div className="input__username">
                  <input
                    className="input__field--text user"
                    type="text"
                    value={signup.username}
                    placeholder="bablu_tailor"
                    onChange={(event) =>
                      inputHandler(event, "username", setSignup)
                    }
                  />
                  <label className="input__label">Username</label>
                </div>

                <div className="input__password">
                  <input
                    className="input__field--text password"
                    type={isPasswordVisible ? "text" : "password"}
                    value={signup.password}
                    placeholder="********"
                    onChange={(event) =>
                      inputHandler(event, "password", setSignup)
                    }
                  />
                  <img
                    className={`icon-md button__icon ${styles.showPwrdBtn}`}
                    src={`${ICONS_URL}/${
                      isPasswordVisible ? "eye-slash-solid" : "eye-solid"
                    }.svg`}
                    loading="lazy"
                    alt="close"
                    onClick={() =>
                      setIsPasswordVisible((prevState) => !prevState)
                    }
                  />
                  <label className="input__label">Password</label>
                </div>

                <div className="input__password">
                  <input
                    className="input__field--text password"
                    type="password"
                    value={signup.confirmPassword}
                    placeholder="********"
                    onChange={(event) =>
                      inputHandler(event, "confirmPassword", setSignup)
                    }
                  />
                  <label className="input__label">Confirm Password</label>
                </div>
              </div>
            </main>
            <footer className="modal__footer">
              <input
                value="Sign Up"
                type="submit"
                className="button btn-solid-primary modal__footer--btn"
              />
              <button
                className="button btn-outline-primary modal__footer--btn"
                onClick={() => authModalHandler("LOGIN")}
              >
                Login
              </button>
            </footer>
          </form>
        )}
      </div>
    </>
  );
};

export { AuthModal };
