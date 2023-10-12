import Table from "react-bootstrap/Table";
import Checkbox from "../InputFields/Checkbox";

export default function DataTable({ check, data }) {
  const headCells = data?.length > 0 ? Object.keys(data[0]) : [];
  return (
    <div className="app-table">
      <Table responsive="xl">
        <thead>
          <tr>
            {check && (
              <th className="text-center">
                <Checkbox/>
              </th>
            )}
            {headCells.map((headCell, index) => (
              <th key={index}>{headCell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {check && (
                <td className="text-center">
                  <Checkbox />
                </td>
              )}
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
