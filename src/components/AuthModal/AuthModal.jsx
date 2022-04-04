import { useState } from "react";
import { useNavigate } from "react-router";
import {
  useAuth,
  useAuthModal,
  useCart,
  useLoader,
  useWishlist,
} from "../../context";
import { loginHandler, signupHandler, inputHandler } from "../../utilities";
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
  });

  const [signup, setSignup] = useState({
    email: "",
    password: "",
    username: "",
  });

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
            onSubmit={(event) =>
              loginHandler(
                event,
                login,
                authDispatch,
                cartDispatch,
                wishlistDispatch,
                authModalHandler,
                setLoader,
                navigate
              )
            }
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
                    type="text"
                    value={login.password}
                    placeholder="********"
                    onChange={(event) =>
                      inputHandler(event, "password", setLogin)
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
                    />
                    Remember me!
                  </label>
                </div>
                <button className={`cp ${styles.forgetPassword}`}>
                  Forget Password?
                </button>
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
            onSubmit={(event) =>
              signupHandler(
                event,
                signup,
                authDispatch,
                authModalHandler,
                setLoader,
                navigate
              )
            }
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
                    type="text"
                    placeholder="********"
                    onChange={(event) =>
                      inputHandler(event, "password", setSignup)
                    }
                  />
                  <label className="input__label">Password</label>
                </div>
              </div>
              <div className="checkbox txt-center">
                <label className="radio__label" htmlFor="remember-me-signup">
                  <input
                    className="input__field--checkbox"
                    id="remember-me-signup"
                    name="unchecked"
                    type="checkbox"
                  />
                  Remember me!
                </label>
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
