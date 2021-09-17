import AddTask from "./AddTask"

const NewTask = (props) => {

    const saveTaskDataHandler = enteredTask => {
        const taskData = {
            ...enteredTask,
            id: Math.random()
        }
        props.onAddTask(taskData)
    }

    return (
        <div>
            <AddTask onSaveTaskData={saveTaskDataHandler()} />
        </div>
    )
}

export default NewTask
