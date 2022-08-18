import "./style.scss";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function FormSubmit({ label }) {
  return (
    <Col>
      <Button variant="primary" type="submit">
        {label}
      </Button>
    </Col>
  );
}
