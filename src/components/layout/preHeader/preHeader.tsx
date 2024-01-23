import { Button } from "../../reuseable/button/button";
import styles from "./prehaeder.module.scss";

export const PreHaeder = () => {
  return (
    <div className={styles.preHeader}>
      <div className={styles.buttonsContainer}>
        <a>
          <Button bgColor="#16375c" content="nossas parcerias" dropDown />
        </a>
        <a>
          <Button bgColor="#fdb913" content="inscreva-se" />
        </a>
      </div>
    </div>
  );
};
