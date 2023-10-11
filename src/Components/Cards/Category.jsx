import styles from "./cards.module.scss";

export default function Category() {
  return (
    <div className={styles.category}>
      <div className={styles.categoryItem}>
        <h1>Balance</h1>
        <h2>$282.40</h2>
        <p>Last week $0</p>
      </div>
      <div className={styles.line} />
      <div className={styles.categoryItem}>
        <h1>Total Orders</h1>
        <h2>$28</h2>
        <p>Last week $0</p>
      </div>
      <div className={styles.line} />
      <div className={styles.categoryItem}>
        <h1>Total Deposited</h1>
        <h2>$400</h2>
        <p>Last week $75,251</p>
      </div>
      <div className={styles.line} />
      <div className={styles.categoryItem}>
        <h1>Labels Created Today</h1>
        <h2>$28</h2>
        <p>Yesterday 0</p>
      </div>
    </div>
  );
}
