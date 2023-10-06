import { useState } from "react"

const NewToDo = (props) => {
    let [numOfTasks, setNumOfTasks] = useState(0)

    const addToDo = (e) => {
        const toDo = e.target.todo.value
        e.preventDefault();
        setNumOfTasks(numOfTasks+1)
        props.setToDoList([
            ...props.toDoList,
            {
            id: numOfTasks,
            task: toDo,
            complete: false,
            }
        ]);;
    console.log(props.toDoList)
    }

    return (
        <main>
            <form
            onSubmit={addToDo}>
                <input 
                class="todoinput"
                type="text"
                name="todo"
                placeholder="What do you need to-do?"
                />
                <button type="submit">Add</button>
            </form>
        </main>
    )
}

export default NewToDo;