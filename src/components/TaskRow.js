import "./TaskRow.css";
const TaskRow = ({task,toggleTask}) => {
  return (
    <tr>
              <td>
                  {task.name}

                  <label class="container">
                  <input type="checkbox" 
                    checked={task.done}
                    onChange={() => toggleTask(task)}
                    id="checkbox" />
                  <span class="checkmark"></span>
                  </label>

                  
              </td>
            </tr>
  )
}

export default TaskRow