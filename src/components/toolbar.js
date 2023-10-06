const Toolbar = (props) => {

    const toggleCheckBox = () => {
        props.setFiltered(!props.filtered)
    }

    return (
        <div>
            <p>Pending Tasks: {(props.toDoList.filter(toDo => toDo.complete === false)).length}</p>
            <input 
            type="checkbox" 
            onChange={toggleCheckBox} /> 
        <label>Show pending</label>
        </div>
    )
}

export default Toolbar;