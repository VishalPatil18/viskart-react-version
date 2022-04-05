import { useAuth } from "../../context";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const {
    authState: { user },
  } = useAuth();

  return (
    <section>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tableRow}>
            <td className={`${styles.tableData} ${styles.heading}`}>
              Username
            </td>
            <td className={styles.tableData}>{user.username}</td>
          </tr>
          <tr>
            <td className={`${styles.tableData} ${styles.heading}`}>Email </td>
            <td className={styles.tableData}>{user.email}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export { UserProfile };
