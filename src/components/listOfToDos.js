const ListOfToDos = (props) => {

    const markCompleteToDo = (e) => {
        console.log(e.target.value)
        const updatedTasks = props.toDoList.map((toDo) => {
            // if this task has the same ID as the edited task
            if (e.target.value === toDo.task) {
              // use object spread to make a new object
              // whose `completed` prop has been inverted
                console.log("1")
                return { ...toDo, complete: !toDo.complete };
            }
            console.log("2")
            return toDo;
            });
            console.log(updatedTasks)
            props.setToDoList(updatedTasks);
    }
    
    const deleteTodoItem = (index) => {
        const newTodoItems = [...props.toDoList]
        newTodoItems.splice(index, 1)
        props.setToDoList(newTodoItems)
        }

    return(
        <div>
            {props.toDoList.map((toDo, index) => (
                <div key={index}>
                    <label>{toDo.task}</label>
                    <input
                        value={toDo.task}
                        type="checkbox"
                        defaultChecked={toDo.completed}
                        onChange={markCompleteToDo}/>
                    <button onClick={deleteTodoItem}>Delete</button>
                </div>
        ))}
        </div>
    )
};

export default ListOfToDos;