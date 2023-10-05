const Toolbar = (props) => {

    return (
        <div>
            <p>Pending Tasks: {(props.toDoList.filter(x => x.complete === false)).length}</p>
        </div>
    )
}

export default Toolbar;