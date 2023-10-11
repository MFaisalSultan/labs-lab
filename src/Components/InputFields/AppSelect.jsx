import Form from "react-bootstrap/Form";

export default function AppSelect({ options, label, ...props }) {
  return (
    <div className="app-form-fields">
      <Form.Group controlId="validationCustom01">
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Select aria-label="Default select example">
          {options.map((option, ind) => (
            <option value={ind}>{option}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
}
