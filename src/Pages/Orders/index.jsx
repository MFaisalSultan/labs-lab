import Badge from "react-bootstrap/Badge";
import DataTable from "../../Components/DataTable";
import styles from "./orders.module.scss";
import AppBadge from "../../Components/Cards/AppBadge";
import {HiDotsHorizontal} from "react-icons/hi"

const tableData = [
  {
    "Order ID": 'SKN1200',
    "Tracking ID": '23060923524770818861',
    Name: 'Robert Fox',
    Date: '01.01.2022',
    Status: <AppBadge label="Continuing"  />,
    "Total Price": '$4.00',
    "": <HiDotsHorizontal size={24}/>,
  },
  {
    "Order ID": 'SKN1200',
    "Tracking ID": '23060923524770818861',
    Name: 'Robert Fox',
    Date: '01.01.2022',
    Status: <AppBadge label="completed"  />,
    "Total Price": '$4.00',
    "": <HiDotsHorizontal size={24}/>,
  },
  {
    "Order ID": 'SKN1200',
    "Tracking ID": '23060923524770818861',
    Name: 'Robert Fox',
    Date: '01.01.2022',
    Status: <AppBadge label="canceled"  />,
    "Total Price": '$4.00',
    "": <HiDotsHorizontal size={24}/>,
  },
]

export default function Orders() {
  return (
    <div className={styles.orders}>
      <DataTable check data={tableData} />
    </div>
  );
}
