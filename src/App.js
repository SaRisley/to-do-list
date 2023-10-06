import './App.css';
import { useState, useEffect } from 'react';
import NewToDo from './components/newToDo';
import ListOfToDos from './components/listOfToDos';
import Toolbar from './components/toolbar';

function App() {

  function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null && key !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const [toDoList, setToDoList] = useStickyState([])
  const [filtered, setFiltered] = useState(false)

  return (
    <div className="App">
      <h1>To-do List</h1>
      <NewToDo toDoList={toDoList} setToDoList={setToDoList}/>
      <Toolbar toDoList={toDoList} filtered={filtered} setFiltered={setFiltered}/>
      <ListOfToDos toDoList={toDoList} setToDoList={setToDoList} filtered={filtered}/>
    </div>
  );
}

export default App;
