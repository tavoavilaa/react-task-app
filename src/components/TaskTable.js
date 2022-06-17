import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ taskItems, toggleTask, showCompleted = false }) => {

  const taskTableRows = (doneValue) => {



    return (
        taskItems
        .filter(task => task.done === doneValue)
        .map((task) => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
          ))
    )
  };

  return (
    <table>
      <thead>
        <tr>
          {showCompleted ? <th> Completed </th> : <th> Task </th>}
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};

export default TaskTable;
