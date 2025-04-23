// STYLES //
import { ListItem, Label, CheckboxContainer, Checkbox } from "./Task.css.js";

// COMPONENT //
function Task({ taskDescription }) {
  return (
    <ListItem>
      <Label>
        {taskDescription}
        <CheckboxContainer>
          <Checkbox></Checkbox>
        </CheckboxContainer>
      </Label>
    </ListItem>
  );
}

export default Task;
