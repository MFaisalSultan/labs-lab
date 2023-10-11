import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function AppInput({ md, id, feedback, formText, children, ...props }) {
  return (
    <div className="app-input">
      <Form.Group as={Col} md={md} controlId={id} className="input-group">
        <div className="input-wrapper">
          <span className="icon-wrapper">{children}</span>
          <Form.Control required {...props} />
        </div>
        {formText && <Form.Text>{formText}</Form.Text>}
        {feedback && <Form.Control.Feedback>{feedback}</Form.Control.Feedback>}
      </Form.Group>
    </div>
  );
}

export default AppInput;
