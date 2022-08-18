import {
  selectAllTasks,
  selectMaxTasks,
  selectShowCompletedTasks,
} from "../../store/tasks/selectors";
import { addTasks, toggleShowCompleted } from "../../store/tasks/slice";
import TaskCard from "../../components/TaskCard";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormInput from "../../components/FormInput";
import FormSubmit from "../../components/FormSubmit";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  const initialFormState = {
    task: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const allTasks = useSelector(selectAllTasks);
  const showCompletedTasks = useSelector(selectShowCompletedTasks);
  const maxTasks = useSelector(selectMaxTasks);
  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    dispatch(addTasks(formData));
    setFormData(initialFormState);
  };

  return (
    <div className="container">
      <h1> Task Manager </h1>
      {allTasks.map((task, index) =>
        task.completed && !showCompletedTasks ? (
          ""
        ) : (
          <TaskCard key={index} task={task} />
        )
      )}

      <div className="form-container">
        <Form onSubmit={handleOnSubmit}>
          <Row>
            <FormInput
              value={formData.task}
              label="Add Task"
              onChangeHandler={(e) =>
                setFormData({ ...formData, task: e.target.value })
              }
              disabled={maxTasks === allTasks.length}
            />
            <FormSubmit label="Submit" />
          </Row>
        </Form>
        <Row className="button-wrapper">
          <Col md={{ span: 6, offset: 3 }}>
            <Button onClick={() => dispatch(toggleShowCompleted())}>
              {!showCompletedTasks
                ? "Show Completed Tasks"
                : "Show pending Tasks"}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default HomePage;
