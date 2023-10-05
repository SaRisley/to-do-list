const NewToDo = (props) => {
    let numOfTasks = props.toDoList.length

    const addToDo = (e) => {
        const toDo = e.target.todo.value
        e.preventDefault();
        props.setToDoList([
            ...props.toDoList,
            {
            id: numOfTasks++,
            task: toDo,
            complete: false,
            }
        ]);;
    }

    return (
        <main>
            <form
            onSubmit={addToDo}>
                <input 
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