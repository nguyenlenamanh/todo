import { Task } from "../task/task.component"

import '../task-list/task-list.styles.css'

export const TaskList = (props) => (
    <div className="task-list">
          {
              props.tasks.map(task => (
                <Task key={task.id} name={task.name} removeTask={() => props.removeTask(task.id)}/>
              ))
          }
    </div>
)