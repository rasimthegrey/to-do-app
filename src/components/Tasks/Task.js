import TaskItem from "./TaskItem"

const Task = (props) => {
    return (
        <div>
            <TaskItem title={props.data[0].title} description={props.data[0].description}/>
            <TaskItem title={props.data[1].title} description={props.data[1].description}/>
            <TaskItem title={props.data[2].title} description={props.data[2].description}/>
            <TaskItem title={props.data[3].title} description={props.data[3].description}/>
        </div>
    )
}

export default Task
