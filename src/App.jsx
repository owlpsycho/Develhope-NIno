import { useEffect, useState } from 'react'
import './App.css'

import { Form } from './Form'

const toDo = [{
  id: 1,
  title: "titles",
  completed: false,
},
{
  id: 2,
  title: "title",
  completed: true,
}]
const defaultValue = { title: "", completed: false, id: null }

function App() {

  const [editTodo, setEditTodo] = useState(defaultValue)
  const [todos, setTodos] = useState(toDo)


  const handleReset = () => {
    const resetButton = window.document.getElementById("reset");
    resetButton.click();
  }

  function createNewTodo(event) {
    event.preventDefault();

    const data = new FormData(event.target)
    const title = data.get("title")
    const completed = data.get("completed")

    const newListElement = {
      id: Math.random(),
      title,
      completed: completed ? true : false,
    }

    setTodos(prevList => [...prevList, newListElement]);
    handleReset();

  }

  const handleRemoveSingleElement = (id) => {

    setTodos(prevList => prevList.filter(element => element.id !== id))
  }

  const handleEditTodo = (event) => {
    setEditTodo(prev => {
      return {
        ...prev,
        title: event.target.value
      }
    })
  }

  const handleEditcheck = (event) => {
    setEditTodo(prev => {
      return {
        ...prev,
        completed: event.target.checked ? true : false
      }
    })
  }

  const handleSaveTodo = () => {
    setTodos(prev => {
      console.log(prev);
      const newTodo = prev.map(el => {
        if (el.id === editTodo.id) {
          return {
            ...el, title: editTodo.title,
            completed: editTodo.completed

          }
        } return el

      })
      return newTodo
    })
    setEditTodo(defaultValue)
  }

  return (
    <>
      <Form handleSubmit={createNewTodo} />
      {
        todos.map((el) =>
          <div style={{ border: '3px solid red' }} key={el.id}>
            <p style={{ backgroundColor: el.completed ? 'green' : 'red' }}> {el.title}</p>
            <p> {el.id}</p>
            <p>{el.completed ? "completato" : "non completato"}</p>
            <button id={el.id} onClick={() => handleRemoveSingleElement(el.id)}>remove element</button>
            <button onClick={() => { editTodo.id === el.id ? handleSaveTodo() : setEditTodo(el) }}> {editTodo.id === el.id ? "salva" : "modifica"}</button>
            {editTodo.id === el.id &&
              <>
                <input type="text" onChange={handleEditTodo} value={editTodo.title} />
                <input type="checkbox" onChange={handleEditcheck} checked={editTodo.completed} />
              </>
            }
          </div>
        )
      }
    </>)
}

export default App