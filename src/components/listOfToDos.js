const ListOfToDos = (props) => {

    const markCompleteToDo = (e) => {
        const updatedTasks = props.toDoList.map((toDo) => {
            if (e.target.value === toDo.id.toString()) {
                return { ...toDo, complete: !toDo.complete };
            }
            console.log(`todo id:${toDo.id}, etargetvalue:${e.target.value} marked as ${toDo.complete}`)
            return toDo;
            });
            props.setToDoList(updatedTasks);
    }
    
    const deleteTodoItem = (e) => {
        let filtered_arr = props.toDoList.filter(x => x.id.toString() !== e.target.value)
        console.log(filtered_arr)
        console.log(e.target.value)
        props.setToDoList(filtered_arr)
        
    }
    

    const filteredList = props.toDoList.filter(toDo => toDo.complete === false);

    if (props.filtered) {
        return(
        <div>
            {filteredList.map((toDo, index) => (
                <div class="todo-item" key={index}>
                        <label className={ toDo.complete ? 'completed' : '' }>{toDo.task}</label>
                        <button className={ toDo.complete ? 'active-complete-btn' : 'complete-btn' } value={toDo.id} onClick={markCompleteToDo}>✔️</button>    
                        <button class="delete-btn" value={toDo.id} onClick={deleteTodoItem}>❌</button>
                    </div>
        ))}
        </div>
        )
    } else {
        return(
            <div>
                {props.toDoList.map((toDo, index) => (
                    <div class="todo-item" key={index}>
                        <label className={ toDo.complete ? 'completed' : '' }>{toDo.task}</label>
                        <button className={ toDo.complete ? 'active-complete-btn' : 'complete-btn' } value={toDo.id} onClick={markCompleteToDo}>✔️</button>    
                        <button name="delete-btn" class="delete-btn" value={toDo.id} onClick={deleteTodoItem}>❌</button>
                    </div>
            ))}
            </div>
        )
    }
};

export default ListOfToDos;