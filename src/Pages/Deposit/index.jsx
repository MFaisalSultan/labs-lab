import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import styles from "./deposit.module.scss";
import InputField from "../../Components/InputFields/InputField";
import AppButton from "../../Components/Buttons/AppButton";
import { FaStripeS } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import classNames from "classnames";
import Transaction from "../../Components/Cards/TransactionCard";

const data = [
  {
    id: "#0199",
    date: "Dec 23, 04:00 PM",
    amount: "421.00",
    status: "success",
  },
  {
    id: "#0199",
    date: "Dec 23, 04:00 PM",
    amount: "421.00",
    status: "pending",
  },
  {
    id: "#0199",
    date: "Dec 23, 04:00 PM",
    amount: "421.00",
    status: "error",
  },
  {
    id: "#0199",
    date: "Dec 23, 04:00 PM",
    amount: "421.00",
    status: "success",
  },
  {
    id: "#0199",
    date: "Dec 23, 04:00 PM",
    amount: "421.00",
    status: "pending",
  },
  {
    id: "#0199",
    date: "Dec 23, 04:00 PM",
    amount: "421.00",
    status: "error",
  },
];

export default function Deposit() {
  return (
    <div className={styles.dashboard}>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={6} xxl={6}>
          <div className={styles.formLayout}>
            <Form className={styles.form}>
              <InputField
                required
                type="text"
                label={<p className="text-black">Amount</p>}
                placeholder="$0.00"
                defaultValue="$0.00"
              />
              <p className={classNames(styles.formLabel, "mt-3")}>
                Chose Payment Method
              </p>
              <div className={styles.btnGrid}>
                <AppButton
                  title="Stripe"
                  className={classNames(styles.stripBtn, styles.btn)}
                >
                  <FaStripeS className={styles.btnIcon} />
                </AppButton>
                <AppButton
                  title="Cash App"
                  className={classNames(styles.cashAppBtn, styles.btn)}
                >
                  <SiCashapp className={styles.btnIcon} />
                </AppButton>
              </div>
            </Form>
          </div>
          <div className={classNames(styles.formLayout, "mt-3")}>
            <p className={classNames(styles.formLabel, "mt-4")}>
            Transaction history
            </p>
            {data.map((item, ind) => (
              <Transaction
                key={ind}
                {...item}
                className={styles.transactionCard}
              />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
