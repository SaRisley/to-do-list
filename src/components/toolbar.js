const Toolbar = (props) => {

    const toggleCheckBox = () => {
        props.setFiltered(!props.filtered)
    }

    return (
        <ul class="toolbar">
            <li class="outstanding"><input class="checkbox" type="checkbox" onChange={toggleCheckBox}/>Show outstanding</li>
            <li class="pending">Pending Tasks: {(props.toDoList.filter(toDo => toDo.complete === false)).length}</li>
        </ul>
    )
}

export default Toolbar;