import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Category from "../../Components/Cards/Category";
import styles from "./dashboard.module.scss";
import Transaction from "../../Components/Cards/TransactionCard";

const data = [
  {
    id: "#0003",
    date: "Jul 19, 04:36 PM",
    amount: "50.00",
    status: "success",
  },
  {
    id: "#0002",
    date: "Jul 19, 04:36 PM",
    amount: "300.00",
    status: "pending",
  },
  {
    id: "#0001",
    date: "Jul 19, 04:36 PM",
    amount: "100.00",
    status: "error",
  },
];

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Row className="h-100 m-0">
        <Col xs={8} className="p-0">
          <div className={styles.content}>
            <Category />
          </div>
        </Col>
        <Col className="p-0">
          <div className={styles.side}>
            <h1 className={styles}>Transaction history</h1>
            <div className={styles.list}>
              {data.map((item, ind) => (
                <Transaction key={ind} {...item} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
