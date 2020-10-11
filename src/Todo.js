import React from "react";
import { ListGroup } from "react-bootstrap";


export default function Todo({ todo, toggleTodo }) {

  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <ListGroup.Item>
      <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
      &#160;{todo.name}
    </ListGroup.Item>
  )
}
