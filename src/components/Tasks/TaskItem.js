import './TaskItem.css'

const TaskItem = (props) => {
    return (
        <div className="task-container">
            <div className="task-description">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}

export default TaskItem
