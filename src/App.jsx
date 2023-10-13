import { useEffect, useState } from 'react'
import './App.css'
import CustomButton from './CustomButton'
import { Form } from './Form'

const toDo = [{
  id:1,
  title:"titles",
  completed:false,
},
{
  id:2,
  title:"title",
  completed:true,
}]

function App() {
  
  const [todos,setTodos] = useState(toDo)
  const [selectTodo, setSelectTodo] = useState()

  const handleReset = () => {
    const resetButton = window.document.getElementById("reset");
    resetButton.click();
}

  function createNewTodo( event ) {
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

  return  (
  <>
  <Form handleSubmit= {createNewTodo}/>
  {
    todos.map((el) => 
      <div style={{border: '3px solid red'}} key={el.id}>
        <p style={{backgroundColor: el.completed ? 'green' : 'red'}}> {el.title}</p>
        <p> {el.id}</p>
        <p>{el.completed ? "completato": "non completato"}</p>
        <button id={el.id} onClick={() => handleRemoveSingleElement(el.id)}>remove element</button>
        <button onClick={() => setSelectTodo(el.id)}>modifica</button>
        { selectTodo === el.id && 
        <>
          <input type="text" value={el.title}/>
          <input type="checkbox" checked={el.completed}/>
        </>
        }
      </div>
    )
  }
  </>)
}

export default App