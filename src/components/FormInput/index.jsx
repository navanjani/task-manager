import "./style.scss";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function FormInput({
  label,
  value,
  onChangeHandler,
  disabled = false,
}) {
  return (
    <>
      <Col>
        <Form.Label className="input-label">{label}</Form.Label>
      </Col>

      <Col>
        <Form.Control
          type="text"
          value={value}
          onChange={onChangeHandler}
          disabled={disabled}
        />
      </Col>
    </>
  );
}
