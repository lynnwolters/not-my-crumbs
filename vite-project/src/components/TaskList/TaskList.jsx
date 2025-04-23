// IMPORTS //
import Task from "../Task/Task.jsx";

// DATA //
import taskDescriptions from "../../data/TaskDescriptions.js";

// STYLES //
import { Title, List } from "./TaskList.css.js";

// COMPONENT //
function TaskList() {
  return (
    <>
      <Title>
        Kitchen
        <span>0/4</span>
      </Title>
      <List>
        {taskDescriptions.map((taskDescription, index) => {
          return <Task key={index} taskDescription={taskDescription}></Task>;
        })}
      </List>
    </>
  );
}

export default TaskList;
