import { useState } from 'react'
import './App.css'

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

function Todo() {
  const [todos,setTodos] = useState(toDo)

  return (
  <>
  {todos.map((el) => 
      <div key={el.id}>
        <p> {el.title}</p>
        <p> {el.id}</p>
        <p>{el.completed && "true"}</p>
      </div>
    )
  }
  </>)
}

export default Todo