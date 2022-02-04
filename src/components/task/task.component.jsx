import '../task/task.styles.css';

export const Task = (props) => (
    <div className='task noselect'>
        <b>{props.name}</b>
        <a className="close" onClick={props.removeTask}/>
    </div>
)