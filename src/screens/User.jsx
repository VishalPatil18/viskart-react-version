import { useNavigate } from "react-router";
import { useAuth } from "../context";
import styles from "./User.module.css";

const User = ({cname}) => {
  const {authState, authDispatch} = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("viskartToken");
    localStorage.removeItem("viskartUser");
    authDispatch({
      type: "LOGOUT"
    })
  }

  return (
    <section className={cname}>
      {authState.user && <p className={styles.greet}>Hello, {authState.user.username}👋</p>}
      <button className="button btn-solid-primary" onClick={logoutHandler}>Logout</button>
    </section>
  );
};

export { User };
