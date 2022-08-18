import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./style.css";
import Button from "react-bootstrap/Button";
import { removeTask, toggleTaskCompleted } from "../../store/tasks/slice";
import { useDispatch } from "react-redux";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const { id, name, completed } = task;
  return (
    <div className=" container task-container">
      <Card className="task">
        <Row>
          <Col>
            <p>{id}</p>
          </Col>
          <Col>
            <p>{name}</p>
          </Col>
          <Col>
            <Form.Check
              id="check-api-"
              checked={completed}
              onChange={() => dispatch(toggleTaskCompleted(id))}
            />
          </Col>
          <Col>
            <Col>
              <Button
                variant="primary"
                type="submit"
                onClick={() => dispatch(removeTask(id))}
              >
                Delete Task
              </Button>
            </Col>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default TaskCard;
