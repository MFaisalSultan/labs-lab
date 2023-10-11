import styles from "./cards.module.scss";
import { BsCheckLg } from "react-icons/bs";

export default function Transaction() {
  return (
    <div className={styles.transaction}>
      <div className={styles.item}>
        <div className={styles.square}>
          <BsCheckLg />
        </div>
        <div className={styles.text}>
          <h1>Payment from <span>#0003</span></h1>
          <p>Jul 19, 04:32 PM</p>
        </div>
      </div>
      <h2>$50.00</h2>
    </div>
  );
}
