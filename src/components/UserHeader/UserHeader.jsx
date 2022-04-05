import { useAuth } from "../../context";
import styles from "./UserHeader.module.css";

const UserHeader = () => {
  const { authState } = useAuth();

  return (
    <div className={styles.card}>
      {authState.token ? (
        <p className={styles.greet}>Hello, {authState.user.username}👋</p>
      ) : null}
    </div>
  );
};

export { UserHeader };
