import { useState } from 'react'
import './AddTask.css'

const AddTask = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDescription, setEnteredDescription] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const taskData = {
            title: enteredTitle,
            description: enteredDescription
        }

        //props.onSaveTaskData(taskData)
        //2-way binding
        console.log(taskData)
        setEnteredTitle('')
        setEnteredDescription('')
        console.log(taskData)
    }

    return (
        <div className="new-task-container">
            <form onSubmit={submitHandler}>
                <div className="new-task">
                    <div className="new-task-control">
                        <label>Title</label>
                        <input
                            type='text'
                            placeholder='Task Name'
                            value={enteredTitle}
                            onChange={titleChangeHandler}    
                        />
                    </div>

                    <div className="new-task-control">
                        <label>Description</label>
                        <input
                            type='text'
                            placeholder='Task description'
                            value={enteredDescription}
                            onChange={descriptionChangeHandler}    
                        />
                    </div>
                </div>

                <div className="new-task-submit">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddTask
