import { useState } from "react";
import { useAuth, useAuthModal } from "../../context";
import { loginService, signupService } from "../../services";
import { useNavigate } from "react-router";
import { ICONS_URL } from "../../constants";
import styles from "./AuthModal.module.css";

const dummyUser = {
  email: "bablutailor@gmail.com",
  password: "babluTailor123",
};

const AuthModal = () => {
  const { authModalState, authModalHandler } = useAuthModal();
  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [signup, setSignup] = useState({
    email: "",
    password: "",
    username: "",
  });

  const inputHandler = (e, action, inputType) => {
    action === "login"
      ? setLogin((prevState) => ({
          ...prevState,
          [inputType]: e.target.value,
        }))
      : setSignup((prevState) => ({
          ...prevState,
          [inputType]: e.target.value,
        }));
  };

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await loginService(login);
      if (response.status === 200) {
        localStorage.setItem("viskartToken", response.data.encodedToken);
        localStorage.setItem(
          "viskartUser",
          JSON.stringify(response.data.foundUser)
        );
        authDispatch({
          type: "LOGIN",
          payload: {
            token: response.data.encodedToken,
            user: response.data.foundUser,
          },
        });
        authModalHandler("CLOSE");
        alert("Login Successful");
        navigate("/");
      }
      if (response.status === 404) {
        throw new Error(
          "The email entered is not Registered. Please Enter a valid Email"
        );
      } else if (response.status === 401) {
        throw new Error("Incorrect Password! Please try again.");
      }
    } catch (error) {
      alert(error);
    }
  };

  const signUpHandler = async (e) => {
    try {
      e.preventDefault();
      let response = await signupService(signup);
      if (response.status === 201) {
        authDispatch({
          type: "SIGNUP",
          payload: {
            token: response.data.encodedToken,
            user: response.data.createdUser,
          },
        });
        localStorage.setItem("viskartToken", response.data.encodedToken);
        localStorage.setItem(
          "viskartUser",
          JSON.stringify(response.data.createdUser)
        );
        authModalHandler("CLOSE");
        alert("Signup Successful");
        navigate("/");
      } else {
        throw new Error("Something went wrong! Please try again later.");
      }
    } catch (error) {
      alert(error);
    }
  };

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
            onSubmit={loginHandler}
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
                    onChange={(e) => inputHandler(e, "login", "email")}
                  />
                  <label className="input__label">Email</label>
                </div>

                <div className="input__password">
                  <input
                    className="input__field--text password"
                    type="text"
                    value={login.password}
                    placeholder="********"
                    onChange={(e) => inputHandler(e, "login", "password")}
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
            onSubmit={signUpHandler}
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
                    onChange={(e) => inputHandler(e, "signup", "email")}
                  />
                  <label className="input__label">Email</label>
                </div>

                <div className="input__username">
                  <input
                    className="input__field--text user"
                    type="text"
                    placeholder="bablu_tailor"
                    onChange={(e) => inputHandler(e, "signup", "username")}
                  />
                  <label className="input__label">Username</label>
                </div>

                <div className="input__password">
                  <input
                    className="input__field--text password"
                    type="text"
                    placeholder="********"
                    onChange={(e) => inputHandler(e, "signup", "password")}
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
