import { useState } from "react"

const NewToDo = (props) => {
    let [numOfTasks, setNumOfTasks] = useState(0)
    const [inputValue, setInputValue] = useState('');

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
        ]);
        setInputValue('')
    }

    return (
        <main>
            <form
            onSubmit={addToDo}>
                <input 
                class="todoinput"
                type="text"
                name="todo"
                value={inputValue}
                placeholder="What do you need to-do?"
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </main>
    )
}

export default NewToDo;