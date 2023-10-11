import Form from "react-bootstrap/Form";

function Checkbox({ label, feedback, ...props }) {
  return (
    <Form.Check
      required
      label={label}
      feedback={feedback}
      feedbackType="invalid"
      {...props}
    />
  );
}

export default Checkbox;
