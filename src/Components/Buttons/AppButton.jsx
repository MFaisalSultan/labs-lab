import Button from "react-bootstrap/Button";

function AppButton({ title, children, ...props }) {
  return (
    <Button {...props}>
      <span>{children}</span>
      {title}
    </Button>
  );
}

export default AppButton;
