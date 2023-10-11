import Form from "react-bootstrap/Form";

export default function InputField({
  feedback,
  label,
  ...props
}) {
  return (
    <div className="app-form-fields">
      <Form.Group controlId="validationCustom01">
       {label && <Form.Label>{label}</Form.Label>}
        <Form.Control
          {...props}
        />
        <Form.Control.Feedback>{feedback}</Form.Control.Feedback>
      </Form.Group>
    </div>
  );
}
