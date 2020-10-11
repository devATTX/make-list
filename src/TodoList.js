import React from "react";
import Todo from "./Todo";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoList({ todos, toggleTodo }) {
  return (
    <Card style={{ width: '24rem' }}>
      <ListGroup variant="flush">
        {
          todos.map((todo) => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
          })
        }
      </ListGroup>
    </Card>
  )
}
