import styles from "./cards.module.scss";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { PiClockClockwise } from "react-icons/pi";
import classNames from "classnames";

export default function Transaction({status, className, id, date, amount}) {
  let icon;
  let squareStyle;

  switch (status) {
    case 'success':
      icon = <BsCheckLg />;
      squareStyle = styles.success;
      break;
    case 'error':
      icon = <AiOutlineClose />;
      squareStyle = styles.error;
      break;
    case 'pending':
      icon = <PiClockClockwise />;
      squareStyle = styles.pending;
      break;
    default:
      icon = null;
      squareStyle = '';
  }
  return (
    <div className={classNames(styles.transaction, className)}>
      <div className={styles.item}>
        <div className={classNames(styles.square, squareStyle)}>
          {icon}
        </div>
        <div className={styles.text}>
          <h1>
            Payment from <span>{id}</span>
          </h1>
          <p>{date}</p>
        </div>
      </div>
      <h2>${amount}</h2>
    </div>
  );
}
