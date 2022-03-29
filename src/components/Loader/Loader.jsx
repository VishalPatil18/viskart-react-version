import { useLoader } from "../../context";
import styles from "./Loader.module.css";

const Loader = () => {
  const { loader } = useLoader();
  return (
    <div className={styles.container}>
      <div className={styles.centerText}>
        Hold on!
        <br />
        {loader.loaderMsg}
      </div>
      <div className={styles.loader}></div>
    </div>
  );
};

export { Loader };
